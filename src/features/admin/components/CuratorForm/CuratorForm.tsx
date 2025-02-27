import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Spinner from "@/components/ui/icons/Spinner";
import {
  CreateCuratorSchema,
  TCreateCuratorSchema,
  TUpdateCuratorSchema,
  UpdateCuratorSchema,
} from "@/api/schemas/curator";
import FormMultiSelect from "@/components/FormMultiSelect";
import FormTextInput from "../../../../components/FormTextInput";
import useGetSubjects from "@/api/queries/subjects/useGetSubjects";
import useGetUserById from "@/api/queries/user/useGetUserById";
import { ICuratorProfileRes } from "@/types/response.api";
import useUpdateCurator from "@/api/queries/user/useUpdateCurator";
import useCreateUser from "@/api/queries/user/useCreateUser";
import { ICreateUserDTO } from "@/types/request.api";
import { AllRoles } from "@/constants/enums";
import Center from "@/components/ui/Center";
import Typography from "@/components/ui/Typography";
import FormPhotoFile from "@/components/FormPhotoFile";
import { acceptImageFileTypes } from "@/constants/api";

interface ICuratorFormProps {
  curatorId?: string;
  onSuccess?: () => void;
}

const CuratorForm = ({ curatorId, onSuccess }: ICuratorFormProps) => {
  const isCreate = !curatorId;
  const subjects = useGetSubjects();
  const user = useGetUserById<ICuratorProfileRes>(
    curatorId as string,
    !isCreate,
  );
  const update = useUpdateCurator(curatorId as string, { onSuccess });
  const create = useCreateUser({ onSuccess });
  const isSuccess = subjects.isSuccess && (user.isSuccess || isCreate);
  const disabled =
    (!isCreate && user.isPending) ||
    subjects.isPending ||
    update.isPending ||
    create.isPending;

  const onSubmit = (data: TUpdateCuratorSchema | TCreateCuratorSchema) => {
    if (isCreate) {
      create.mutate({
        ...(data.user as ICreateUserDTO),
        curator: data.curator,
      });
    } else {
      update.mutate(data as TUpdateCuratorSchema);
    }
  };
  const defaultSubjects =
    user.data?.curator.subjects.map((subject) => subject.id) ?? [];
  const methods = useForm<TUpdateCuratorSchema | TCreateCuratorSchema>({
    resolver: yupResolver(
      curatorId ? UpdateCuratorSchema : CreateCuratorSchema,
    ),
    defaultValues: {
      user: {
        role: AllRoles.curator,
      },
    },
  });

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

  const subjectOptions = subjects.data.list.map(({ id, name }) => ({
    value: id,
    label: name,
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
          <FormTextInput<TUpdateCuratorSchema | TCreateCuratorSchema>
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

          <FormPhotoFile<TUpdateCuratorSchema | TCreateCuratorSchema>
            name="curator.avatar"
            defaultValue={user.data?.curator?.avatar ?? ""}
            label="Аватарка"
            info="Максимальный размер файла 300 Мб"
            accept={acceptImageFileTypes}
          />

          <FormMultiSelect<TCreateCuratorSchema | TUpdateCuratorSchema>
            name="curator.subjects"
            options={subjectOptions}
            defaultValue={defaultSubjects}
            disabled={disabled}
          />

          <FormTextInput<TUpdateCuratorSchema | TCreateCuratorSchema>
            name="user.phone"
            defaultValue={user.data?.phone ?? ""}
            label="Номер телефона"
            placeholder="Номер телефона"
            $textVariant="button"
            $withBottomLine
            $width={196}
            disabled={disabled}
          />

          <FormTextInput<TUpdateCuratorSchema | TCreateCuratorSchema>
            name="user.email"
            defaultValue={user.data?.email ?? ""}
            label="Email"
            placeholder="mailru@mail.ru"
            $textVariant="button"
            $withBottomLine
            $width={196}
            disabled={disabled}
          />

          {!curatorId && (
            <FormTextInput<TCreateCuratorSchema>
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
        </Flex>

        <Button $fullWidth disabled={disabled} type="submit" $variant="primary">
          {curatorId && !disabled ? "Сохранить" : "Создать"}
          {disabled && <Spinner />}
        </Button>
      </Flex>
    </FormProvider>
  );
};
export default CuratorForm;
