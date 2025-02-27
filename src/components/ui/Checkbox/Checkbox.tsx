import { forwardRef } from "react";
import Check from "@/components/ui/icons/Check";
import {
  CheckboxContainer,
  CheckboxLabel,
  FakeCheckboxContainer,
  StyledCheckboxInput,
} from "@/components/ui/Checkbox/styled";

type TProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
};

const Checkbox = forwardRef<HTMLInputElement, TProps>(
  ({ value, onChange, label, disabled }, ref) => (
    <CheckboxContainer>
      <FakeCheckboxContainer $checked={value}>
        <Check $color="bg_white" $size={14} />
      </FakeCheckboxContainer>
      <StyledCheckboxInput
        ref={ref}
        checked={value}
        onChange={(e) => onChange(e.currentTarget.checked)}
        disabled={disabled}
        type="checkbox"
      />
      {label && (
        <CheckboxLabel $checked={value} $variant="text2">
          {label}
        </CheckboxLabel>
      )}
    </CheckboxContainer>
  ),
);

export default Checkbox;
