import { FC, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import useSubscribedLessonsByCourseId from "@/api/queries/subscriptions/useSubscribedLessonsByCourseId";
import { Route } from "@/routes/_layout.student.education.$course.$lesson";
import { ISubscribedLessonsListRes } from "@/types/response.api";
import {
  StyledLessonsList,
  StyledLessonsListContainer,
  StyledLessonsListFooter,
  StyledLessonsListPrevButton,
} from "./styled";
import InfinitePaginationFetcher from "@/components/InfinitePaginationFetcher";
import Button from "@/components/ui/Button";
import GoToNext from "@/components/ui/icons/GoToNext";
import LessonListSkeleton from "./Dependencies/LessonListSkeleton";
import LessonListItem from "./Dependencies/LessonListItem";

interface ILessonsListProps {}

const LessonsList: FC<ILessonsListProps> = () => {
  const { course: courseId, lesson: lessonId } = Route.useParams();
  const { data, isPending, fetchNextPage } =
    useSubscribedLessonsByCourseId(courseId);

  const lessons = useMemo(
    () =>
      (data?.pages ?? []).reduce(
        (prev, page) => [...prev, ...page.list],
        [] as ISubscribedLessonsListRes["list"],
      ),
    [data],
  );

  const currentLessonIndex = lessons.findIndex(
    (lesson) => lesson.id === lessonId,
  );
  const prevLessonId =
    currentLessonIndex > 0 ? lessons[currentLessonIndex - 1].id : undefined;
  const nextLessonId =
    currentLessonIndex < lessons.length - 1
      ? lessons[currentLessonIndex + 1].id
      : undefined;

  return (
    <StyledLessonsList>
      <StyledLessonsListContainer>
        {lessons.map((lesson, index) => (
          <LessonListItem
            courseId={courseId}
            key={lesson.id}
            number={index + 1}
            {...lesson}
          />
        ))}
        {isPending && <LessonListSkeleton key="lesson-list-skeleton" />}
        <InfinitePaginationFetcher fetcher={fetchNextPage} />
      </StyledLessonsListContainer>
      <StyledLessonsListFooter>
        <StyledLessonsListPrevButton
          as={currentLessonIndex > 0 ? Link : "button"}
          to="/student/education/$course/$lesson"
          params={{
            course: courseId,
            lesson: prevLessonId || "",
          }}
          $disabled={currentLessonIndex <= 0}
          disabled={currentLessonIndex <= 0}
        >
          <GoToNext $color="gray_100" />
        </StyledLessonsListPrevButton>
        {currentLessonIndex < lessons.length - 1 && (
          <Button
            as={Link}
            to="/student/education/$course/$lesson"
            params={{
              course: courseId,
              lesson: nextLessonId,
            }}
            $variant="outline"
          >
            Следующий урок
            <GoToNext $color="purple_200" $rotateDeg={180} />
          </Button>
        )}
      </StyledLessonsListFooter>
    </StyledLessonsList>
  );
};

export default LessonsList;
