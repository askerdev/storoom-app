import { MouseEventHandler, useMemo, useRef } from "react";
import { Link } from "@tanstack/react-router";
import Typography from "@/components/ui/Typography";
import {
  CuratorAccordionNavigationItemContainer,
  CuratorAccordionNavigationItemContent,
  CuratorAccordionNavigationItemTrigger,
  CuratorAccordionNavigationLessonLink,
} from "./styled";
import { ILesson } from "@/types/units.api";
import Flex from "@/components/ui/Flex";
import { defaultPagination } from "@/constants/api";
import Skeleton from "@/components/ui/Skeleton";
import { AccordionNavigationLessonHomeworkStatus } from "@/features/student/components/AccordionNavigation/styled";

type TAccordionNavigationItemProps = {
  open: boolean;
  name: string;
  lessons: ILesson[];
  onOpenChange: MouseEventHandler<HTMLButtonElement>;
  courseId: string;
  navigateTo: string;
  isLoading?: boolean;
};

const CuratorAccordionNavigationItem = ({
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
    <CuratorAccordionNavigationItemContainer $open={open}>
      <CuratorAccordionNavigationItemTrigger
        onClick={onOpenChange}
        $open={open}
      >
        <Typography $variant="button">{name}</Typography>
      </CuratorAccordionNavigationItemTrigger>
      <CuratorAccordionNavigationItemContent
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
            <CuratorAccordionNavigationLessonLink
              as={Link}
              key={lesson.id}
              to={navigateTo}
              params={{ lesson: lesson.id, course: courseId }}
            >
              <Flex>
                {index + 1}.&nbsp;<span>{lesson.name}</span>
              </Flex>
              <AccordionNavigationLessonHomeworkStatus $color="notification" />
            </CuratorAccordionNavigationLessonLink>
          ))
        ) : (
          <Typography $variant="button" $color="gray_100" $textAlign="center">
            Пусто
          </Typography>
        )}
      </CuratorAccordionNavigationItemContent>
    </CuratorAccordionNavigationItemContainer>
  );
};

export default CuratorAccordionNavigationItem;
