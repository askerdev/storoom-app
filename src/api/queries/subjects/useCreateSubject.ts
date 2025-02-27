import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { subjectKeys } from "@/api/queries/keys";
import SubjectService from "@/api/services/Subject.service";
import { APIError } from "@/types/units.api";
import { ICreateSubjectDTO } from "@/types/request.api";

const useCreateSubject = (
  options?: UseMutationOptions<unknown, APIError, ICreateSubjectDTO, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: SubjectService.create,
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: subjectKeys.all });
      toast.success("Предмет успешно cоздан!");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      toast.error("Возникла ошибка");
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useCreateSubject;
