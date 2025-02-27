import { ChangeEvent, FC, useCallback, useMemo, useState } from "react";
import StudentNotesForm from "./components/StudentNotesForm";
import {
  StyledStudentNotes,
  StyledStudentNotesBody,
  StyledStudentNotesHeader,
} from "./styled";
import StudentNotesList from "./components/StudentNotesList";
import useNotes from "@/api/queries/notes/useNotes";
import useRemoveNote from "@/api/queries/notes/useRemoveNote";
import { INote } from "@/types/units.api";
import Typography from "@/components/ui/Typography";
import Input from "@/components/ui/Input";
import useDebounce from "@/hooks/useDebounce";
import InfinitePaginationFetcher from "@/components/InfinitePaginationFetcher";
import Skeleton from "@/components/ui/Skeleton";
import { TCreateNoteSchema } from "@/api/schemas/note";
import useCreateNote from "@/api/queries/notes/useCreateNote";

interface IStudentNotesProps {
  lesson: string;
}

const StudentNotes: FC<IStudentNotesProps> = ({ lesson }) => {
  const [search, setSearch] = useState("");
  const { mutate: remove } = useRemoveNote();
  const { mutate: create } = useCreateNote();
  const { data, isPending, fetchNextPage } = useNotes({ lesson, search });

  const notes = (data?.pages ?? []).reduce(
    (prev, page) => [...prev, ...page.list],
    [] as INote[],
  );

  const handleSearch = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trim());
  }, 300);

  const handleSubmit = useCallback(
    (note: TCreateNoteSchema) => {
      create({
        ...note,
        lesson,
      });
    },
    [create, lesson],
  );

  const skeleton = useMemo(
    () =>
      Array(4)
        .fill(0)
        .map((_, index) => `Skeleton-${index}`)
        .map((key) => <Skeleton key={key} $width="100%" $height={192} />),
    [],
  );

  return (
    <StyledStudentNotes>
      <StyledStudentNotesHeader>
        <Typography $variant="h2" $color="gray_300">
          Заметки
        </Typography>
        <Input
          onChange={handleSearch}
          placeholder="Поиск по названию..."
          isSearch
        />
      </StyledStudentNotesHeader>
      <StyledStudentNotesBody>
        <StudentNotesForm onSubmit={handleSubmit} />
        <StudentNotesList notes={notes} onRemove={remove} />
        {isPending && skeleton}
        <InfinitePaginationFetcher fetcher={fetchNextPage} />
      </StyledStudentNotesBody>
    </StyledStudentNotes>
  );
};

export default StudentNotes;
