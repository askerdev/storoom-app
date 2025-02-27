import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { courseKeys, lessonKeys } from "@/api/queries/keys";
import LessonService from "@/api/services/Lesson.service";
import { APIError } from "@/types/units.api";
import { TLessonSchema } from "@/api/schemas/lesson";

const useUpdateLesson = (
  options?: UseMutationOptions<
    unknown,
    APIError,
    { id: string } & Omit<TLessonSchema, "videoUrl"> & {
        videoUrl: string[];
      },
    unknown
  >,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: LessonService.update,
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: courseKeys.all });
      await qc.invalidateQueries({ queryKey: lessonKeys.all });
      toast.success("Урок успешно обновлён!");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      toast.error("Возникла ошибка");
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useUpdateLesson;
