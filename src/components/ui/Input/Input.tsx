import { ComponentProps, forwardRef, useId } from "react";
import Search from "@/components/ui/icons/Search";
import {
  InputContainer,
  InputErrorMessage,
  InputIconContainer,
  InputPlaceholder,
  StyledInput,
} from "./styled";

type TProps = ComponentProps<"input"> & {
  isSearch?: boolean;
  $fullWidth?: boolean;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, TProps>(
  ({ placeholder, error, isSearch = false, $fullWidth, ...props }, ref) => {
    const id = useId();

    return (
      <div>
        <InputContainer $fullWidth={$fullWidth}>
          <StyledInput
            id={id}
            className="input"
            ref={ref}
            placeholder={placeholder}
            $withIcon={isSearch}
            $fullWidth={$fullWidth}
            {...props}
          />
          <InputPlaceholder className="placeholder" $variant="text2">
            {placeholder}
          </InputPlaceholder>

          {isSearch && (
            <InputIconContainer>
              <Search $color="gray_100" />
            </InputIconContainer>
          )}
        </InputContainer>
        {!!error && <InputErrorMessage htmlFor={id}>{error}</InputErrorMessage>}
      </div>
    );
  },
);

export default Input;
