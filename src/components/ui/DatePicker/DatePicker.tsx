import dayjs from "dayjs";
import { ChangeEvent, ComponentProps, forwardRef } from "react";

type CustomProps = {
  value: string;
};

type TDatePickerProps = Omit<ComponentProps<"input">, keyof CustomProps> &
  CustomProps;

const DatePicker = forwardRef<HTMLInputElement, TDatePickerProps>(
  ({ value, onChange, ...props }, ref) => {
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.({
        ...e,
        target: { ...e.target, value: dayjs(e.target.value).toISOString() },
      });
    };

    return (
      <input
        ref={ref}
        value={dayjs(value).local().format("YYYY-MM-DDTHH:mm")}
        onChange={handleOnChange}
        type="datetime-local"
        {...props}
      />
    );
  },
);

export default DatePicker;
