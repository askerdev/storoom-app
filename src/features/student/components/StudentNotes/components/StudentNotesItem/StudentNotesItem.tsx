import { FC } from "react";
import { INote } from "@/types/units.api";
import {
  StyledStudentNotesItem,
  StyledStudentNotesItemInfo,
  StyledStudentNotesItemRemoveButton,
} from "./styled";
import Typography from "@/components/ui/Typography";
import Trash from "@/components/ui/icons/Trash";

interface IStudentNotesItemProps {
  note: INote;
  onRemove: () => void;
}

const StudentNotesItem: FC<IStudentNotesItemProps> = ({ note, onRemove }) => (
  <StyledStudentNotesItem>
    <StyledStudentNotesItemInfo>
      <Typography $variant="text1" $color="gray_300">
        {note.title}
      </Typography>
      <Typography $variant="text2" $color="gray_100">
        {note.body}
      </Typography>
    </StyledStudentNotesItemInfo>
    <StyledStudentNotesItemRemoveButton type="button" onClick={onRemove}>
      <Trash $size={24} $color="purple_200" />
    </StyledStudentNotesItemRemoveButton>
  </StyledStudentNotesItem>
);

export default StudentNotesItem;
