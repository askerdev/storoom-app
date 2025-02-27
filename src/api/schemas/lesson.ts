import { InferType } from "yup";
import yup from "./yup";

export const LessonSchema = yup.object({
  cover: yup.string().required(),
  name: yup.string().required().min(3).max(64).trim(),
  description: yup.string().required().min(1).max(400).trim(),
  homeworkDescription: yup.string().required().min(1).max(400).trim(),
  course: yup.string().required(),
  videoUrl: yup
    .array(yup.object({ value: yup.string().url().required() }))
    .min(1, "Добавьте хотя бы одно видео")
    .required("Добавьте хотя бы одно видео"),
  testUrl: yup.string().url().optional(),
  material: yup.array(yup.string().required()).default([]).min(1),
  homeworkMaterial: yup.array(yup.string().required().trim()).default([]),
  time: yup.string().required(),
  order: yup.number().integer().min(0),
});

export type TLessonSchema = InferType<typeof LessonSchema>;
