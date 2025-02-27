import { ColumnDef } from "@tanstack/react-table";

import { useState } from "react";
import Flex from "@/components/ui/Flex";
import Pen from "@/components/ui/icons/Pen";
import Trash from "@/components/ui/icons/Trash";
import useRemoveSubject from "@/api/queries/subjects/useRemoveSubject";
import useRemoveUser from "@/api/queries/user/useRemoveUser";
import TeacherForm from "../../components/TeacherForm";

import Image from "../../../../components/Image";

import walletIcon from "@/assets/icons/wallet.png";
import {
  ICuratorProfileRes,
  IStudentProfileRes,
  ISubjectByIdRes,
  ITeacherProfileRes,
} from "@/types/response.api";
import { ICourse } from "@/types/units.api";
import CuratorForm from "../../components/CuratorForm";
import Modal from "../../../../components/Modal";
import StudentForm from "../../components/StudentForm";
import BalanceForm from "../../components/BalanceForm";
import Alert from "../../../../components/Alert";
import SubjectForm from "../../components/SubjectForm";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import CuratorSwitchForm from "../../components/CuratorSwitchForm";

export const studentColumns: ColumnDef<IStudentProfileRes>[] = [
  {
    header: "Имя",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Номер телефона",
    accessorKey: "phone",
  },
  {
    header: "Баланс",
    accessorKey: "student.balance",
  },
  {
    id: "student-actions",
    cell: function Actions(props) {
      const [action, setAction] = useState<
        "payment" | "edit" | "remove" | null
      >(null);
      const close = () => setAction(null);
      const remove = useRemoveUser({
        onSuccess: close,
      });

      return (
        <Flex $gap={8}>
          <button
            type="button"
            aria-label="пополнить"
            onClick={() => setAction("payment")}
          >
            <Image src={walletIcon} $width={32} $height={32} />
          </button>
          <button
            type="button"
            aria-label="edit"
            onClick={() => setAction("edit")}
          >
            <Pen $color="purple_200" $size={32} />
          </button>
          <button
            type="button"
            aria-label="edit"
            onClick={() => setAction("remove")}
          >
            <Trash $color="purple_200" $size={32} />
          </button>
          <Modal open={!!action} onClose={close}>
            {action === "payment" && (
              <BalanceForm
                currentBalance={props.row.original.student.balance}
                studentId={props.row.original.student.id}
                onSuccess={close}
              />
            )}
            {action === "edit" && (
              <StudentForm id={props.row.original.id} onSuccess={close} />
            )}
            {action === "remove" && (
              <Alert
                isLoading={remove.isPending}
                onConfirm={() => remove.mutate(props.row.original.id)}
                onClose={close}
              />
            )}
          </Modal>
        </Flex>
      );
    },
  },
];

export const teacherColumns: ColumnDef<ITeacherProfileRes>[] = [
  {
    header: "Имя",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Номер телефона",
    accessorKey: "phone",
  },
  {
    header: "Предмет",
    accessorKey: "teacher.subject.name",
  },
  {
    id: "teacher-actions",
    cell: function Actions(props) {
      const [action, setAction] = useState<"edit" | "remove" | null>(null);
      const close = () => setAction(null);
      const remove = useRemoveUser({
        onSuccess: close,
      });

      return (
        <Flex $gap={8}>
          <button
            type="button"
            aria-label="edit"
            onClick={() => setAction("edit")}
          >
            <Pen $color="purple_200" $size={32} />
          </button>
          <button
            type="button"
            aria-label="edit"
            onClick={() => setAction("remove")}
          >
            <Trash $color="purple_200" $size={32} />
          </button>
          <Modal open={!!action} onClose={close}>
            {action === "edit" && (
              <TeacherForm id={props.row.original.id} onSuccess={close} />
            )}
            {action === "remove" && (
              <Alert
                isLoading={remove.isPending}
                onConfirm={() => remove.mutate(props.row.original.id)}
                onClose={close}
              />
            )}
          </Modal>
        </Flex>
      );
    },
  },
];

export const curatorColumns: ColumnDef<ICuratorProfileRes>[] = [
  {
    header: "Имя",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Номер телефона",
    accessorKey: "phone",
  },
  {
    header: "Проверенные ДЗ",
    accessorKey: "curator.doneHomeworksCount",
  },
  {
    id: "curator-actions",
    cell: function Actions(props) {
      const [action, setAction] = useState<"switch" | "edit" | "remove" | null>(
        null,
      );
      const close = () => setAction(null);
      const remove = useRemoveUser({
        onSuccess: close,
      });

      return (
        <Flex $gap={8}>
          <Button
            $variant="primary"
            $padding="8px 12px"
            onClick={() => setAction("switch")}
          >
            <Typography $variant="text1">Передать студентов</Typography>
          </Button>
          <button
            type="button"
            aria-label="edit"
            onClick={() => setAction("edit")}
          >
            <Pen $color="purple_200" $size={32} />
          </button>
          <button
            type="button"
            aria-label="edit"
            onClick={() => setAction("remove")}
          >
            <Trash $color="purple_200" $size={32} />
          </button>
          <Modal open={!!action} onClose={close}>
            {action === "switch" && (
              <CuratorSwitchForm
                from={props.row.original.curator.id}
                onSuccess={close}
              />
            )}
            {action === "edit" && (
              <CuratorForm
                curatorId={props.row.original.id}
                onSuccess={close}
              />
            )}
            {action === "remove" && (
              <Alert
                isLoading={remove.isPending}
                onConfirm={() => remove.mutate(props.row.original.id)}
                onClose={close}
              />
            )}
          </Modal>
        </Flex>
      );
    },
  },
];

export const lessonColumns: ColumnDef<ICourse>[] = [
  {
    header: "Имя",
    accessorKey: "name",
  },
  {
    header: "Цена",
    accessorKey: "price",
  },
];

export const subjectColumns: ColumnDef<ISubjectByIdRes>[] = [
  {
    header: "Имя",
    accessorKey: "name",
  },
  {
    id: "subject-actions",
    cell: function Actions(props) {
      const [action, setAction] = useState<"edit" | "remove" | null>(null);
      const close = () => setAction(null);
      const remove = useRemoveSubject({
        onSuccess: close,
      });

      return (
        <Flex $gap={8}>
          <button
            type="button"
            aria-label="edit"
            onClick={() => setAction("edit")}
          >
            <Pen $color="purple_200" $size={32} />
          </button>
          <button
            type="button"
            aria-label="edit"
            onClick={() => setAction("remove")}
          >
            <Trash $color="purple_200" $size={32} />
          </button>
          <Modal open={!!action} onClose={close}>
            {action === "edit" && (
              <SubjectForm id={props.row.original.id} onSuccess={close} />
            )}
            {action === "remove" && (
              <Alert
                isLoading={remove.isPending}
                onConfirm={() => remove.mutate(props.row.original.id)}
                onClose={close}
              />
            )}
          </Modal>
        </Flex>
      );
    },
  },
];
