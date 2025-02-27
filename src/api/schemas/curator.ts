import { InferType } from "yup";
import yup from "./yup";
import { CreateUserSchema, UpdateUserSchema } from "@/api/schemas/user";

export const CreateCuratorSchema = yup.object({
  user: CreateUserSchema.required(),
  curator: yup.object({
    avatar: yup.string().required(),
    subjects: yup.array().of(yup.string().required()).min(1).default([]),
  }),
});
export type TCreateCuratorSchema = InferType<typeof CreateCuratorSchema>;

export const UpdateCuratorSchema = yup.object({
  user: UpdateUserSchema.required(),
  curator: yup.object({
    avatar: yup.string().required(),
    subjects: yup.array().of(yup.string().required()).min(1).default([]),
  }),
});
export type TUpdateCuratorSchema = InferType<typeof UpdateCuratorSchema>;

export const SwitchCuratorSchema = yup.object({
  from: yup.string().required(),
  to: yup.string().required(),
});
export type TSwitchCuratorSchema = InferType<typeof SwitchCuratorSchema>;
