import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { userKeys } from "@/api/queries/keys";
import UserService from "@/api/services/User.service";
import { APIError } from "@/types/units.api";

const useRemoveUser = (
  options?: UseMutationOptions<unknown, APIError, string, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: UserService.remove,
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: userKeys.all });
      toast.success("Пользователь успешно удалён");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      if (err?.statusCode) {
        toast.error(err.message);
      } else {
        toast.error("Произошла ошибка");
      }
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useRemoveUser;
