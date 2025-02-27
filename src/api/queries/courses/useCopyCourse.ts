import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { courseKeys } from "@/api/queries/keys";
import CourseService from "@/api/services/Course.service";
import { APIError } from "@/types/units.api";

const useCopyCourse = (
  options?: UseMutationOptions<unknown, APIError, string, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: CourseService.copy,
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: courseKeys.all });
      toast.success("Курс успешно копирован!");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      toast.error("Произошла ошибка");
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useCopyCourse;
