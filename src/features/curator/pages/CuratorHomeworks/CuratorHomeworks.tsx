import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import Flex from "@/components/ui/Flex";
import Table from "@/components/ui/Table";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { Route } from "@/routes/_layout.curator_.$course.$lesson.homeworks";
import useGetLessonById from "@/api/queries/lesson/useGetLessonById";
import useGetHomeworks from "@/api/queries/homeworks/useGetHomeworks";
import { defaultPagination } from "@/constants/api";
import CuratorHomeworkForm from "../../components/CuratorHomeworkForm";
import {
  CuratorHomeworksTabItem,
  CuratorHomeworksTableContainer,
  CuratorHomeworksTabsContainer,
} from "./styled";
import HomeworkStatus from "@/components/HomeworkStatus/HomeworkStatus";
import CuratorHomeworksSkeleton from "./CuratorHomeworksSkeleton";
import { IHomeworkByIdRes } from "@/types/response.api";
import { HomeworkStatus as EHomeworkStatus } from "@/constants/enums";
import Modal from "../../../../components/Modal";

const homeworkColumns: ColumnDef<IHomeworkByIdRes>[] = [
  {
    header: "Дата",
    cell: (props) => (
      <Typography $variant="text2" $color="gray_100">
        {dayjs(props.row.original.createdAt).format("DD.MM.YYYY")}
      </Typography>
    ),
  },
  {
    header: "Студент",
    cell: (props) => (
      <Typography $variant="text2" $color="gray_100">
        {props.row.original.student.user.name}
      </Typography>
    ),
  },
  // {
  //   header: "Задание",
  //   accessorKey: "lesson.homeworkDescription",
  //   cell: (props) => (
  //     <Flex $maxWidth="30%" $overflow="hidden">
  //       <Typography $variant="text2" $color="gray_100" $nowrap $ellipsis>
  //         {props.row.original.lesson.homeworkDescription}
  //       </Typography>
  //     </Flex>
  //   ),
  // },
  {
    header: "Статус",
    accessorKey: "status",
    cell: (props) => <HomeworkStatus status={props.row.original.status} />,
  },
  {
    id: "another-id-123123",
    cell: function Homework(props) {
      const [open, setOpen] = useState(false);

      return (
        <>
          <Button
            $variant="dottedLink"
            aria-label="edit"
            onClick={() => setOpen(true)}
          >
            Подробнее
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <CuratorHomeworkForm
              id={props.row.original.id}
              onSuccess={() => setOpen(false)}
            />
          </Modal>
        </>
      );
    },
  },
];

const CuratorHomeworks = () => {
  const [status, setStatus] = useState<EHomeworkStatus>(
    EHomeworkStatus.checking,
  );
  const params = Route.useParams();
  const [pagination, setPagination] = useState(defaultPagination);
  const { data: lesson, isPending: isLessonPending } = useGetLessonById(
    params.lesson,
  );
  const { data, isPending: isHomeWorksPending } = useGetHomeworks({
    ...pagination,
    lesson: params.lesson,
    status,
  });

  if (isLessonPending) {
    return <CuratorHomeworksSkeleton />;
  }

  return (
    <Flex $flexDirection="column" $gap={{ default: 32, lg: 64 }}>
      <Flex $flexDirection="column" $gap={{ default: 12, lg: 32 }}>
        <Typography $variant="h2">
          Проверка ДЗ по уроку {lesson?.name}
        </Typography>
        <Typography $variant="text1" $maxWidth={746}>
          Это страница для проверки домашнего задания по уроку {lesson?.name}. В
          таблице ниже находятся данные по всем студентам.
        </Typography>
      </Flex>

      <CuratorHomeworksTableContainer>
        <CuratorHomeworksTabsContainer>
          <CuratorHomeworksTabItem
            $active={status === EHomeworkStatus.checking}
            onClick={() => setStatus(EHomeworkStatus.checking)}
          >
            На проверке
          </CuratorHomeworksTabItem>
          <CuratorHomeworksTabItem
            $active={status === EHomeworkStatus.approved}
            onClick={() => setStatus(EHomeworkStatus.approved)}
          >
            Проверенные
          </CuratorHomeworksTabItem>
          <CuratorHomeworksTabItem
            $active={status === EHomeworkStatus.returned}
            onClick={() => setStatus(EHomeworkStatus.returned)}
          >
            На правке
          </CuratorHomeworksTabItem>
        </CuratorHomeworksTabsContainer>
        <Table
          data={data}
          isLoading={isHomeWorksPending}
          columns={homeworkColumns}
          pagination={pagination}
          setPagination={setPagination}
          $borderRadius="0 6px 6px 6px"
        />
      </CuratorHomeworksTableContainer>
    </Flex>
  );
};

export default CuratorHomeworks;
