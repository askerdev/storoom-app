import {
  DefaultError,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { subjectKeys } from "@/api/queries/keys";
import SubjectService from "@/api/services/Subject.service";
import { IUpdateSubjectDTO } from "@/types/request.api";
import { APIError } from "@/types/units.api";

const useUpdateSubject = (
  id: string,
  options?: UseMutationOptions<null, APIError, IUpdateSubjectDTO, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation<null, DefaultError, IUpdateSubjectDTO>({
    mutationFn: (body) => SubjectService.update(id, body),
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: subjectKeys.all });
      toast.success("Предмет успешно обновлён");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      toast.error("Произошла ошибка");
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useUpdateSubject;
