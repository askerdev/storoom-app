import {
  Controller,
  FieldValues,
  Path,
  PathValue,
  useFormContext,
} from "react-hook-form";
import { acceptFileTypes } from "@/constants/api";
import PhotoFile from "../PhotoFile";

interface IFormPhotoFileProps<T extends FieldValues> {
  name: Path<T>;
  defaultValue: PathValue<T, Path<T>>;
  label: string;
  disabled?: boolean;
  accept: string[] | typeof acceptFileTypes;
  info?: string;
}

const FormPhotoFile = <T extends FieldValues>({
  name,
  defaultValue,
  disabled,
  label,
  accept,
  info,
}: IFormPhotoFileProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <PhotoFile
          label={label}
          accept={accept}
          info={info}
          error={fieldState.error?.message}
          {...field}
        />
      )}
    />
  );
};

export default FormPhotoFile;
