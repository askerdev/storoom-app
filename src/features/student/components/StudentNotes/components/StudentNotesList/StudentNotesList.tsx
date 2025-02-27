import { FC } from "react";
import { INote } from "@/types/units.api";
import StudentNotesItem from "../StudentNotesItem";
import { StyledStudentNotesList } from "./styled";

interface IStudentNotesListProps {
  notes: INote[];
  onRemove: (id: string) => void;
}

const StudentNotesList: FC<IStudentNotesListProps> = ({ notes, onRemove }) => (
  <StyledStudentNotesList>
    {notes.map((note) => (
      <StudentNotesItem
        key={note.id}
        note={note}
        onRemove={() => onRemove(note.id)}
      />
    ))}
  </StyledStudentNotesList>
);

export default StudentNotesList;
