import { useDrag, useDrop } from "react-dnd";
import type { Identifier, XYCoord } from "dnd-core";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import useRemoveLesson from "@/api/queries/lesson/useRemoveLesson";
import LessonForm from "../LessonForm";
import { TeacherCoursesCourseLessonContainer } from "./styled";
import { ILesson } from "@/types/units.api";
import Pen from "@/components/ui/icons/Pen";
import Trash from "@/components/ui/icons/Trash";
import Modal from "../../../../components/Modal";
import Alert from "../../../../components/Alert";

type TTeacherCoursesCourseLessonProps = {
  lesson: ILesson;
  index: number;
  isEditing: boolean;
  course: string;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
};

type DragItem = {
  lesson: ILesson;
  index: number;
};
const Actions = ({ course, id }: { course: string; id: string }) => {
  const [action, setAction] = useState<"edit" | "remove" | null>(null);
  const close = () => setAction(null);
  const remove = useRemoveLesson({
    onSuccess: close,
  });

  return (
    <Flex $gap={8}>
      <button type="button" aria-label="edit" onClick={() => setAction("edit")}>
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
          <LessonForm courseId={course} id={id} onSuccess={close} />
        )}
        {action === "remove" && (
          <Alert
            isLoading={remove.isPending}
            onConfirm={() => remove.mutate(id)}
            onClose={close}
          />
        )}
      </Modal>
    </Flex>
  );
};

const TeacherCoursesCourseLesson = ({
  lesson,
  index,
  isEditing,
  course,
  moveItem,
}: TTeacherCoursesCourseLessonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: "teacherLessons",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);

      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    canDrag: isEditing,
    type: "teacherLessons",
    item: () => ({
      lesson,
      index,
    }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const Wrapper = !isEditing ? Link : "div";

  drag(drop(ref));

  return (
    <TeacherCoursesCourseLessonContainer ref={ref} $isDragging={isDragging}>
      <Wrapper
        to="/curator/$course/$lesson/homeworks"
        params={{ course, lesson: lesson.id }}
      >
        <Flex $gap={16} $alignItems="center">
          <Typography $variant="text1">{index + 1}</Typography>
          <Typography $variant="text1">{lesson.name}</Typography>
        </Flex>
      </Wrapper>

      {!isEditing && (
        <Flex $gap={20} $alignItems="center">
          <Actions id={lesson.id} course={course} />
        </Flex>
      )}
    </TeacherCoursesCourseLessonContainer>
  );
};

export default TeacherCoursesCourseLesson;
