import { InferType } from "yup";
import { AllRoles } from "@/constants/enums";
import yup from "./yup";

export const CreateUserSchema = yup.object({
  name: yup.string().required().min(3).max(128).trim(),
  email: yup.string().email().required().trim(),
  phone: yup
    .string()
    .trim()
    .matches(/^(\+?7|8)( ?)(\d{3})(-)?(\d{3})(-)?(\d{2})(-)?(\d{2})$/, {
      message: "Не правильный номер телефона",
    })
    .required(),
  role: yup.mixed<AllRoles>().oneOf(Object.values(AllRoles)).required(),
  password: yup.string().min(8).max(20).required(),
});
export type TCreateUserSchema = InferType<typeof CreateUserSchema>;

export const UpdateUserSchema = yup.object({
  name: yup.string().required().min(3).max(128).trim(),
  email: yup.string().email().required().trim(),
  phone: yup
    .string()
    .trim()
    .matches(/^(\+?7|8)( ?)(\d{3})(-)?(\d{3})(-)?(\d{2})(-)?(\d{2})$/, {
      message: "Не правильный номер телефона",
    })
    .required(),
});
export type TUpdateUserSchema = InferType<typeof UpdateUserSchema>;
