import { useEffect, useState } from "react";
import Typography from "@/components/ui/Typography";
import Input from "@/components/ui/Input";
import Flex from "@/components/ui/Flex";
import CourseCard from "../CourseCard";

import { CoursesListCoursesCardsContainer } from "@/features/student/components/CoursesList/styled";

import useDebouncedValue from "@/hooks/useDebouncedValue";
import CoursesListSkeleton from "./CoursesListSkeleton";
import { ICourseFilter } from "@/types/request.api";
import useGetInfiniteCourses from "@/api/queries/courses/useGetInfiniteCourses";
import InfinitePaginationFetcher from "@/components/InfinitePaginationFetcher";

const CoursesList = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebouncedValue(search, 300);
  const [params, setParams] = useState<ICourseFilter>({
    search: debouncedSearch,
  });

  const {
    data: courses,
    isPending,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetInfiniteCourses({ ...params });

  useEffect(() => {
    setParams((prev) => ({ ...prev, search: debouncedSearch }));
  }, [debouncedSearch]);

  return (
    <Flex $flexDirection="column" $gap={40}>
      <Flex
        $flexDirection={{
          default: "column",
          lg: "row",
        }}
        $justifyContent="space-between"
        $alignItems="center"
        $gap={12}
      >
        <Typography $variant="h2">Наши курсы</Typography>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск"
          isSearch
        />
      </Flex>

      <CoursesListCoursesCardsContainer>
        {isPending || isFetchingNextPage ? (
          <CoursesListSkeleton />
        ) : (
          courses?.map((course) => (
            <CourseCard key={course.id} {...course} icon="notebook" />
          ))
        )}
        <InfinitePaginationFetcher fetcher={fetchNextPage} />
      </CoursesListCoursesCardsContainer>
    </Flex>
  );
};

export default CoursesList;
