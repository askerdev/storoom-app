import { request } from "@/lib/request";
import { ICreatePaymentDTO } from "@/types/request.api";

export default class PaymentService {
  static async create(payload: ICreatePaymentDTO) {
    const { data } = await request.post("/payments/create", payload);
    return data;
  }
}
