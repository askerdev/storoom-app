import { InferType } from "yup";
import { HomeworkStatus } from "@/constants/enums";
import yup from "./yup";

export const HomeworkSchema = yup.object({
  materials: yup.array(yup.string().required()).default([]),
  student: yup.string().required(),
  lesson: yup.string().required(),
});
export type TCreateHomeworkSchema = InferType<typeof HomeworkSchema>;

export const CuratorHomeworkSchema = yup.object({
  status: yup
    .mixed<HomeworkStatus>()
    .oneOf(Object.values(HomeworkStatus))
    .optional(),
});
export type TCuratorHomeworkSchema = InferType<typeof CuratorHomeworkSchema>;
