import { useEffect, useRef } from "react";
import Download from "@/components/ui/icons/Download";
import Typography from "@/components/ui/Typography";
import { TColor } from "@/styles/colors";
import { UploadButtonContainer, UploadButtonInput } from "./styled";

type TUploadButtonProps = {
  defaultValid?: boolean;
  value?: File[];
  onChange(fileList: File[]): void;
  multiple?: boolean;
  accept: string[];
  placeholder: string;
  disabled?: boolean;
  fullFilledPlaceholder?: string;
};

const UploadButton = ({
  value = [],
  onChange,
  accept,
  placeholder,
  fullFilledPlaceholder = "Загружено",
  defaultValid = false,
  multiple = false,
  disabled = false,
}: TUploadButtonProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const color: TColor =
    (!!value || defaultValid) && !multiple ? "black" : "gray_100";

  useEffect(() => {
    if (ref.current && value) {
      const dataTransfer = new DataTransfer();
      value.forEach((file) => dataTransfer.items.add(file));
      ref.current.files = dataTransfer.files;
    }
  }, [value]);

  return (
    <UploadButtonContainer>
      <Download $size={24} $color={color} />
      <Typography $variant="text1" $color={color}>
        {(!!value || defaultValid) && !multiple
          ? fullFilledPlaceholder
          : placeholder}
      </Typography>
      <UploadButtonInput
        ref={ref}
        disabled={disabled}
        type="file"
        multiple={multiple}
        accept={accept.join(",")}
        onChange={(e) => {
          if (e.target.files) {
            onChange([...(value || []), ...e.target.files]);
          }
        }}
      />
    </UploadButtonContainer>
  );
};

export default UploadButton;
