import { useQuery } from "@tanstack/react-query";
import { homeworkKeys } from "@/api/queries/keys";
import HomeworkService from "@/api/services/Homework.service";

const useGetHomeworkByLessonId = (lessonId: string, enabled = true) =>
  useQuery({
    queryKey: homeworkKeys.detail(lessonId),
    queryFn: () => HomeworkService.getByLessonId(lessonId),
    retry: 1,
    enabled,
  });

export default useGetHomeworkByLessonId;
