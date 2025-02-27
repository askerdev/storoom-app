/* eslint-disable react/destructuring-assignment */
import { FC } from "react";
import { extractFileName } from "@/utils/helpers";
import Typography from "@/components/ui/Typography";
import { StyledA } from "@/components/FileLink/styled";

type TLocalFileProps = {
  file: File | string;
};

const FileLink: FC<TLocalFileProps> = ({ file: fileOrUrl }) => {
  const name =
    typeof fileOrUrl !== "string"
      ? fileOrUrl.name.split(".")[0]
      : extractFileName(fileOrUrl);
  const url =
    typeof fileOrUrl !== "string" ? URL.createObjectURL(fileOrUrl) : fileOrUrl;

  return (
    <StyledA href={url} target="_blank" rel="noreferrer">
      <Typography $variant="text1" $color="purple_200" $nowrap $ellipsis>
        {name}
      </Typography>
    </StyledA>
  );
};

export default FileLink;
