import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

import Button from "@/components/ui/Button";
import useGetHomeworkById from "@/api/queries/homeworks/useGetHomeworkById";
import useUpdateHomework from "@/api/queries/homeworks/useUpdateHomework";
import { HomeworkStatus } from "@/constants/enums";
import {
  CuratorHomeworkSchema,
  TCuratorHomeworkSchema,
} from "@/api/schemas/homework";
import FormSelect from "@/components/FormSelect";
import Center from "@/components/ui/Center";
import Spinner from "@/components/ui/icons/Spinner";
import ReadonlyFileList from "@/components/ReadonlyFileList";
import ChatCuratorButton from "@/components/ChatButton/ChatCuratorButton.tsx";

type TCuratorHomeworkFormProps = {
  id: string;
  onSuccess?: () => void;
};

const homeworkOptions = [
  {
    value: HomeworkStatus.returned,
    label: "На правке",
  },
  {
    value: HomeworkStatus.approved,
    label: "Принято",
  },
  {
    value: HomeworkStatus.checking,
    label: "Проверка",
  },
];

const CuratorHomeworkForm = ({ id, onSuccess }: TCuratorHomeworkFormProps) => {
  const { data: homework } = useGetHomeworkById(id);

  const { mutate: update, isPending: isUpdatingHomework } =
    useUpdateHomework(onSuccess);
  const methods = useForm<TCuratorHomeworkSchema>({
    resolver: yupResolver(CuratorHomeworkSchema),
  });

  const onSubmit = (data: TCuratorHomeworkSchema) => {
    update({ id, ...data });
  };

  if (!homework) {
    return (
      <Center>
        <Spinner $size={48} />
      </Center>
    );
  }

  return (
    <FormProvider {...methods}>
      <Flex
        $flexDirection="column"
        $gap={40}
        as="form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Typography $variant="h1">Урок {homework.lesson.name}</Typography>
        <Typography $variant="text1" $ellipsis $lineClamp={3}>
          {homework.lesson.description}
        </Typography>
        <Flex
          $gap={20}
          $flexDirection={{ default: "column", lg: "row" }}
          $justifyContent="space-between"
          $alignItems="center"
        >
          <Typography $variant="button">
            Студент {homework.student.user.name}
          </Typography>
          <ChatCuratorButton studentId={homework.student.id} />
        </Flex>
        <Flex $flexDirection="column" $gap={8}>
          <Typography $variant="button">Задание</Typography>
          <Typography $variant="text1" $ellipsis $lineClamp="3">
            {homework.lesson.homeworkDescription}
          </Typography>
        </Flex>
        <Flex $flexDirection={{ default: "column", lg: "row" }} $gap={48}>
          <ReadonlyFileList
            list={homework.materials}
            title="Материалы студента"
          />

          <FormSelect<TCuratorHomeworkSchema>
            name="status"
            disabled={isUpdatingHomework}
            options={homeworkOptions}
            defaultValue={homework?.status || HomeworkStatus.checking}
          />
        </Flex>

        <Button $variant="primary" type="submit">
          Сохранить
        </Button>
      </Flex>
    </FormProvider>
  );
};

export default CuratorHomeworkForm;
