export const getApiBaseUrl = () => {
  if (import.meta.env.DEV && !import.meta.env.VITE_API_URL) {
    return "";
  }
  return import.meta.env.VITE_API_URL;
};

export const toKebabCase = (str: string) =>
  str
    .split("")
    .map((letter, idx) =>
      letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter,
    )
    .join("");

export const normalizeFloat = (value: number) => Math.round(value * 10) / 10;

export const extractFileName = (url: string) =>
  url.split("|_|")[1].split(".")[0];

export const compareLessonsSort =
  <T>(key: keyof T) =>
  (a: T, b: T) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }

    return 0;
  };

type Callback<T> = (...args: T[]) => void;

export const debounced = <T = unknown>(cb: Callback<T>, wait: number) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: T[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => cb(...args), wait);
  };
};
