import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyledStudentNotesForm,
  StyledStudentNotesFormBody,
  StyledStudentNotesFormFooter,
  StyledStudentNotesFormSubmit,
  StyledStudentNotesFormTitle,
} from "./styled";
import { CreateNoteSchema, TCreateNoteSchema } from "@/api/schemas/note";
import Send from "@/components/ui/icons/Send";

interface IStudentNotesFormProps {
  onSubmit: (data: TCreateNoteSchema) => void;
}

const StudentNotesForm: FC<IStudentNotesFormProps> = ({ onSubmit }) => {
  const methods = useForm<TCreateNoteSchema>({
    resolver: yupResolver(CreateNoteSchema),
  });

  const { register, handleSubmit } = methods;

  return (
    <StyledStudentNotesForm onSubmit={handleSubmit(onSubmit)}>
      <StyledStudentNotesFormTitle
        placeholder="Заголовок заметки..."
        {...register("title")}
      />
      <StyledStudentNotesFormBody
        rows={3}
        placeholder="Добавьте текст для своей заметки..."
        {...register("body")}
      />
      <StyledStudentNotesFormFooter>
        <StyledStudentNotesFormSubmit>
          <Send $size={16} $color="white" />
        </StyledStudentNotesFormSubmit>
      </StyledStudentNotesFormFooter>
    </StyledStudentNotesForm>
  );
};

export default StudentNotesForm;
