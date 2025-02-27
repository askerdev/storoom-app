import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { userKeys } from "@/api/queries/keys";
import UserService from "@/api/services/User.service";
import { APIError } from "@/types/units.api";
import { ICreateUserDTO } from "@/types/request.api";

const useCreateUser = (
  options?: UseMutationOptions<null, APIError, ICreateUserDTO, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: UserService.create,
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: userKeys.all });
      toast.success("Пользователь успешно создан");
      options?.onSuccess?.(...args);
    },
    onError: (err, ...args) => {
      toast.error("Такой пользователь уже существует или он заблокирован");
      console.log(err);
      options?.onError?.(err, ...args);
    },
  });
};

export default useCreateUser;
