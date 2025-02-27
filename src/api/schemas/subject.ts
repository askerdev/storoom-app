import { InferType } from "yup";
import yup from "./yup";

export const SubjectSchema = yup.object({
  name: yup.string().required().min(3).max(64).trim(),
});
export type TSubjectSchema = InferType<typeof SubjectSchema>;
