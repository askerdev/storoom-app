import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import useCreateUser from "@/api/queries/user/useCreateUser";
import useGetSubjects from "@/api/queries/subjects/useGetSubjects";
import useGetUserById from "@/api/queries/user/useGetUserById";
import { AllRoles } from "@/constants/enums";
import {
  CreateTeacherSchema,
  TCreateTeacherSchema,
  TUpdateTeacherSchema,
  UpdateTeacherSchema,
} from "@/api/schemas/teacher";
import { TUpdateUserSchema } from "@/api/schemas/user";
import { ITeacherProfileRes } from "@/types/response.api";
import FormTextInput from "../../../../components/FormTextInput";
import Center from "@/components/ui/Center";
import Spinner from "@/components/ui/icons/Spinner/Spinner";
import FormSelect from "../../../../components/FormSelect";
import FormPhotoFile from "@/components/FormPhotoFile";
import { acceptImageFileTypes } from "@/constants/api";
import useUpdateTeacher from "@/api/queries/user/useUpdateTeacher";
import {
  ICreateUserDTO,
  ITeacherDTO,
  IUpdateTeacherDTO,
} from "@/types/request.api";

type TTeacherFormProps = {
  id?: string;
  onSuccess?: () => void;
};

const TeacherForm = ({ id, onSuccess }: TTeacherFormProps) => {
  const isCreate = !id;
  const user = useGetUserById<ITeacherProfileRes>(id as string, !isCreate);
  const update = useUpdateTeacher(id as string, {
    onSuccess,
  });
  const create = useCreateUser({ onSuccess });
  const subjects = useGetSubjects();
  const isSuccess = subjects.isSuccess && (user.isSuccess || isCreate);
  const disabled =
    (!isCreate && user.isPending) ||
    subjects.isPending ||
    update.isPending ||
    create.isPending;
  const methods = useForm<TCreateTeacherSchema | TUpdateTeacherSchema>({
    resolver: yupResolver(
      !isCreate ? UpdateTeacherSchema : CreateTeacherSchema,
    ),
    defaultValues: {
      user: { role: AllRoles.teacher },
    },
  });

  const onSubmit = async (
    data: TCreateTeacherSchema | TUpdateTeacherSchema,
  ) => {
    if (isCreate) {
      create.mutate({
        ...(data.user as ICreateUserDTO),
        teacher: data.teacher as ITeacherDTO,
      });
    } else {
      update.mutate(data as IUpdateTeacherDTO);
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

  const subjectOptions = (subjects.data?.list || []).map((subject) => ({
    value: subject.id,
    label: subject.name,
  }));

  return (
    <FormProvider {...methods}>
      <Flex
        onSubmit={methods.handleSubmit(onSubmit)}
        as="form"
        $flexDirection="column"
        $justifyContent="space-between"
        $height="100%"
        $gap={40}
      >
        <Flex $flexDirection="column" $gap={40}>
          <FormTextInput<TCreateTeacherSchema | TUpdateUserSchema>
            name="user.name"
            defaultValue={user.data?.name ?? ""}
            label="Имя"
            placeholder="Имя Фамилия"
            $textVariant="h1"
            $withBottomLine
            $maxWidth="467px"
            $width="100%"
            disabled={disabled}
          />

          <FormPhotoFile<TCreateTeacherSchema | TUpdateUserSchema>
            name="teacher.avatar"
            defaultValue={user.data?.teacher?.avatar ?? ""}
            label="Аватарка"
            info="Максимальный размер файла 300 Мб"
            accept={acceptImageFileTypes}
          />

          <FormTextInput<TCreateTeacherSchema | TUpdateUserSchema>
            name="user.phone"
            defaultValue={user.data?.phone ?? ""}
            label="Номер телефона"
            placeholder="Номер телефона"
            $textVariant="button"
            $withBottomLine
            $width={196}
            disabled={disabled}
          />

          <FormTextInput<TCreateTeacherSchema | TUpdateUserSchema>
            name="user.email"
            defaultValue={user.data?.email ?? ""}
            label="Email"
            placeholder="mailru@mail.ru"
            $textVariant="button"
            $withBottomLine
            $width={196}
            disabled={disabled}
          />

          {!id && (
            <FormTextInput<TCreateTeacherSchema | TUpdateUserSchema>
              name="user.password"
              defaultValue=""
              type="password"
              label="Пароль"
              placeholder="Пароль"
              $textVariant="button"
              $withBottomLine
              $width={196}
              disabled={disabled}
            />
          )}

          {!id && (
            <FormSelect<TCreateTeacherSchema | TUpdateUserSchema>
              name="teacher.subject"
              disabled={disabled}
              defaultValue={user.data?.teacher.subject.id ?? ""}
              options={subjectOptions}
            />
          )}
        </Flex>

        <Button $fullWidth disabled={disabled} type="submit" $variant="primary">
          {id ? "Сохранить" : "Создать"}
        </Button>
      </Flex>
    </FormProvider>
  );
};
export default TeacherForm;
