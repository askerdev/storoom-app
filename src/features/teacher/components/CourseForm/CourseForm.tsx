import { yupResolver } from "@hookform/resolvers/yup";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { normalizeFloat } from "@/utils/helpers";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Pen from "@/components/ui/icons/Pen";
import TextInput from "@/components/ui/TextInput";
import Typography from "@/components/ui/Typography";
import Spinner from "@/components/ui/icons/Spinner";
import useUpdateCourse from "@/api/queries/courses/useUpdateCourse";
import useCreateCourse from "@/api/queries/courses/useCreateCourse";
import useGetCourseById from "@/api/queries/courses/useGetCourseById";
import AdvantagesList from "../AdvantagesList";
import { CourseSchema, TCourseSchema } from "@/api/schemas/course";
import Center from "@/components/ui/Center";
import FormTextInput from "../../../../components/FormTextInput";
import FormTextArea from "../../../../components/FormTextArea";
import FormPhotoFile from "@/components/FormPhotoFile";
import { acceptImageFileTypes } from "@/constants/api";

type TCourseFormProps = {
  id?: string;
  onSuccess?: () => void;
};

const CourseForm = ({ id, onSuccess }: TCourseFormProps) => {
  const isCreate = !id;
  const update = useUpdateCourse(id as string, {
    onSuccess,
  });
  const create = useCreateCourse({
    onSuccess,
  });
  const course = useGetCourseById(id || "", !!id);
  const isSuccess = course.isSuccess || isCreate;
  const disabled = update.isPending || create.isPending;
  const methods = useForm<TCourseSchema>({
    resolver: yupResolver(CourseSchema),
    defaultValues: {
      advantages: course.data?.advantages.map((value) => ({
        displayName: value,
      })),
    },
  });

  const advantages = useFieldArray({
    control: methods.control,
    name: "advantages",
  });

  const onSubmit = (data: TCourseSchema) => {
    const strAdvantages = data.advantages.map((item) => item.displayName);
    if (isCreate) {
      create.mutate({
        ...data,
        price: normalizeFloat(data.price),
        advantages: strAdvantages,
      });
    } else {
      update.mutate({
        ...data,
        price: normalizeFloat(data.price),
        advantages: strAdvantages,
      });
    }
  };

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
        onSubmit={methods.handleSubmit(onSubmit)}
        as="form"
        $flexDirection="column"
        $justifyContent="space-between"
        $height="100%"
        $gap={40}
      >
        <Flex $flexDirection="column" $gap={40}>
          <FormTextInput<TCourseSchema>
            disabled={disabled}
            name="name"
            defaultValue={course.data?.name ?? ""}
            label="Курс"
            placeholder="Название курса"
            $textVariant="h1"
            $withBottomLine
            $maxWidth="467px"
            $width="100%"
          />

          <Controller
            control={methods.control}
            name="price"
            disabled={disabled}
            defaultValue={course.data?.price ?? 0}
            render={({ field, fieldState }) => (
              <Flex $flexDirection="column">
                <Flex $gap={{ lg: 40 }} as="label">
                  <Typography $variant="button">Стоимость курса</Typography>
                  <Flex $gap={8} $alignItems="center">
                    <TextInput
                      type="number"
                      placeholder="2 950"
                      $textVariant="button"
                      $withBottomLine
                      $width={72}
                      {...field}
                    />
                    <Typography $variant="button"> ₽ / мес.</Typography>
                  </Flex>
                  <Pen $size={24} $color="purple_200" />
                </Flex>
                {!!fieldState.error?.message && (
                  <Typography $variant="text1" $color="notification">
                    {fieldState.error?.message}
                  </Typography>
                )}
              </Flex>
            )}
          />

          <FormPhotoFile<TCourseSchema>
            name="cover"
            defaultValue={course.data?.cover ?? ""}
            label="Обложка у курсу"
            info="Максимальный размер файла 300 Мб"
            accept={acceptImageFileTypes}
          />

          <FormTextArea<TCourseSchema>
            name="description"
            defaultValue={course.data?.description ?? ""}
            disabled={disabled}
            label="Описание курса"
            placeholder="Добавьте описание своего курса..."
            cols={30}
            rows={4}
            $maxWidth={644}
          />

          <Flex $flexDirection="column">
            <AdvantagesList
              disabled={disabled}
              title="Преимущества курса"
              placeholder="Введите название преимущества"
              fieldArray={advantages}
            />
            {!!methods.formState.errors.advantages?.message && (
              <Typography $variant="text1" $color="notification">
                {methods.formState.errors.advantages.message}
              </Typography>
            )}
          </Flex>
        </Flex>

        <Button disabled={disabled} type="submit" $variant="primary">
          {isCreate ? "Создать" : "Сохранить"}
        </Button>
      </Flex>
    </FormProvider>
  );
};
export default CourseForm;
