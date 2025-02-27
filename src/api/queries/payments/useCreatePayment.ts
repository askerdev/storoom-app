import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { userKeys } from "@/api/queries/keys";
import PaymentService from "@/api/services/Payment.service";
import { ICreatePaymentDTO } from "@/types/request.api";
import { APIError } from "@/types/units.api";

const useCreatePayment = (
  options?: UseMutationOptions<unknown, APIError, ICreatePaymentDTO, unknown>,
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: PaymentService.create,
    ...(options ?? {}),
    onSuccess: async (...args) => {
      await qc.invalidateQueries({ queryKey: userKeys.all });
      toast.success("Баланс успешно изменён");
      options?.onSuccess?.(...args);
    },
  });
};

export default useCreatePayment;
