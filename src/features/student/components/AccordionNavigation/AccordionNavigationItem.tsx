import { MouseEventHandler, useMemo, useRef } from "react";
import { Link } from "@tanstack/react-router";
import Typography from "@/components/ui/Typography";
import Skeleton from "@/components/ui/Skeleton";
import Flex from "@/components/ui/Flex";
import { defaultPagination } from "@/constants/api";
import {
  AccordionNavigationItemContainer,
  AccordionNavigationItemContent,
  AccordionNavigationItemTrigger,
  AccordionNavigationLessonHomeworkStatus,
  AccordionNavigationLessonLink,
} from "./styled";
import { ISubscribedCoursesListRes } from "@/types/response.api";

type TAccordionNavigationItemProps = {
  open: boolean;
  name: string;
  lessons: ISubscribedCoursesListRes["list"][number]["lessons"];
  onOpenChange: MouseEventHandler<HTMLButtonElement>;
  courseId: string;
  navigateTo: string;
  isLoading?: boolean;
};

const AccordionNavigationItem = ({
  name,
  courseId,
  lessons,
  open,
  onOpenChange,
  navigateTo,
  isLoading = false,
}: TAccordionNavigationItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const height = useMemo(
    () => (open ? 32 * (lessons.length === 0 ? 2 : lessons.length + 1) : 0),
    [open, lessons.length],
  );

  return (
    <AccordionNavigationItemContainer $open={open}>
      <AccordionNavigationItemTrigger onClick={onOpenChange} $open={open}>
        <Typography $variant="button">{name}</Typography>
      </AccordionNavigationItemTrigger>
      <AccordionNavigationItemContent
        ref={contentRef}
        $open={open}
        $height={height}
      >
        {isLoading && (
          <Flex $flexDirection="column" $gap={4}>
            {Array(defaultPagination.pageSize)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} $width="100%" $height={32} />
              ))}
          </Flex>
        )}
        {lessons.length > 0 ? (
          lessons.map((lesson, index) => (
            <AccordionNavigationLessonLink
              as={Link}
              key={lesson.id}
              to={navigateTo}
              params={{ lesson: lesson.id, course: courseId }}
            >
              <Flex>
                {index + 1}.&nbsp;<span>{lesson.name}</span>
              </Flex>
              {!!lesson.homeworks?.length && (
                <AccordionNavigationLessonHomeworkStatus
                  $color={lesson.homeworks[0].status}
                />
              )}
            </AccordionNavigationLessonLink>
          ))
        ) : (
          <Typography $variant="button" $color="gray_100" $textAlign="center">
            Пусто
          </Typography>
        )}
      </AccordionNavigationItemContent>
    </AccordionNavigationItemContainer>
  );
};

export default AccordionNavigationItem;
