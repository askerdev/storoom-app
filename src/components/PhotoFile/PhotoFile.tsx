import { ChangeEvent, forwardRef, useCallback, useState } from "react";
import Button from "../ui/Button";
import Typography from "../ui/Typography";
import { StyledPhotoFile, StyledPhotoFileContainer } from "./styled";
import Cross from "../ui/icons/Cross";
import useUploadFile from "@/api/queries/media/useUploadFile";
import Image from "../Image";
import Skeleton from "../ui/Skeleton";

interface IPhotoFileProps {
  value: string;
  onChange: (value: string) => void | Promise<void>;
  onBlur?: () => void;
  disabled?: boolean;
  label: string;
  accept: string[];
  info?: string;
  error?: string;
}

const PhotoFile = forwardRef<HTMLInputElement, IPhotoFileProps>(
  (
    { value, onChange, disabled = false, label, accept, info, error, onBlur },
    ref,
  ) => {
    const [showPreview, setShowPreview] = useState(!!value);

    const { mutate: upload, isPending } = useUploadFile({
      onSuccess: (links) => {
        onChange(links[0]);
        setShowPreview(true);
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
      <StyledPhotoFile onBlur={onBlur}>
        {isPending && <Skeleton key="skeleton" $width={360} $height={360} />}
        {showPreview && !isPending && (
          <Image
            key="preview"
            src={value}
            onError={() => setShowPreview(false)}
            $width={360}
            $height={360}
          />
        )}
        <StyledPhotoFileContainer key="upload">
          <Button
            as="label"
            $variant="outline"
            $width={132}
            $height={92}
            type="button"
            disabled={disabled}
          >
            <input
              ref={ref}
              onChange={handleUpload}
              type="file"
              multiple={false}
              disabled={disabled || isPending}
              accept={accept.join(",")}
            />
            <Cross $size={48} $rotateDeg={45} />
          </Button>
          <Typography $variant="button">{label}</Typography>
        </StyledPhotoFileContainer>
        {!!info && !error && (
          <Typography key="info-text" $variant="text2">
            {info}
          </Typography>
        )}
        {!!error && (
          <Typography key="error-text" $variant="text2" $color="error">
            {error}
          </Typography>
        )}
      </StyledPhotoFile>
    );
  },
);

export default PhotoFile;
