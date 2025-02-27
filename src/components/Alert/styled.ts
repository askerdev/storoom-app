import styled from "styled-components";
import { TColor } from "@/styles/colors";

export const AlertStyledButton = styled.button<{
  $color?: TColor;
}>`
  padding: 16px 32px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.$color ? props.theme.colors[props.$color] : "transparent"};
`;

export const AlertContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const AlertFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 24px;
`;

export const AlertConfirmButton = styled.button`
  padding: 16px 64px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.notification};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
`;
