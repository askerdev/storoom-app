import { Ref, useRef } from "react";
import { Outlet, useNavigate, useParams } from "@tanstack/react-router";
import useSubscribedCourses from "@/api/queries/subscriptions/useSubscribedCourses";
import InfinitePaginationFetcher from "../../../../components/InfinitePaginationFetcher";
import { defaultPagination } from "@/constants/api";
import AccordionNavigationItem from "./AccordionNavigationItem";
import {
  AccordionNavigationContainer,
  AccordionNavigationLessonContainer,
} from "./styled";
import AccordionNavigationItemSkeleton from "./AccordionNavigationItemSkeleton";
import { ISubscribedCoursesListRes } from "@/types/response.api";

type TAccordionNavigationProps = {
  navigateTo: string;
};

const Item = ({
  course,
  lessonRef,
  navigateTo,
}: {
  course: ISubscribedCoursesListRes["list"][number];
  lessonRef: Ref<HTMLDivElement>;
  navigateTo: string;
}) => {
  const params = useParams({ strict: false });
  const navigate = useNavigate();

  return (
    <>
      <AccordionNavigationItem
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
        <AccordionNavigationLessonContainer ref={lessonRef}>
          <Outlet />
        </AccordionNavigationLessonContainer>
      )}
    </>
  );
};

const AccordionNavigation = ({ navigateTo }: TAccordionNavigationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lessonRef = useRef<HTMLDivElement>(null);
  const {
    data: courses,
    isSuccess,
    isPending,
    isFetchingNextPage,
    fetchNextPage,
  } = useSubscribedCourses();

  return (
    <AccordionNavigationContainer
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
            <AccordionNavigationItemSkeleton
              // eslint-disable-next-line react/no-array-index-key
              key={`accordion-navigation-item-skeleton-${index}`}
            />
          ))}
      <InfinitePaginationFetcher fetcher={fetchNextPage} />
    </AccordionNavigationContainer>
  );
};

export default AccordionNavigation;
