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
  caption: css`
    font-size: 10px;
    font-weight: 350;
  `,
};

export type TTypographyVariants = keyof typeof variants;

export type TStyledPProps = {
  $color?: TColor;
  $variant: TTypographyVariants;
  $fontWeight?: TValueWithMedia<CSSProperties["fontWeight"]>;
  $width?: TValueWithMedia<CSSProperties["width"]>;
  $textAlign?: TValueWithMedia<CSSProperties["textAlign"]>;
  $maxWidth?: TValueWithMedia<CSSProperties["maxWidth"]>;
  $nowrap?: boolean;
  $ellipsis?: boolean;
  $lineClamp?: TValueWithMedia<CSSProperties["lineClamp"]>;
};

export const StyledP = styled.p<TStyledPProps>`
  ${({ $variant }) => variants[$variant]}
  color: ${(props) =>
    props.$color ? props.theme.colors[props.$color] : "currentColor"};

  ${(props) => withMediaValue("font-weight", props.$fontWeight)}
  ${(props) => withMediaValue("width", props.$width)}
  ${(props) => withMediaValue("text-align", props.$textAlign)}
  ${(props) => withMediaValue("max-width", props.$maxWidth)}
  ${(props) => withMediaValue("-webkit-line-clamp", props.$lineClamp)}
  ${(props) =>
    !!props.$lineClamp &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}

  ${(props) =>
    props.$nowrap &&
    css`
      white-space: nowrap;
    `}

  ${(props) =>
    props.$ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
