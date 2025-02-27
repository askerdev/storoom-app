import {
  Controller,
  FieldValues,
  Path,
  PathValue,
  useFormContext,
} from "react-hook-form";
import { ComponentProps, useId } from "react";
import Typography from "@/components/ui/Typography";
import Circle from "@/components/ui/Circle";
import TextArea from "@/components/ui/TextArea";
import Flex from "@/components/ui/Flex";

interface IFormTextInput<T extends FieldValues>
  extends ComponentProps<typeof TextArea> {
  name: Path<T>;
  defaultValue: PathValue<T, Path<T>>;
  disabled?: boolean;
  label: string;
}

const FormTextArea = <T extends FieldValues>({
  name,
  defaultValue,
  disabled = false,
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
        <Flex $flexDirection="column" $gap={8}>
          <Flex $width="100%" $gap={8} $alignItems="center">
            <TextArea id={id} {...props} {...field} />
            {!!fieldState.error?.message && <Circle />}
          </Flex>

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
        </Flex>
      )}
    />
  );
};

export default FormTextArea;
