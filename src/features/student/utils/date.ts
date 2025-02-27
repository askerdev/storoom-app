import { Dayjs } from "dayjs";

export const getMonthWord = (firstDay: Dayjs, lastDay: Dayjs) => {
  const dates = [firstDay, lastDay].map(
    (day) =>
      `${day.format("MMMM")[0].toUpperCase()}${day.format("MMMM").slice(1)}`,
  );
  if (firstDay.month() === lastDay.month()) {
    return dates[0];
  }
  return dates.join(" - ");
};
