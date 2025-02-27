import styled, { css } from "styled-components";
import Typography from "@/components/ui/Typography";

export const InputErrorMessage = styled.label`
  color: ${(props) => props.theme.colors.notification};
`;

export const InputIconContainer = styled.div`
  position: absolute;
  top: 22px;
  right: 20px;
`;

export const InputPlaceholder = styled(Typography)`
  pointer-events: none;
  position: absolute;
  bottom: 20px;
  left: 20px;
  transition: all 0.15s;
  color: ${(props) => props.theme.colors.gray_100};
  font-size: 20px;
`;

export const StyledInput = styled.input<{
  $withIcon: boolean;
  $fullWidth?: boolean;
}>`
  border: 2px solid ${({ theme }) => theme.colors.gray_100};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  padding: 28px 20px 12px 20px;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  font-size: 20px;

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.black};
  }

  &:focus + ${InputPlaceholder} {
    transform: translateY(-22px);
    color: #969696;
    font-size: 10px;
  }

  &::placeholder {
    opacity: 0;
  }

  &:not(:placeholder-shown) + ${InputPlaceholder} {
    transform: translateY(-22px);
    color: ${(props) => props.theme.colors.gray_100};
    font-size: 10px;
  }

  ${(props) =>
    props.$withIcon &&
    css`
      padding-right: 48px;
    `}

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}
`;

export const InputContainer = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: max-content;

  &:hover {
    & * {
      color: ${(props) => props.theme.colors.gray_200};
    }
  }

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}
`;
