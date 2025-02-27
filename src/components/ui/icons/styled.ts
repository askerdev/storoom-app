import styled, { CSSProperties } from "styled-components";
import { TColor } from "@/styles/colors";
import { TValueWithMedia } from "@/styles/screens";
import { withMediaValue } from "@/styles/utils";

export type TStyledIconProps = {
  $size?: TValueWithMedia<CSSProperties["width"]>;
  $color?: TColor;
  $rotateDeg?: number;
};

export const StyledIcon = styled.span<TStyledIconProps>`
  display: block;
  transition: all 0.125s;

  ${(props) => withMediaValue("width", props.$size, 32)}
  ${(props) => withMediaValue("height", props.$size, 32)}

  svg {
    ${(props) => withMediaValue("width", props.$size, 32)}
    ${(props) => withMediaValue("height", props.$size, 32)}
  }

  color: ${(props) =>
    props.$color ? props.theme.colors[props.$color] : "currentColor"};

  transform: rotate(${(props) => props.$rotateDeg || 0}deg);
`;
