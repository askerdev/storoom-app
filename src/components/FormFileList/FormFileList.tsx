import {
  Controller,
  FieldValues,
  Path,
  PathValue,
  useFormContext,
} from "react-hook-form";
import EditableFileList from "../EditableFileList";
import { acceptFileTypes } from "@/constants/api";

interface IFormFileListProps<T extends FieldValues> {
  name: Path<T>;
  defaultValue: PathValue<T, Path<T>>;
  label: string;
  disabled?: boolean;
  accept: string[] | typeof acceptFileTypes;
  multiple?: boolean;
  info?: string;
}

const FormFileList = <T extends FieldValues>({
  name,
  defaultValue,
  disabled,
  label,
  accept,
  multiple = false,
  info,
}: IFormFileListProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <EditableFileList
          label={label}
          accept={accept}
          multiple={multiple}
          info={info}
          error={fieldState.error?.message}
          {...field}
        />
      )}
    />
  );
};

export default FormFileList;
