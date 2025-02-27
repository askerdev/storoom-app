import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { authKeys } from "@/api/queries/keys";
import AuthService from "@/api/services/Auth.service";
import { router } from "@/router";

const useRegister = () => {
  const qc = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: AuthService.register,
    onSuccess: (data) => {
      qc.setQueryData(authKeys.all, data);
      toast.success("Вы успешно зарегистрировались!");
      router.invalidate();
      navigate({
        to: "/auth/login",
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

export default useRegister;
