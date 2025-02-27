import { ChangeEvent, forwardRef, useCallback } from "react";
import {
  StyledEditableFileList,
  StyledEditableFileListList,
  StyledEditableFileListUploadWrapper,
} from "./styled";
import Button from "../ui/Button";
import Upload from "../ui/icons/Upload";
import EditableFileItem from "./Dependencies/EditableFileItem";
import useUploadFile from "@/api/queries/media/useUploadFile";
import Typography from "../ui/Typography";
import { acceptFileTypes } from "@/constants/api";

interface IEditableFileListProps {
  value: string[];
  onChange: (value: string[]) => void | Promise<void>;
  onBlur?: () => void;
  disabled?: boolean;
  label: string;
  accept: string[] | typeof acceptFileTypes;
  multiple?: boolean;
  info?: string;
  error?: string;
}

const EditableFileList = forwardRef<HTMLInputElement, IEditableFileListProps>(
  (
    {
      value,
      onChange,
      onBlur,
      disabled = false,
      label,
      accept,
      multiple,
      error,
      info,
    },
    ref,
  ) => {
    const { mutate: upload, isPending } = useUploadFile({
      onSuccess: (links) => {
        onChange([...value, ...links]);
      },
    });

    const handleUpload = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
          return;
        }

        upload([...e.target.files]);

        e.target.files = new DataTransfer().files;
      },
      [upload],
    );

    return (
      <StyledEditableFileList onBlur={onBlur} ref={ref}>
        <StyledEditableFileListUploadWrapper>
          <Button
            as="label"
            $variant="primary"
            disabled={disabled || isPending}
          >
            <input
              onChange={handleUpload}
              type="file"
              multiple={multiple}
              disabled={disabled || isPending}
              accept={accept.join(",")}
            />
            <Upload $size={32} />
            {label}
          </Button>
          {!!info && !error && <Typography $variant="text2">{info}</Typography>}
          {!!error && (
            <Typography $variant="text2" $color="error">
              {error}
            </Typography>
          )}
        </StyledEditableFileListUploadWrapper>

        <StyledEditableFileListList>
          {value.map((link: string) => (
            <EditableFileItem
              key={link}
              link={link}
              disabled={disabled || isPending}
              onRemove={() => {
                onChange(value.filter((item: string) => item !== link));
              }}
            />
          ))}
        </StyledEditableFileListList>
      </StyledEditableFileList>
    );
  },
);

export default EditableFileList;
