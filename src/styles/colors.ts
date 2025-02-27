const colors = {
  purple_200: "#9994FF",
  purple_100: "#BEBBFF",
  yellow_200: "#FFE194",
  yellow_100: "#FFEFC6",
  gray_25: "#F2F2F2",
  gray_100: "#969696",
  gray_200: "#5E5E5E",
  gray_300: "#3A3A3A",

  bg_white: "#FFFFFF",
  bg_gray: "#EEEEEE",

  error: "#ff9494",
  returned: "#FF9494",
  notification: "#FF564A",
  approved: "#94FFB2",
  checking: "#94BFFF",
  black: "#121212",
  white: "#FFFFFF",
} as const;

export default colors;

export type TColor = keyof typeof colors;
