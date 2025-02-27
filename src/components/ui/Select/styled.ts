import styled, { css } from "styled-components";
import Button from "@/components/ui/Button";
import { media } from "@/styles/screens";
import { TColor } from "@/styles/colors";

export const OptionItem = styled.button<{ $active: boolean }>`
  transition: background-color 0.25s;
  padding: 8px 16px;
  color: ${(props) => props.theme.colors.purple_100};

  &:disabled:hover {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.purple_100};
    color: ${(props) => props.theme.colors.bg_white};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.gray_25};
    color: ${(props) => props.theme.colors.purple_200};
  }

  ${(props) =>
    props.$active &&
    css`
      background-color: ${props.theme.colors.purple_100};
      color: ${props.theme.colors.bg_white};
    `}
`;

export const OptionsScrollContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  max-height: 103px;
  overflow-y: auto;
`;

export const OptionsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 96%;
  flex-direction: column;
  z-index: 10;
  transition: all 0.125s;

  border: 2px solid ${(props) => props.theme.colors.purple_100};
  border-top: 0;
  border-radius: 0 0 6px 6px;
  background-color: ${(props) => props.theme.colors.bg_white};
  width: 100%;
  color: ${(props) => props.theme.colors.purple_100};
`;

export const SelectTrigger = styled(Button)<{
  $active: boolean;
  $borderColor?: TColor;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  border-color: ${(props) =>
    props.theme.colors[props.$borderColor ?? "purple_100"]};
  padding: 8px 4px;
  ${media.lg`
    padding: 13px 20px;
  `}
  width: max-content;
  color: ${(props) => props.theme.colors[props.$borderColor ?? "purple_100"]};

  &:hover {
    border-color: ${(props) =>
      props.theme.colors[props.$borderColor ?? "purple_100"]};
  }

  border-bottom-color: ${(props) =>
    props.$active
      ? "transparent"
      : props.theme.colors[props.$borderColor ?? "purple_100"]};
  border-bottom-left-radius: ${(props) => (props.$active ? 0 : 6)}px;
  border-bottom-right-radius: ${(props) => (props.$active ? 0 : 6)}px;
`;

export const SelectContainer = styled.div`
  position: relative;
  width: max-content;
  height: max-content;
`;
