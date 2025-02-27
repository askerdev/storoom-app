import {
  Controller,
  FieldValues,
  Path,
  PathValue,
  useFormContext,
} from "react-hook-form";
import { Option } from "@/types/components";
import MultiSelect from "@/components/ui/MultiSelect";

interface IFormMultiSelectProps<T extends FieldValues> {
  name: Path<T>;
  defaultValue: PathValue<T, Path<T>>;
  options: Option[];
  disabled?: boolean;
}

const FormMultiSelect = <T extends FieldValues>({
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
        <MultiSelect
          options={options}
          error={fieldState.error?.message}
          {...field}
        />
      )}
    />
  );
};

export default FormMultiSelect;
