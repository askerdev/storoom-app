import {
  DefaultError,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { courseKeys } from "@/api/queries/keys";
import CourseService from "@/api/services/Course.service";
import { IUpdateCourseDTO } from "@/types/request.api";
import { APIError } from "@/types/units.api";

const useUpdateCourse = (
  id: string,
  options?: UseMutationOptions<unknown, APIError, IUpdateCourseDTO, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation<unknown, DefaultError, IUpdateCourseDTO>({
    mutationFn: (body) => CourseService.update(id, body),
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: courseKeys.all });
      toast.success("Курс успешно обновлён!");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      toast.error("Произошла ошибка");
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useUpdateCourse;
