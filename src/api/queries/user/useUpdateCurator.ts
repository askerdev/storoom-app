import {
  DefaultError,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { IUpdateCuratorDTO } from "@/types/request.api";
import UserService from "@/api/services/User.service";
import { userKeys } from "@/api/queries/keys";
import { APIError } from "@/types/units.api";

const useUpdateCurator = (
  userId: string,
  options?: UseMutationOptions<null, APIError, IUpdateCuratorDTO, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation<null, DefaultError, IUpdateCuratorDTO>({
    mutationFn: (data) => UserService.updateCurator(userId, data),
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: userKeys.all });
      toast.success("Пользователь успешно обновлён");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      options?.onError?.(err, ...args);
    },
  });
};

export default useUpdateCurator;
