import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { authKeys, subscriptionKeys } from "@/api/queries/keys";
import SubscriptionsService from "@/api/services/Subscriptions.service";

const useSubscribe = (
  courseId: string,
  curatorId: string,
  onSuccess?: () => void,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: () => SubscriptionsService.subscribe(courseId, curatorId),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: authKeys.all });
      await qc.invalidateQueries({ queryKey: subscriptionKeys.all });
      toast.success("Вы успешно купили курс на месяц");
      onSuccess?.();
    },
    onError: () => {
      toast.error("Недостаточно средств или курс уже приобритён");
    },
  });
};

export default useSubscribe;
