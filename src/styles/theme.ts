import screens from "./screens";
import sizes from "./sizes";
import colors from "./colors";

export const theme = {
  colors,
  sizes,
  screens,
};

type TTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
