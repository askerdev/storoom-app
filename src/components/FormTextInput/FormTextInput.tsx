import {
  Controller,
  FieldValues,
  Path,
  PathValue,
  useFormContext,
} from "react-hook-form";
import { ComponentProps, useId } from "react";
import Typography from "@/components/ui/Typography";
import TextInput from "@/components/ui/TextInput";
import Pen from "@/components/ui/icons/Pen";
import {
  FormTextInputContainer,
  FormTextInputLabel,
} from "@/components/FormTextInput/styled";
import Circle from "@/components/ui/Circle";

interface IFormTextInput<T extends FieldValues>
  extends ComponentProps<typeof TextInput> {
  name: Path<T>;
  defaultValue: PathValue<T, Path<T>>;
  disabled?: boolean;
  label?: string;
}

const FormTextInput = <T extends FieldValues>({
  name,
  defaultValue,
  disabled = false,
  placeholder,
  $textVariant,
  label,
  ...props
}: IFormTextInput<T>) => {
  const { control } = useFormContext();
  const id = useId();

  return (
    <Controller
      control={control}
      name={name}
      disabled={disabled}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <FormTextInputContainer>
          <FormTextInputLabel>
            {!!label && (
              <Typography as="label" htmlFor={id} $variant={$textVariant}>
                {label}
              </Typography>
            )}
            <TextInput
              id={id}
              placeholder={placeholder}
              $textVariant={$textVariant}
              $borderColor={fieldState.error?.message ? "error" : undefined}
              {...props}
              {...field}
            />
            {fieldState.error?.message ? (
              <Circle />
            ) : (
              <Pen $size={24} $color="purple_200" />
            )}
          </FormTextInputLabel>
          {!!fieldState.error?.message && (
            <Typography
              as="label"
              htmlFor={id}
              $variant="text1"
              $color="notification"
            >
              {fieldState.error?.message}
            </Typography>
          )}
        </FormTextInputContainer>
      )}
    />
  );
};

export default FormTextInput;
