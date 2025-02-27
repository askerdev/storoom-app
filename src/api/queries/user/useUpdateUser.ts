import {
  DefaultError,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { userKeys } from "@/api/queries/keys";
import UserService from "@/api/services/User.service";
import { IUpdateUserDTO } from "@/types/request.api";
import { APIError } from "@/types/units.api";

const useUpdateUser = (
  id: string,
  options?: UseMutationOptions<null, APIError, IUpdateUserDTO, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation<null, DefaultError, IUpdateUserDTO>({
    mutationFn: (body) => UserService.update(id, body),
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: userKeys.all });
      toast.success("Пользователь успешно обновлён");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      toast.error("Произошла ошибка");
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useUpdateUser;
