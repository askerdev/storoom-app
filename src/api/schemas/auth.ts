import { InferType } from "yup";
import yup from "./yup";

export const LoginSchema = yup.object({
  email: yup.string().email().required().trim(),
  password: yup.string().min(6).max(20).required().trim(),
});
export type TLoginSchema = InferType<typeof LoginSchema>;

export const RegisterSchema = yup.object({
  name: yup.string().required().min(3).max(128).trim(),
  email: yup.string().email().required().trim(),
  phone: yup
    .string()
    .trim()
    .matches(/^(\+?7|8)( ?)(\d{3})(-)?(\d{3})(-)?(\d{2})(-)?(\d{2})$/, {
      message: "Не правильный номер телефона",
    })
    .required(),
  password: yup.string().min(6).max(20).required().trim(),
});
export type TRegisterSchema = InferType<typeof RegisterSchema>;
