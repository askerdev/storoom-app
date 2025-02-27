import dayjs from "dayjs";
import * as yup from "yup";

yup.setLocale({
  array: {
    min: ({ min }) =>
      `В списке ${min === 1 ? "должен" : "должно"} быть минимально ${min} элемент${min === 1 ? "" : "ов"}`,
  },
  date: {
    min: (input) =>
      `Дата должна быть позже, чем ${dayjs(input.value).format("HH:mm DD.MM.YYYY")}`,
    max: (input) =>
      `Дата должна быть раньше, чем ${dayjs(input.value).format("HH:mm DD.MM.YYYY")}`,
  },
  mixed: {
    default: "Ошибка!",
    required: "Обязательно!",
    oneOf: "Выберите из списка",
  },
  string: {
    url: () => `Это должен быть валидный URL`,
    min: (params) => `Минимальная длина ${params.min} символов`,
    max: (params) => `Максимальная длина ${params.max} символов`,
    email: () => `Невалидный email`,
    length: (params) => `длина должна иметь ${params.length} символов`,
  },
  number: {
    min: (params) => `Число должно быть больше или равно ${params.min}`,
    max: (params) => `Число должно быть меньше или равно ${params.max}`,
    lessThan: (params) => `Число должно быть меньше чем ${params.less}`,
    moreThan: (params) => `Число должно быть больше ${params.more}`,
    positive: () => `Число должно быть положительном`,
    negative: () => `Число должно быть отрицательным`,
    integer: () => `Число должно быть целым`,
  },
  boolean: {
    isValue: () => `Обязательно!`,
  },
});

export default {
  ...yup,
  files: () =>
    yup
      .mixed<File[]>()
      .test(
        "required",
        "Пожалуйста выберите файл(ы)",
        (files) => (files as File[])?.length > 0,
      )
      .default([]),
};
