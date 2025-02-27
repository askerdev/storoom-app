import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { subscriptionKeys } from "@/api/queries/keys";
import SubscriptionsService from "@/api/services/Subscriptions.service";

const useBlockSubscribe = (onSuccess?: () => void) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (subscriptionId: string) =>
      SubscriptionsService.block(subscriptionId),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: subscriptionKeys.all });
      toast.success("Курс заблокирован");
      onSuccess?.();
    },
    onError: () => {
      toast.error("Произошла ошибка");
    },
  });
};

export default useBlockSubscribe;
