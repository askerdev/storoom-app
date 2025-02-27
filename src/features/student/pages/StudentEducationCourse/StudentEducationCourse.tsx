import { useState, ChangeEvent, useMemo } from "react";
import Input from "@/components/ui/Input";
import Skeleton from "@/components/ui/Skeleton";
import Typography from "@/components/ui/Typography";
import useDebounce from "@/hooks/useDebounce";
import { ISubscribedLessonsListRes } from "@/types/response.api";
import {
  StyledStudentEducationCourse,
  StyledStudentEducationCourseHeader,
  StyledStudentEducationCourseBody,
} from "./styled";
import useSubscribedLessonsByCourseId from "@/api/queries/subscriptions/useSubscribedLessonsByCourseId";
import { Route } from "@/routes/_layout.student.education.$course.index";
import LessonCardRedesign from "../../components/LessonCardRedesign";
import InfinitePaginationFetcher from "@/components/InfinitePaginationFetcher";
import useGetCourseById from "@/api/queries/courses/useGetCourseById";

const StudentEducationCourse = () => {
  const { course: courseId } = Route.useParams();
  const [search, setSearch] = useState("");
  const {
    data: course,
    isPending: isCoursePending,
    isSuccess: isCourseSuccess,
  } = useGetCourseById(courseId);
  const { data, isPending, isSuccess, fetchNextPage } =
    useSubscribedLessonsByCourseId(courseId, {
      search,
    });

  const handleSearchChange = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, 500);

  const pages = useMemo(
    () =>
      isSuccess
        ? data?.pages.reduce(
            (prev, page) => [...prev, ...page.list],
            [] as ISubscribedLessonsListRes["list"],
          )
        : [],
    [data, isSuccess],
  );

  const skeleton = useMemo(
    () =>
      Array(9)
        .fill(0)
        .map((_, index) => (
          <Skeleton
            key={index}
            $width={{ default: 320, lg: "100%" }}
            $height={{ default: 431, lg: 194 }}
          />
        )),
    [],
  );

  return (
    <StyledStudentEducationCourse>
      <StyledStudentEducationCourseHeader>
        {isCoursePending && (
          <Skeleton $width={200} $height={{ default: 33, lg: 52 }} />
        )}
        {isCourseSuccess && (
          <Typography $variant="h2">{course.name}</Typography>
        )}
        <Input placeholder="Поиск" isSearch onChange={handleSearchChange} />
      </StyledStudentEducationCourseHeader>
      <StyledStudentEducationCourseBody>
        {isPending && skeleton}
        {pages.map((lesson) => (
          <LessonCardRedesign
            key={lesson.id}
            id={lesson.id}
            title={lesson.name}
            cover={lesson.cover}
            course={lesson.course.id}
            teacher={{
              name: lesson.course.teacher.user.name,
            }}
            description={lesson.description}
          />
        ))}
        <InfinitePaginationFetcher fetcher={fetchNextPage} />
      </StyledStudentEducationCourseBody>
    </StyledStudentEducationCourse>
  );
};

export default StudentEducationCourse;
