import { FC } from "react";
import Typography from "../ui/Typography";
import FileInfo from "../FileInfo";
import Button from "../ui/Button";
import Download from "../ui/icons/Download";
import {
  StyledReadonlyFileList,
  StyledReadonlyFileListItem,
  StyledReadonlyFileListList,
} from "./styled";

interface IReadonlyFileListProps {
  title: string;
  list: string[];
}

const ReadonlyFileList: FC<IReadonlyFileListProps> = ({ title, list }) => (
  <StyledReadonlyFileList>
    <Typography $variant="text1">{title}</Typography>
    <StyledReadonlyFileListList>
      {list.length === 0 && (
        <Typography $variant="h3" $color="gray_100" $fontWeight={400}>
          Список пуст
        </Typography>
      )}
      {list.map((link) => (
        <StyledReadonlyFileListItem key={link}>
          <FileInfo link={link} />
          <Button
            as="a"
            type="button"
            $variant="primary"
            target="_blank"
            href={link}
          >
            <Download $size={21} />
          </Button>
        </StyledReadonlyFileListItem>
      ))}
    </StyledReadonlyFileListList>
  </StyledReadonlyFileList>
);

export default ReadonlyFileList;
