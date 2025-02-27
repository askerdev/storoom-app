import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { subjectKeys } from "@/api/queries/keys";
import SubjectService from "@/api/services/Subject.service";
import { APIError } from "@/types/units.api";

const useRemoveSubject = (
  options?: UseMutationOptions<unknown, APIError, string, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: SubjectService.remove,
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: subjectKeys.all });
      toast.success("Предмет успешно удалён");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      toast.error("У данного предмета есть учителя");
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useRemoveSubject;
