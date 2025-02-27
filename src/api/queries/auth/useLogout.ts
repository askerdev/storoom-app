import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authKeys } from "@/api/queries/keys";
import AuthService from "@/api/services/Auth.service";
import { router } from "@/router";

const useLogout = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: AuthService.logout,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: authKeys.all });
      router.invalidate();
    },
  });
};

export default useLogout;
