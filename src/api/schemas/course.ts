import { InferType } from "yup";
import yup from "./yup";

export const CourseSchema = yup.object({
  cover: yup.string().required(),
  name: yup.string().required().min(3).max(64).trim(),
  description: yup.string().required().min(1).max(255).trim(),
  price: yup.number().positive().typeError("Это должно быть число!").required(),
  advantages: yup
    .array(
      yup
        .object({
          displayName: yup.string().required().trim(),
        })
        .required(),
    )
    .default([]),
});
export type TCourseSchema = InferType<typeof CourseSchema>;
