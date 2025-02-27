import useUpdateHomework from "@/api/queries/homeworks/useUpdateHomework";
import useCreateHomework from "@/api/queries/homeworks/useCreateHomework";
import useGetHomeworkByLessonId from "@/api/queries/homeworks/useGetHomeworkByLessonId";
import useAuth from "@/api/queries/auth/useAuth";
import { acceptFileTypes } from "@/constants/api";
import EditableFileList from "@/components/EditableFileList";

type THomeworkFormProps = {
  lesson: string;
};

const StudentHomeworkForm = ({ lesson }: THomeworkFormProps) => {
  const { data: user, isPending: isUserPending } = useAuth();
  const { data: homework, isPending: isHomeworkPending } =
    useGetHomeworkByLessonId(lesson);
  const { mutate: create, isPending: isCreateHomeworkPending } =
    useCreateHomework();
  const { mutate: update, isPending: isUpdateHomeworkPending } =
    useUpdateHomework();
  const isPending =
    isCreateHomeworkPending ||
    isUpdateHomeworkPending ||
    isUserPending ||
    isHomeworkPending;

  return (
    <EditableFileList
      value={homework?.materials ?? []}
      info="Максимальный размер файла 300 Мб"
      label="Загрузить ДЗ"
      accept={acceptFileTypes}
      disabled={isPending}
      onChange={(value) => {
        if (homework) {
          update({
            id: homework.id,
            materials: value,
          });
        } else if (user) {
          create({
            lesson,
            materials: value,
            student: user.id,
          });
        }
      }}
      multiple
    />
  );
};

export default StudentHomeworkForm;
