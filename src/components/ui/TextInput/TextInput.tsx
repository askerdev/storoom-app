import { ComponentProps, forwardRef } from "react";
import { TextInputStyledInput } from "./styled";

type TTextInputProps = ComponentProps<typeof TextInputStyledInput>;

const TextInput = forwardRef<HTMLInputElement, TTextInputProps>(
  ({ ...props }, ref) => <TextInputStyledInput ref={ref} {...props} />,
);

export default TextInput;
