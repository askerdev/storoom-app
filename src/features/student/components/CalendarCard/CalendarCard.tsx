import dayjs from "dayjs";
import { Link } from "@tanstack/react-router";
import Typography from "@/components/ui/Typography";
import Flex from "@/components/ui/Flex";
import { subjectShortNames } from "@/constants/api";
import { CalendarCardContainer } from "./styled";
import { ILesson, IScheduleValue } from "@/types/units.api";

type TCalendarCardProps = {
  course: IScheduleValue["course"];
  lesson: ILesson;
  to: string;
  params: Record<string, string | number>;
};

const CalendarCard = ({ course, lesson, ...props }: TCalendarCardProps) => {
  const day = dayjs(lesson.time).format("DD/MM/YYYY");
  const start = dayjs(lesson.time).format("HH:mm");

  return (
    <CalendarCardContainer as={Link} {...props}>
      <Flex $flexDirection="column" $gap={4}>
        <Typography $variant="button" $nowrap $ellipsis>
          {
            subjectShortNames[
              course.teacher.subject.name as keyof typeof subjectShortNames
            ]
          }
        </Typography>
        <Typography $variant="text2" $nowrap $ellipsis>
          {lesson.name}
        </Typography>
      </Flex>

      <Flex $flexDirection="column">
        <Typography $variant="text1" $color="gray_100">
          {day}
        </Typography>
        <Typography $variant="text1" $color="gray_100">
          {start}
        </Typography>
      </Flex>
    </CalendarCardContainer>
  );
};

export default CalendarCard;
