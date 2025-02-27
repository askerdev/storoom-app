import { IPagination } from "@/types/units.api";

export const defaultPagination: IPagination = {
  page: 0,
  pageSize: 6,
};

export const acceptImageFileTypes = [
  "image/jpeg",
]

export const acceptFileTypes = [
  ...acceptImageFileTypes,
  "application/pdf",
  "text/plain",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const subjectShortNames = {
  "Обществознание": "Общество",
  "Физика": "Физика",
  "Биология": "Биология",
  "Химия": "Химия",
  "Профильная математика": "Проф. мат",
  "Базовая математика": "Баз. мат",
  "Английский язык": "Англ. яз.",
  "Русский язык": "Рус. яз.",
};
