import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import useGetUserById from "@/api/queries/user/useGetUserById";
import useUpdateUser from "@/api/queries/user/useUpdateUser";
import { TUpdateUserSchema, UpdateUserSchema } from "@/api/schemas/user";
import { IStudentProfileRes } from "@/types/response.api";
import FormTextInput from "../../../../components/FormTextInput";
import Center from "@/components/ui/Center";
import Spinner from "@/components/ui/icons/Spinner/Spinner";
import Courses from "@/features/admin/components/StudentForm/Courses.tsx";

type TStudentProps = {
  id: string;
  onSuccess?: () => void;
};

const StudentForm = ({ id, onSuccess }: TStudentProps) => {
  const user = useGetUserById<IStudentProfileRes>(id);
  const update = useUpdateUser(id as string, { onSuccess });
  const { isSuccess } = user;
  const disabled = update.isPending || user.isPending;
  const methods = useForm<TUpdateUserSchema>({
    resolver: yupResolver(UpdateUserSchema),
  });

  const onSubmit = (data: TUpdateUserSchema) => {
    update.mutate(data);
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
        onSubmit={methods.handleSubmit(onSubmit)}
        as="form"
        $flexDirection="column"
        $justifyContent="space-between"
        $height="100%"
        $gap={40}
      >
        <Flex $flexDirection="column" $gap={40}>
          <FormTextInput<TUpdateUserSchema>
            disabled={disabled}
            name="name"
            defaultValue={user.data?.name ?? ""}
            label="Имя"
            placeholder="Иванов Иван Иванович"
            $textVariant="h1"
            $withBottomLine
            $maxWidth="467px"
            $width="100%"
          />

          <FormTextInput<TUpdateUserSchema>
            disabled={disabled}
            name="email"
            defaultValue={user.data?.email ?? ""}
            label="Email"
            placeholder="mailru@mail.ru"
            $textVariant="button"
            $withBottomLine
            $maxWidth="467px"
            $width="100%"
          />

          <FormTextInput<TUpdateUserSchema>
            disabled={disabled}
            name="phone"
            defaultValue={user.data?.phone ?? ""}
            label="Номер телефона"
            $textVariant="button"
            $withBottomLine
            $maxWidth="467px"
            $width="100%"
          />
          <Courses studentId={id} />
        </Flex>

        <Button $fullWidth disabled={disabled} $variant="primary">
          Сохранить
        </Button>
      </Flex>
    </FormProvider>
  );
};
export default StudentForm;
