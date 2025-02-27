import { InferType } from "yup";
import yup from "./yup";
import { CreateUserSchema, UpdateUserSchema } from "@/api/schemas/user";

export const CreateTeacherSchema = yup.object({
  user: CreateUserSchema.required(),
  teacher: yup.object({
    avatar: yup.string().required(),
    subject: yup.string().required(),
  }),
});
export type TCreateTeacherSchema = InferType<typeof CreateTeacherSchema>;

export const UpdateTeacherSchema = yup.object({
  user: UpdateUserSchema.required(),
  teacher: yup.object({
    avatar: yup.string().required(),
  }),
});
export type TUpdateTeacherSchema = InferType<typeof UpdateTeacherSchema>;
