import { useCallback, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

const isValidWeek = (date: Dayjs) =>
  (date.month() >= 8 && date.month() <= 11) || date.month() <= 4;

const useSchedule = () => {
  const [date, setDate] = useState(dayjs);
  const week = useMemo(() => date.week(), [date]);
  const firstDay = date.startOf("week");
  const lastDay = date.endOf("week");
  const month = date.format("MMMM");
  const canNextWeek = isValidWeek(date.add(1, "week"));
  const canPrevWeek = isValidWeek(date.subtract(1, "week"));

  const goToNextWeek = useCallback(() => {
    setDate((prev) => prev.add(1, "week"));
  }, []);
  const goToPrevWeek = useCallback(() => {
    setDate((prev) => prev.subtract(1, "week"));
  }, []);

  return {
    date,
    week,
    month,
    firstDay,
    lastDay,
    goToNextWeek,
    goToPrevWeek,
    canNextWeek,
    canPrevWeek,
  };
};

export default useSchedule;
