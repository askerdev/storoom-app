import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { courseKeys } from "@/api/queries/keys";
import LessonService from "@/api/services/Lesson.service";
import { APIError } from "@/types/units.api";

const useRemoveLesson = (
  options?: UseMutationOptions<unknown, APIError, string, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: LessonService.remove,
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: courseKeys.all });
      toast.success("Урок успешно удалён!");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      toast.error("Возникла ошибка");
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useRemoveLesson;
