import { FC } from "react";
import FileInfo from "@/components/FileInfo";
import Download from "@/components/ui/icons/Download";
import {
  StyledEditableFileItem,
  StyledEditableFileItemActions,
} from "./styled";
import Trash from "@/components/ui/icons/Trash";

interface IEditableFileItemProps {
  link: string;
  onRemove: () => void;
  disabled?: boolean;
}

const EditableFileItem: FC<IEditableFileItemProps> = ({
  link,
  onRemove,
  disabled = false,
}) => (
  <StyledEditableFileItem>
    <FileInfo link={link} />
    <StyledEditableFileItemActions>
      <a href={link} aria-label="download">
        <Download $size={24} $color="purple_200" />
      </a>
      <button
        type="button"
        aria-label="remove"
        onClick={onRemove}
        disabled={disabled}
      >
        <Trash $size={24} $color="purple_200" />
      </button>
    </StyledEditableFileItemActions>
  </StyledEditableFileItem>
);

export default EditableFileItem;
