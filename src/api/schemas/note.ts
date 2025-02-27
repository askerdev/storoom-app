import { InferType } from "yup";
import yup from "./yup";

export const CreateNoteSchema = yup.object({
  title: yup.string().min(3).max(64).required(),
  body: yup.string().min(3).max(255).required(),
});

export type TCreateNoteSchema = InferType<typeof CreateNoteSchema>;
