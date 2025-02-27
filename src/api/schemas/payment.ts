import { InferType } from "yup";
import { PaymentType } from "@/constants/enums";
import yup from "./yup";

export const PaymentSchema = yup.object({
  amount: yup
    .number()
    .typeError("Это должно быть число!")
    .positive()
    .required(),
  user: yup.string().required(),
  type: yup.mixed<PaymentType>().oneOf(Object.values(PaymentType)).required(),
});
export type TPaymentSchema = InferType<typeof PaymentSchema>;
