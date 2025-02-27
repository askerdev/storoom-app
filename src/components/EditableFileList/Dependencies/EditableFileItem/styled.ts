import styled from "styled-components";
import { media } from "@/styles/screens";

export const StyledEditableFileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a,
  & > button {
    width: 30px;
    min-width: 30px;
    height: 30px;
    min-height: 30px;

    ${media.lg`
      width: 24px;
      min-width: 24px;
      height: 24px;
      min-height: 24px;
    `}
  }
`;

export const StyledEditableFileItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${media.lg`
    gap: 12px;
  `}
`;
