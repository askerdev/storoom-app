import styled from "styled-components";
import { TStyledIconProps } from "@/components/ui/icons/styled";

export type TBellIconContainerProps = TStyledIconProps & {
  $size?: number;
  $withNotification?: boolean;
};
export const BellIconContainer = styled.div<TBellIconContainerProps>`
  position: relative;

  &::before {
    display: ${(props) => (props.$withNotification ? "block" : "none")};
    position: absolute;
    top: 1px;
    right: 3px;
    z-index: 10;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.notification};
    width: ${(props) => (props.$size || 32) / 4}px;
    height: ${(props) => (props.$size || 32) / 4}px;
    content: "";
  }

  width: ${(props) => props.$size || 32}px;
  height: ${(props) => props.$size || 32}px;

  svg {
    position: relative;
    transition: color 0.125s;

    width: ${(props) => props.$size || 32}px;
    height: ${(props) => props.$size || 32}px;

    color: ${(props) => props.theme.colors[props.$color || "black"]};
  }
`;
