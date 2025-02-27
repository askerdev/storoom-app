import styled, { css } from "styled-components";
import Typography from "@/components/ui/Typography";

export const CheckboxContainer = styled.div`
  display: flex;
  position: relative;
  align-items: start;
  gap: 4px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.gray_200};

    & p {
      transition: color 0.1s;
      color: ${(props) => props.theme.colors.gray_200};
    }
  }
`;

export const FakeCheckboxContainer = styled.div<{ $checked: boolean }>`
  transition: all 0.1s;
  display: flex;
  justify-content: center;
  align-items: start;
  border: 1px solid ${(props) => props.theme.colors.gray_100};
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.bg_white};
  width: 14px;
  height: 14px;

  ${(props) =>
    props.$checked &&
    css`
      background-color: ${props.theme.colors.purple_200};
    `}

  ${(props) =>
    !props.$checked &&
    css`
      & > div {
        visibility: hidden;
      }
    `}
`;

export const StyledCheckboxInput = styled.input`
  position: absolute;
  inset: 0;
`;

export const CheckboxLabel = styled(Typography)<{ $checked: boolean }>`
  width: 100%;
  font-size: 10px;
  color: ${(props) => props.theme.colors.gray_200};

  ${(props) =>
    props.$checked &&
    css`
      color: ${props.theme.colors.purple_200};
    `}
`;
