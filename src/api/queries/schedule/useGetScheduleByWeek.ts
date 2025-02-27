import { useQuery } from "@tanstack/react-query";
import { scheduleKeys } from "@/api/queries/keys";
import CourseService from "@/api/services/Course.service";

const useGetScheduleByWeek = (week: number, enabled = true) =>
  useQuery({
    queryKey: scheduleKeys.detail(week),
    queryFn: () => CourseService.getSchedule(week),
    enabled,
  });

export default useGetScheduleByWeek;
