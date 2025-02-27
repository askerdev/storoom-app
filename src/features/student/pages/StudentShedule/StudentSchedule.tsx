import { getMonthWord } from "@/features/student/utils/date";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import Skeleton from "@/components/ui/Skeleton";
import Arrow from "@/components/ui/icons/Arrow";
import useGetScheduleByWeek from "@/api/queries/schedule/useGetScheduleByWeek";
import CalendarCard from "../../components/CalendarCard";
import {
  StudentScheduleCalendarItemsContainer,
  StudentScheduleCalendarTitleContainer,
} from "@/features/student/pages/StudentShedule/styled";
import useSchedule from "@/hooks/useSchedule";
import { daysOfWeekIndexes } from "@/constants/calendar";

const getCurrentColor = (canAction: boolean) =>
  canAction ? "black" : "gray_100";

const StudentSchedule = () => {
  const {
    date,
    canPrevWeek,
    canNextWeek,
    week,
    firstDay,
    lastDay,
    goToNextWeek,
    goToPrevWeek,
  } = useSchedule();
  const { data: schedule, isSuccess, isPending } = useGetScheduleByWeek(week);

  return (
    <Flex $flexDirection="column" $gap={40}>
      <Typography $variant="h2">Расписание</Typography>

      <StudentScheduleCalendarTitleContainer>
        <Flex
          $gap={8}
          $alignItems={{ default: "flex-start", lg: "center" }}
          $flexDirection={{
            default: "column",
            lg: "row",
          }}
        >
          <Typography $variant="h3">
            {getMonthWord(firstDay, lastDay)}
          </Typography>
          <Flex $gap={12}>
            <Typography $variant="text2" $color="gray_100">
              ({firstDay.format("DD.MM.YYYY")}-{lastDay.format("DD.MM.YYYY")})
            </Typography>
            <Flex $gap={20}>
              <button
                type="button"
                onClick={goToPrevWeek}
                disabled={!canPrevWeek}
                aria-label="previous week"
              >
                <Arrow
                  $size={16}
                  $color={getCurrentColor(canPrevWeek)}
                  $rotateDeg={90}
                />
              </button>
              <button
                type="button"
                onClick={goToNextWeek}
                disabled={!canNextWeek}
                aria-label="next week"
              >
                <Arrow
                  $size={16}
                  $color={getCurrentColor(canNextWeek)}
                  $rotateDeg={-90}
                />
              </button>
            </Flex>
          </Flex>
        </Flex>

        <Typography $variant="h3">{date.format("YYYY")}</Typography>
      </StudentScheduleCalendarTitleContainer>
      <StudentScheduleCalendarItemsContainer>
        {isPending &&
          daysOfWeekIndexes.map((day) => (
            <Flex
              key={day}
              $flexDirection="column"
              $gap={32}
              $alignItems="center"
            >
              <Typography $variant="h3" $color="gray_100">
                {date.day(day).format("dd").toLowerCase()}
              </Typography>
              <Flex $flexDirection="column" $gap={20} $width={149}>
                <Skeleton $width={149} $height={180} />
                <Skeleton $width={149} $height={180} />
                <Skeleton $width={149} $height={180} />
              </Flex>
            </Flex>
          ))}
        {isSuccess &&
          daysOfWeekIndexes.map((day) => (
            <Flex
              key={day}
              $flexDirection="column"
              $gap={32}
              $alignItems="center"
            >
              <Typography $variant="h3" $color="gray_100">
                {date.day(day).format("dd").toLowerCase()}
              </Typography>
              <Flex $flexDirection="column" $gap={20} $width={149}>
                {schedule[day]?.map((item) => (
                  <CalendarCard
                    key={item.lesson.id}
                    to="/student/education/$course/$lesson"
                    params={{ course: item.course.id, lesson: item.lesson.id }}
                    {...item}
                  />
                ))}
              </Flex>
            </Flex>
          ))}
      </StudentScheduleCalendarItemsContainer>
    </Flex>
  );
};

export default StudentSchedule;
