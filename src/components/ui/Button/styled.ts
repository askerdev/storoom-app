import styled, { css, CSSProperties } from "styled-components";
import { withMediaValue } from "@/styles/utils";
import { media, TValueWithMedia } from "@/styles/screens";

const buttonVariants = {
  primary: css`
    border: 2px solid transparent;
    background-color: ${(props) => props.theme.colors.purple_200};
    color: ${(props) => props.theme.colors.bg_white};

    &:hover {
      background-color: ${(props) => props.theme.colors.purple_100};
    }
  `,
  error: css`
    border: 2px solid transparent;
    background-color: ${(props) => props.theme.colors.error};
    color: ${(props) => props.theme.colors.bg_white};

    &:hover {
      background-color: ${(props) => props.theme.colors.purple_100};
    }
  `,
  outline: css`
    border: 2px solid ${(props) => props.theme.colors.purple_200};
    color: ${(props) => props.theme.colors.purple_200};

    &:hover {
      border: 2px solid ${(props) => props.theme.colors.purple_100};
      color: ${(props) => props.theme.colors.purple_100};
    }
  `,
  dottedLink: css`
    all: unset;
    width: max-content;
    color: ${(props) => props.theme.colors.purple_200};
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px dashed ${(props) => props.theme.colors.purple_200};

    &:hover {
      cursor: pointer;
    }

    ${media.lg`
      font-size: 16px;
    `};
  `,
};

export type TButtonVariants = keyof typeof buttonVariants;

export type TStyledButtonProps = {
  $variant: TButtonVariants;
  $justifyContent?: "between" | "center" | "start" | "end";
  $alignItems?: "start" | "center" | "end";
  $gap?: TValueWithMedia<CSSProperties["gap"]>;
  $fullWidth?: boolean;
  $display?: TValueWithMedia<CSSProperties["display"]>;
  $padding?: TValueWithMedia<CSSProperties["padding"]>;
  $height?: TValueWithMedia<CSSProperties["height"]>;
  $width?: TValueWithMedia<CSSProperties["width"]>;
};

export const StyledButton = styled.button<TStyledButtonProps>`
  all: unset;
  width: max-content;
  display: flex;
  ${(props) =>
    withMediaValue("justify-content", props.$justifyContent, "center")}
  ${(props) => withMediaValue("align-items", props.$alignItems, "center")}
  ${(props) => withMediaValue("gap", props.$gap, 10)}
  ${(props) => withMediaValue("display", props.$display)}
  ${(props) => withMediaValue("height", props.$height)}
  ${(props) => withMediaValue("width", props.$width)}

  transition: all 0.125s;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 16px 64px;
  font-size: 24px;
  font-weight: 500;

  ${({ $variant }) => buttonVariants[$variant]}

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) => withMediaValue("padding", props.$padding)}

  &:disabled {
    background-color: ${(props) => props.theme.colors.purple_100};
  }
`;
