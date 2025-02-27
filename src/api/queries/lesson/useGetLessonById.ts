import { useQuery } from "@tanstack/react-query";
import LessonService from "@/api/services/Lesson.service";
import { lessonKeys } from "../keys";

const useGetLessonById = (id: string, enabled = true) =>
  useQuery({
    queryKey: lessonKeys.detail(id),
    queryFn: () => LessonService.getLesson(id),
    retry: 1,
    enabled,
  });

export default useGetLessonById;
