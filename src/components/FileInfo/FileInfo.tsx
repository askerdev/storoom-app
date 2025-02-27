import { FC } from "react";
import FileIcon from "../ui/FileIcon";
import Typography from "../ui/Typography";
import { StyledFile, StyledFileInfo } from "./styled";
import { mediaLinkToFile } from "@/utils/file";
import useGetFileMetadata from "@/api/queries/media/useGetFileMetadata";
import Skeleton from "../ui/Skeleton";

interface IFileProps {
  link: string;
}

const FileInfo: FC<IFileProps> = ({ link }) => {
  const { id, name, type } = mediaLinkToFile(link);
  const { data, isPending, isSuccess } = useGetFileMetadata(id);

  return (
    <StyledFile>
      <FileIcon type={type} />
      <StyledFileInfo>
        <Typography $variant="text2" $color="gray_200" $lineClamp="1">
          {name}
        </Typography>
        {isPending && <Skeleton $width={24} $height={10} />}
        {isSuccess && (
          <Typography $variant="caption" $color="gray_100">
            {data.size} МБ
          </Typography>
        )}
      </StyledFileInfo>
    </StyledFile>
  );
};

export default FileInfo;
