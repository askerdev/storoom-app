import { ChangeEvent, useMemo, useState } from "react";
import Typography from "@/components/ui/Typography";
import Input from "@/components/ui/Input";
import {
  StyledStudentEducation,
  StyledStudentEducationBody,
  StyledStudentEducationHeader,
} from "./styled";
import useSubscribedCourses from "@/api/queries/subscriptions/useSubscribedCourses";
import CourseCardRedesign from "../../components/CourseCardRedesign";
import { ISubscribedCoursesListRes } from "@/types/response.api";
import Skeleton from "@/components/ui/Skeleton";
import useDebounce from "@/hooks/useDebounce";
import InfinitePaginationFetcher from "@/components/InfinitePaginationFetcher";

const StudentEducation = () => {
  const [search, setSearch] = useState("");
  const { data, isPending, isSuccess, fetchNextPage } = useSubscribedCourses({
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
            [] as ISubscribedCoursesListRes["list"],
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
            $width={{ default: 320, lg: 384 }}
            $height={{ default: 394, lg: 451 }}
          />
        )),
    [],
  );

  return (
    <StyledStudentEducation>
      <StyledStudentEducationHeader>
        <Typography $variant="h2">Доступные курсы</Typography>
        <Input placeholder="Поиск" isSearch onChange={handleSearchChange} />
      </StyledStudentEducationHeader>
      <StyledStudentEducationBody>
        {isPending && skeleton}
        {pages.map((course) => (
          <CourseCardRedesign
            key={course.id}
            title={course.name}
            cover={course.cover}
            id={course.id}
            lessonsCount={course.lessons.length}
            teacher={{
              avatar: course.teacher.avatar,
              name: course.teacher.user.name,
            }}
          />
        ))}
        <InfinitePaginationFetcher fetcher={fetchNextPage} />
      </StyledStudentEducationBody>
    </StyledStudentEducation>
  );
};

export default StudentEducation;
