import { useCallback, useEffect, useState } from "react";
import update from "immutability-helper";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Modal from "../../../../components/Modal";
import Skeleton from "@/components/ui/Skeleton";
import Typography from "@/components/ui/Typography";
import { Route } from "@/routes/_layout.teacher.courses.$course";
import useUpdateLessonsOrder from "@/api/queries/lesson/useUpdateLessonsOrder";
import useGetCourseById from "@/api/queries/courses/useGetCourseById";
import LessonForm from "../LessonForm";
import TeacherCoursesCourseLesson from "./TeacherCoursesCourseLesson";
import { ILesson } from "@/types/units.api";
import Pen from "@/components/ui/icons/Pen";
import Trash from "@/components/ui/icons/Trash";
import Alert from "../../../../components/Alert";
import CourseForm from "../CourseForm";
import useRemoveCourse from "@/api/queries/courses/useRemoveCourse";
import useCopyCourse from "@/api/queries/courses/useCopyCourse.ts";

const Actions = ({ id }: { id: string }) => {
  const [action, setAction] = useState<"edit" | "remove" | null>(null);
  const close = () => setAction(null);
  const remove = useRemoveCourse({
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
        {action === "edit" && <CourseForm id={id} onSuccess={close} />}
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

enum EModalTypes {
  NEW_LESSON = "NEW_LESSON",
  COPY_COURSE = "COPY_COURSE",
}

const TeacherCoursesCourse = () => {
  const [open, setOpen] = useState<null | EModalTypes>();
  const close = () => setOpen(null);
  const [isEditing, setIsEditing] = useState(false);
  const params = Route.useParams();
  const {
    data: course,
    isPending: isCoursePending,
    isSuccess: isCourseSuccess,
  } = useGetCourseById(params.course);
  const { mutate: commitOrders } = useUpdateLessonsOrder();
  const copyCourse = useCopyCourse({
    onSuccess: close,
  });
  const [lessons, setLessons] = useState<ILesson[]>([]);

  useEffect(() => {
    if (isCourseSuccess) {
      setLessons(course.lessons);
    }
  }, [course, isCourseSuccess]);

  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setLessons((prev) =>
      update(prev, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prev[dragIndex]],
        ],
      }),
    );
  }, []);

  return (
    <>
      <Flex $gap={40} $flexDirection="column">
        {isCoursePending && <Skeleton $width="100%" $height={71} />}
        {isCourseSuccess && (
          <Flex $justifyContent="space-between" $alignItems="center" $gap={20}>
            <Flex
              $gap={40}
              $justifyContent="space-between"
              $width={{ default: "100%", lg: "max-content" }}
            >
              <Typography $variant="h2">{course.name}</Typography>
              {!isEditing && (
                <Flex $gap={20}>
                  <Actions id={course.id} />
                </Flex>
              )}
            </Flex>
            <Button
              type="button"
              $variant="dottedLink"
              onClick={() => {
                if (isEditing) {
                  commitOrders(lessons);
                }
                setIsEditing((prev) => !prev);
              }}
              $alignItems="center"
              $width="max-content"
            >
              <Typography $variant="text2" $nowrap>
                {isEditing ? "Сохранить" : "Сменить порядок"}
              </Typography>
            </Button>
          </Flex>
        )}

        <Flex $gap={20} $flexDirection="column">
          {isCourseSuccess &&
            lessons.map((lesson, index) => (
              <TeacherCoursesCourseLesson
                key={lesson.id}
                lesson={lesson}
                index={index}
                isEditing={isEditing}
                course={params.course}
                moveItem={moveItem}
              />
            ))}
          <Flex $justifyContent="space-between">
            <Button
              $variant="dottedLink"
              disabled={!isCourseSuccess || isEditing}
              onClick={() => setOpen(EModalTypes.NEW_LESSON)}
            >
              Добавить урок
            </Button>
            <Button
              $variant="dottedLink"
              disabled={!isCourseSuccess || isEditing}
              onClick={() => setOpen(EModalTypes.COPY_COURSE)}
            >
              Копировать курс
            </Button>
          </Flex>

          {/* <Button
          $display={{ lg: "none" }}
          $variant="primary"
          $height="max-content"
        >
          Опубликовать
        </Button> */}
        </Flex>
      </Flex>
      <Modal open={!!open} onClose={close}>
        {open === EModalTypes.NEW_LESSON && (
          <LessonForm
            courseId={params.course}
            order={course?.lessons.length ? course.lessons.length + 1 : 0}
            onSuccess={close}
          />
        )}
        {open === EModalTypes.COPY_COURSE && (
          <Alert
            isLoading={copyCourse.isPending}
            onConfirm={() => copyCourse.mutate(params.course)}
            onClose={close}
          />
        )}
      </Modal>
    </>
  );
};

export default TeacherCoursesCourse;
