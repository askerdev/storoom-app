import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { authKeys } from "@/api/queries/keys";
import AuthService from "@/api/services/Auth.service";
import { BasePages } from "@/constants/auth";
import { router } from "@/router";

const useLogin = () => {
  const qc = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      qc.setQueryData(authKeys.all, data);
      toast.success("Вы успешно авторизовались!");
      router.invalidate();
      navigate({
        to: BasePages[data.role],
      });
    },
    onError: () => {
      toast.error("Неверный email или пароль!");
    },
  });
};

export default useLogin;
