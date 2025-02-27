import { forwardRef, ReactNode, useMemo, useState } from "react";
import Arrow from "@/components/ui/icons/Arrow";
import Typography from "@/components/ui/Typography";
import useClickOutside from "@/hooks/useClickOutside";
import {
  OptionItem,
  OptionsContainer,
  OptionsScrollContainer,
  SelectContainer,
  SelectTrigger,
} from "./styled";
import { Option } from "@/types/components";
import Circle from "@/components/ui/Circle";

interface ISelectProps {
  value: string;
  onChange: (value: string) => unknown | void;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  children?: ReactNode;
  error?: string;
}

const Select = forwardRef<HTMLDivElement, ISelectProps>(
  (
    {
      value,
      options,
      onChange,
      placeholder = "Выберите из списка",
      disabled = false,
      children,
      error = "",
    },
    ref,
  ) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow((prev) => !prev);
    const currentOption = useMemo(
      () =>
        options.find((option) => option.value === value) || {
          value: "",
          label: placeholder,
        },
      [options, placeholder, value],
    );

    const clickOutsideRef = useClickOutside(() => {
      setShow(false);
    });

    return (
      <SelectContainer ref={ref}>
        <SelectTrigger
          disabled={disabled}
          type="button"
          onClick={toggle}
          $active={show}
          $variant="outline"
          $borderColor={error ? "error" : undefined}
        >
          <Typography $variant="button" $color={error ? "error" : undefined}>
            {error || currentOption.label}
          </Typography>
          {error ? (
            <Circle />
          ) : (
            <Arrow $color="purple_100" $rotateDeg={show ? -180 : 0} />
          )}
        </SelectTrigger>

        {show && !disabled && (
          <OptionsContainer ref={clickOutsideRef}>
            <OptionsScrollContainer>
              {options.length > 0 ? (
                options.map((option) => (
                  <OptionItem
                    key={option.value}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      onChange?.(option.value);
                      setShow(false);
                    }}
                    $active={option.value === value}
                  >
                    {option.label}
                  </OptionItem>
                ))
              ) : (
                <Typography
                  $variant="button"
                  $color="gray_100"
                  $textAlign="center"
                >
                  Пусто
                </Typography>
              )}
            </OptionsScrollContainer>
            {children}
          </OptionsContainer>
        )}
      </SelectContainer>
    );
  },
);

export default Select;
