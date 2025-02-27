import { css, CSSProperties } from "styled-components";

const screens = {
  xs: "576px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1536px",
};

type TCSSParameters = Parameters<typeof css>;

export const media = {
  "max-xs": (...args: TCSSParameters) => css`
    @media (max-width: ${screens.xs}) {
      ${css(...args)};
    }
  `,
  "max-sm": (...args: TCSSParameters) => css`
    @media (max-width: ${screens.sm}) {
      ${css(...args)};
    }
  `,
  "max-md": (...args: TCSSParameters) => css`
    @media (max-width: ${screens.md}) {
      ${css(...args)};
    }
  `,
  "max-lg": (...args: TCSSParameters) => css`
    @media (max-width: ${screens.lg}) {
      ${css(...args)};
    }
  `,
  "max-xl": (...args: TCSSParameters) => css`
    @media (max-width: ${screens.xl}) {
      ${css(...args)};
    }
  `,
  "max-xxl": (...args: TCSSParameters) => css`
    @media (max-width: ${screens.xxl}) {
      ${css(...args)};
    }
  `,

  xs: (...args: TCSSParameters) => css`
    @media (min-width: ${screens.xs}) {
      ${css(...args)};
    }
  `,
  sm: (...args: TCSSParameters) => css`
    @media (min-width: ${screens.sm}) {
      ${css(...args)};
    }
  `,
  md: (...args: TCSSParameters) => css`
    @media (min-width: ${screens.md}) {
      ${css(...args)};
    }
  `,
  lg: (...args: TCSSParameters) => css`
    @media (min-width: ${screens.lg}) {
      ${css(...args)};
    }
  `,
  xl: (...args: TCSSParameters) => css`
    @media (min-width: ${screens.xl}) {
      ${css(...args)};
    }
  `,
  xxl: (...args: TCSSParameters) => css`
    @media (min-width: ${screens.xxl}) {
      ${css(...args)};
    }
  `,
};

export type TScreen = keyof typeof screens;

export type TValueWithMedia<
  T extends number | string | undefined = number | string,
> =
  | T
  | {
      default?: T;
      xs?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      xxl?: T;
    };

export default screens;

export type TMediaCSSProperties = {
  [key in `$${keyof CSSProperties}`]: TValueWithMedia<
    CSSProperties[keyof CSSProperties]
  >;
};
