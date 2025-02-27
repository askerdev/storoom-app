import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import Spinner from "@/components/ui/icons/Spinner";
import useCreateSubject from "@/api/queries/subjects/useCreateSubject";
import useUpdateSubject from "@/api/queries/subjects/useUpdateSubject";
import useGetSubjectById from "@/api/queries/subjects/useGetSubjectById";
import { SubjectSchema, TSubjectSchema } from "@/api/schemas/subject";
import Center from "@/components/ui/Center";
import FormTextInput from "../../../../components/FormTextInput";

type TSubjectFormProps = {
  id?: string;
  onSuccess?: () => void;
};

const SubjectForm = ({ id, onSuccess }: TSubjectFormProps) => {
  const isCreate = !id;
  const create = useCreateSubject({ onSuccess });
  const subject = useGetSubjectById(id as string, !isCreate);
  const update = useUpdateSubject(id as string, {
    onSuccess,
  });

  const isSuccess = subject.isSuccess || isCreate;
  const disabled =
    (!isCreate && subject.isPending) || update.isPending || create.isPending;

  const methods = useForm<TSubjectSchema>({
    resolver: yupResolver(SubjectSchema),
  });

  const onSubmit = (data: TSubjectSchema) => {
    if (isCreate) {
      create.mutate(data);
    } else {
      update.mutate(data);
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
        onSubmit={methods.handleSubmit(onSubmit)}
        as="form"
        $flexDirection="column"
        $justifyContent="space-between"
        $height="100%"
        $gap={40}
      >
        <FormTextInput<TSubjectSchema>
          name="name"
          defaultValue={subject.data?.name || ""}
          label="Имя"
          placeholder="Русский язык"
          $textVariant="h1"
          $withBottomLine
          $maxWidth="467px"
          $width="100%"
        />

        <Button $fullWidth type="submit" $variant="primary">
          {id ? "Сохранить" : "Создать"}
        </Button>
      </Flex>
    </FormProvider>
  );
};
export default SubjectForm;
