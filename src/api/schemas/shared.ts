import yup from "@/api/schemas/yup";

export const ArrayEntrySchema = yup.object({
  name: yup.string().required(),
  value: yup.string().required(),
});
