import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { userKeys } from "@/api/queries/keys";
import SubscriptionsService from "@/api/services/Subscriptions.service";
import { APIError } from "@/types/units.api";

const useSwitchCurator = (
  from: string,
  options?: UseMutationOptions<unknown, APIError, string, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (to: string) => SubscriptionsService.switchCurator(from, to),
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: userKeys.all });
      options?.onSuccess?.(...args);
    },
  });
};

export default useSwitchCurator;
