import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import { useIsMutating } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import Spinner from "@/components/ui/icons/Spinner";
import DatePicker from "@/components/ui/DatePicker";
import useUpdateLesson from "@/api/queries/lesson/useUpdateLesson";
import useCreateLesson from "@/api/queries/lesson/useCreateLesson";
import useGetLessonById from "@/api/queries/lesson/useGetLessonById";

import { LessonSchema, TLessonSchema } from "@/api/schemas/lesson";
import Center from "@/components/ui/Center";
import FormTextInput from "@/components/FormTextInput";
import FormTextArea from "@/components/FormTextArea";
import FormFileList from "@/components/FormFileList";
import VideoList from "@/components/VideoList";
import { acceptFileTypes, acceptImageFileTypes } from "@/constants/api";
import { mediaKeys } from "@/api/queries/keys";
import FormPhotoFile from "@/components/FormPhotoFile";

type TLessonFormProps = {
  id?: string;
  courseId: string;
  onSuccess?: () => void;
  order?: number;
};

const LessonForm = ({
  courseId,
  id = "",
  order = 0,
  onSuccess,
}: TLessonFormProps) => {
  const lesson = useGetLessonById(id, !!id);
  const { isSuccess: isLessonSuccess } = lesson;
  const isUploading = useIsMutating({
    mutationKey: mediaKeys.detail("upload"),
  });
  const create = useCreateLesson({ onSuccess });
  const update = useUpdateLesson({ onSuccess });
  const isSuccess = lesson.isSuccess || !id;
  const disabled =
    create.isPending ||
    update.isPending ||
    !!isUploading ||
    (!!id && lesson.isPending);

  const methods = useForm<TLessonSchema>({
    resolver: yupResolver(LessonSchema),
    defaultValues: {
      course: courseId,
      videoUrl: lesson.data?.videoUrl.map((value) => ({ value })),
      material: lesson.data?.material,
      homeworkMaterial: lesson.data?.homeworkMaterial,
      order,
    },
  });

  const { reset, control, handleSubmit, formState } = methods;

  const videos = useFieldArray({
    control,
    name: "videoUrl",
  });

  const action = useCallback(
    async (data: TLessonSchema) => {
      try {
        if (id) {
          await update.mutateAsync({
            id,
            ...data,
            videoUrl: (Array.isArray(data.videoUrl) ? data.videoUrl : []).map(
              (item) => item.value,
            ),
          });
        } else {
          await create.mutateAsync({
            ...data,
            videoUrl: (Array.isArray(data.videoUrl) ? data.videoUrl : []).map(
              (item) => item.value,
            ),
          });
        }
      } catch {
        //
      }
    },
    [id, create, update],
  );

  const onSubmit = (data: TLessonSchema) => {
    toast.promise(action(data), {
      loading: "Загрузка файлов...",
    });
  };

  useEffect(() => {
    if (isLessonSuccess) {
      reset((prev) => ({
        ...prev,
        videoUrl: lesson.data?.videoUrl.map((value) => ({ value })),
        material: lesson.data?.material,
        homeworkMaterial: lesson.data?.homeworkMaterial,
      }));
    }
  }, [isLessonSuccess]);

  if (disabled) {
    return (
      <Center>
        <Spinner $size={48} />
      </Center>
    );
  }

  if (!isSuccess) {
    return (
      <Center>
        <Typography $variant="h2" $color="error">
          Произошла ошибка
        </Typography>
      </Center>
    );
  }

  return (
    <FormProvider {...methods}>
      <Flex
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        onSubmit={handleSubmit(onSubmit)}
        as="form"
        $flexDirection="column"
        $gap={40}
      >
        <Flex $flexDirection="column" $gap={40}>
          <FormTextInput<TLessonSchema>
            defaultValue={lesson.data?.name ?? ""}
            name="name"
            label="Урок"
            placeholder="Название урока"
            $textVariant="h1"
            $withBottomLine
            $maxWidth="467px"
            $width="100%"
            disabled={disabled}
          />

          <FormPhotoFile<TLessonSchema>
            name="cover"
            defaultValue={lesson?.data?.cover ?? ""}
            label="Обложка урока"
            info="Максимальный размер файла 300 Мб"
            accept={acceptImageFileTypes}
          />

          <Flex $flexDirection="column">
            <VideoList
              disabled={disabled}
              fieldArray={videos}
              placeholder="Загрузите видео урока"
              title="Список видео"
              errors={
                Array.isArray(formState.errors.videoUrl)
                  ? formState.errors.videoUrl.map(
                      (item) => item?.value?.message,
                    )
                  : []
              }
            />
            {!!formState.errors.videoUrl?.message && (
              <Typography $variant="text1" $color="notification">
                {formState.errors.videoUrl.message}
              </Typography>
            )}
          </Flex>

          <FormTextInput<TLessonSchema>
            name="testUrl"
            defaultValue={lesson.data?.testUrl ?? ""}
            placeholder="Загрузите ссылку на google тесты"
            $borderColor="gray_100"
            $textVariant="button"
            $withBottomLine
            $maxWidth="467px"
            $width="100%"
            $padding={16}
            disabled={disabled}
          />

          <Controller
            name="time"
            control={control}
            defaultValue={lesson.data?.time ?? new Date().toISOString()}
            render={({ field, fieldState }) => (
              <Flex $flexDirection="column" $gap={8}>
                <Flex as="label" $gap={12}>
                  <Typography $variant="button">Дата проведения</Typography>
                  <DatePicker disabled={disabled} {...field} />
                </Flex>
                {!!fieldState.error?.message && (
                  <Typography $variant="text1" $color="notification">
                    {fieldState.error.message}
                  </Typography>
                )}
              </Flex>
            )}
          />

          <FormTextArea<TLessonSchema>
            name="description"
            defaultValue={lesson.data?.description ?? ""}
            disabled={disabled}
            label="Описание урока"
            placeholder="Добавьте описание своего урока..."
            cols={30}
            rows={4}
            $maxWidth={644}
          />

          <FormTextArea<TLessonSchema>
            name="homeworkDescription"
            defaultValue={lesson.data?.homeworkDescription ?? ""}
            disabled={disabled}
            label="Текст домашнего задания"
            placeholder="Добавьте описание к домашнему заданию..."
            cols={30}
            rows={4}
            $maxWidth={644}
          />

          <FormFileList<TLessonSchema>
            name="material"
            label="Материалы к уроку"
            accept={acceptFileTypes}
            defaultValue={[]}
            multiple
            info="Максимальный размер файла 300 Мб"
            disabled={disabled}
          />

          <FormFileList<TLessonSchema>
            name="homeworkMaterial"
            label="Материалы к ДЗ"
            accept={acceptFileTypes}
            defaultValue={[]}
            multiple
            info="Максимальный размер файла 300 Мб"
            disabled={disabled}
          />
        </Flex>

        <Button disabled={disabled} type="submit" $variant="primary" $gap={12}>
          {id ? "Сохранить" : "Создать"}
        </Button>
      </Flex>
    </FormProvider>
  );
};
export default LessonForm;
