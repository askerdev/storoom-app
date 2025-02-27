import {
  Controller,
  FieldValues,
  Path,
  PathValue,
  useFormContext,
} from "react-hook-form";
import { Option } from "@/types/components";
import Select from "@/components/ui/Select";

interface IFormMultiSelectProps<T extends FieldValues> {
  name: Path<T>;
  defaultValue: PathValue<T, Path<T>>;
  options: Option[];
  disabled?: boolean;
}

const FormSelect = <T extends FieldValues>({
  name,
  options,
  defaultValue,
  disabled = false,
}: IFormMultiSelectProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      disabled={disabled}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <Select
          options={options}
          error={fieldState.error?.message}
          {...field}
        />
      )}
    />
  );
};

export default FormSelect;
