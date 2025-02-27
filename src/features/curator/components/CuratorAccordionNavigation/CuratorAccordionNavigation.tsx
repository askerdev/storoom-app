import { Ref, useRef } from "react";
import { Outlet, useNavigate, useParams } from "@tanstack/react-router";
import InfinitePaginationFetcher from "../../../../components/InfinitePaginationFetcher";
import { defaultPagination } from "@/constants/api";
import CuratorAccordionNavigationItem from "./CuratorAccordionNavigationItem";
import {
  CuratorAccordionNavigationContainer,
  CuratorAccordionNavigationLessonContainer,
} from "./styled";
import CuratorAccordionNavigationItemSkeleton from "./CuratorAccordionNavigationItemSkeleton";
import useGetInfiniteCuratorCourses from "@/api/queries/courses/useGetInfiniteCuratorCourses";
import { ICourseByIdRes } from "@/types/response.api";

type TAccordionNavigationProps = {
  navigateTo: string;
};

const Item = ({
  course,
  lessonRef,
  navigateTo,
}: {
  course: ICourseByIdRes;
  lessonRef: Ref<HTMLDivElement>;
  navigateTo: string;
}) => {
  const params = useParams({ strict: false });
  const navigate = useNavigate();

  return (
    <>
      <CuratorAccordionNavigationItem
        open={params?.course === course.id}
        onOpenChange={() => {
          if (course.id !== params?.course && course?.lessons?.length > 0) {
            navigate({
              to: `/student/education/$course/$lesson`,
              params: { course: course.id, lesson: course.lessons[0].id },
            });
          } else {
            navigate({
              to: "/student/education",
            });
          }
        }}
        name={course.name}
        courseId={course.id}
        lessons={course.lessons}
        navigateTo={navigateTo}
      />

      {params?.course === course.id && (
        <CuratorAccordionNavigationLessonContainer ref={lessonRef}>
          <Outlet />
        </CuratorAccordionNavigationLessonContainer>
      )}
    </>
  );
};

const CuratorAccordionNavigation = ({
  navigateTo,
}: TAccordionNavigationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lessonRef = useRef<HTMLDivElement>(null);
  const {
    data: courses,
    isSuccess,
    isPending,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetInfiniteCuratorCourses();

  return (
    <CuratorAccordionNavigationContainer
      ref={containerRef}
      $height={
        Math.max(
          containerRef.current?.clientHeight ?? 0,
          lessonRef.current?.clientHeight ?? 0,
        ) || "auto"
      }
    >
      {isSuccess &&
        courses.pages.map((page) =>
          page.list.map((course) => (
            <Item
              key={course.id}
              course={course}
              navigateTo={navigateTo}
              lessonRef={lessonRef}
            />
          )),
        )}
      {(isPending || isFetchingNextPage) &&
        Array(defaultPagination.pageSize)
          .fill(0)
          .map((_, index) => (
            <CuratorAccordionNavigationItemSkeleton
              // eslint-disable-next-line react/no-array-index-key
              key={`accordion-navigation-item-skeleton-${index}`}
            />
          ))}
      <InfinitePaginationFetcher fetcher={fetchNextPage} />
    </CuratorAccordionNavigationContainer>
  );
};

export default CuratorAccordionNavigation;
