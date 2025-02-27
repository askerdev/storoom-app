import { FC, forwardRef, useCallback, useMemo, useState } from "react";
import {
  MultiSelectContainer,
  MultiSelectEntryButton,
  MultiSelectListContainer,
  MultiSelectScrollContainer,
  MultiSelectWrapper,
} from "@/components/ui/MultiSelect/styled";
import Checkbox from "@/components/ui/Checkbox";
import useClickOutside from "@/hooks/useClickOutside";
import { Option } from "@/types/components";
import Typography from "@/components/ui/Typography";
import Cross from "@/components/ui/icons/Cross";
import Button from "@/components/ui/Button";

interface IMultiSelectItemProps {
  value: string[];
  item: Option;
  onChange: (value: string[]) => void;
  disabled: boolean;
}

const MultiSelectItem: FC<IMultiSelectItemProps> = ({
  value,
  onChange,
  item,
  disabled,
}) => {
  const checked = !!value.find((current) => current === item.value);
  return (
    <Checkbox
      disabled={disabled}
      value={checked}
      onChange={() => {
        if (checked) {
          onChange(value.filter((current) => current !== item.value));
        } else {
          onChange([...value, item.value]);
        }
      }}
      label={item.label}
    />
  );
};

export interface IMultiSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: Option[];
  disabled?: boolean;
  error?: string;
}

const MultiSelect = forwardRef<HTMLDivElement, IMultiSelectProps>(
  ({ value, onChange, options, error, disabled = false }, ref) => {
    const [open, setOpen] = useState(false);
    const activeOptions = useMemo(
      () => options.filter((option) => value.includes(option.value)),
      [options, value],
    );
    const clickOutsideRef = useClickOutside(() => {
      setOpen(false);
    });

    const handleOpen = useCallback(() => {
      setOpen(true);
    }, []);

    return (
      <MultiSelectWrapper ref={ref}>
        <Typography $variant="button">Предметы</Typography>
        <MultiSelectListContainer>
          {activeOptions.map((entry) => (
            <MultiSelectEntryButton key={entry.value}>
              <Typography $variant="text2">{entry.label}</Typography>
              <button
                type="button"
                onClick={() =>
                  onChange(value.filter((prev) => prev !== entry.value))
                }
                aria-label="remove"
                disabled={disabled}
              >
                <Cross $size={14} />
              </button>
            </MultiSelectEntryButton>
          ))}
        </MultiSelectListContainer>
        <Button
          type="button"
          $variant="dottedLink"
          $width="max-content"
          onClick={handleOpen}
          disabled={disabled}
        >
          Добавить предмет
        </Button>

        {open && (
          <MultiSelectContainer ref={clickOutsideRef}>
            <MultiSelectScrollContainer>
              {options.map((item) => (
                <MultiSelectItem
                  key={item.value}
                  value={value}
                  onChange={onChange}
                  item={item}
                  disabled={disabled}
                />
              ))}
            </MultiSelectScrollContainer>
          </MultiSelectContainer>
        )}

        {!!error && (
          <Typography
            $variant="text2"
            $color="notification"
            $maxWidth="100%"
            $ellipsis
            $lineClamp={1}
          >
            {error}
          </Typography>
        )}
      </MultiSelectWrapper>
    );
  },
);

export default MultiSelect;
