import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import Skeleton from "@/components/ui/Skeleton";

import Button from "@/components/ui/Button";
import Cross from "@/components/ui/icons/Cross";
import useGetInfiniteTeacherCourses from "@/api/queries/courses/useGetInfiniteTeacherCourses";
import CourseForm from "../CourseForm";
import InfinitePaginationFetcher from "../../../../components/InfinitePaginationFetcher";
import { defaultPagination } from "@/constants/api";
import {
  TeacherCoursesNavigationContainer,
  TeacherCoursesNavigationLink,
  TeacherCoursesNavigationLinksContainer,
  TeacherCoursesNavigationOutlet,
  TeacherCoursesOutlet,
} from "./styled";
import Modal from "../../../../components/Modal";

const TeacherCourses = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentCourse = location.pathname.split("/").at(-1);
  const {
    data: courses,
    isSuccess,
    isPending,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetInfiniteTeacherCourses();
  const close = () => setOpen(false);

  return (
    <>
      <Flex
        $flexDirection="column"
        $gap={{
          default: 20,
          lg: 36,
        }}
      >
        <Flex
          $width="100%"
          $alignItems={{
            default: "center",
          }}
          $justifyContent={{
            lg: "space-between",
          }}
          $flexDirection={{
            default: "column",
            lg: "row",
          }}
          $gap={12}
        >
          <Typography $variant="h2">Курсы</Typography>
          {/* <Input placeholder="Поиск" isSearch /> */}
        </Flex>
        <Flex $justifyContent="space-between" $gap={20}>
          <TeacherCoursesNavigationContainer>
            <TeacherCoursesNavigationLinksContainer>
              {isSuccess &&
                courses.pages.map((page) =>
                  page.list.map((course) => (
                    <Flex key={course.id} $flexDirection="column" $gap={20}>
                      <TeacherCoursesNavigationLink
                        as={Link}
                        to="/teacher/courses/$course"
                        params={{ course: course.id }}
                        $active={course.id === currentCourse}
                      >
                        <Typography $variant="button">{course.name}</Typography>
                      </TeacherCoursesNavigationLink>
                      {course.id === currentCourse && (
                        <TeacherCoursesNavigationOutlet>
                          <Outlet />
                        </TeacherCoursesNavigationOutlet>
                      )}
                    </Flex>
                  )),
                )}
              {(isPending || isFetchingNextPage) &&
                Array(defaultPagination.pageSize)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} $width="100%" $height={79} />
                  ))}

              <Button $variant="outline" onClick={() => setOpen(true)}>
                <Cross $size={48} $rotateDeg={45} />
              </Button>
            </TeacherCoursesNavigationLinksContainer>
            {!isPending && isSuccess && (
              <InfinitePaginationFetcher fetcher={fetchNextPage} />
            )}
          </TeacherCoursesNavigationContainer>
          <TeacherCoursesOutlet>
            <Outlet />
          </TeacherCoursesOutlet>
        </Flex>
      </Flex>
      <Modal open={open} onClose={close}>
        <CourseForm onSuccess={close} />
      </Modal>
    </>
  );
};

export default TeacherCourses;
