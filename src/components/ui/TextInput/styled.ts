import styled, { css, CSSProperties } from "styled-components";
import { TColor } from "@/styles/colors";
import { media, TValueWithMedia } from "@/styles/screens";
import { withMediaValue } from "@/styles/utils";

const variants = {
  h1: css`
    font-weight: 700;
    font-size: 30px;

    ${media.lg`
      font-size: 60px;
    `}
  `,
  h2: css`
    font-weight: 700;
    font-size: 30px;

    ${media.lg`
      font-size: 48px;
    `}
  `,
  h3: css`
    font-weight: 700;
    font-size: 30px;

    ${media.lg`
      font-size: 36px;
    `}
  `,
  button: css`
    font-weight: 500;
    font-size: 24px;
  `,
  text1: css`
    font-size: 17px;
    font-weight: 400;

    ${media.lg`
      font-size: 20px;
    `}
  `,
  text2: css`
    font-size: 14px;
    font-weight: 400;

    ${media.lg`
      font-size: 16px;
    `};
  `,
};

type TTypographyVariants = keyof typeof variants;

export const TextInputStyledInput = styled.input<{
  $borderColor?: TColor;
  $withBottomLine?: boolean;
  $textVariant: TTypographyVariants;
  $width?: TValueWithMedia<CSSProperties["width"]>;
  $maxWidth?: TValueWithMedia<CSSProperties["maxWidth"]>;
  $padding?: TValueWithMedia<CSSProperties["padding"]>;
}>`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  &[type="number"] {
    -moz-appearance: textfield;
  }

  ${(props) => withMediaValue("width", props.$width)}
  ${(props) => withMediaValue("max-width", props.$maxWidth)}
  ${(props) => withMediaValue("padding", props.$padding)}
  ${(props) => variants[props.$textVariant]}

  ${(props) =>
    props.$withBottomLine &&
    css`
      border-bottom: 2px solid
        ${props.theme.colors[props.$borderColor || "black"]};
    `}
`;
