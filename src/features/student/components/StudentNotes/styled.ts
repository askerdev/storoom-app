import styled from "styled-components";
import { media } from "@/styles/screens";
import { InputContainer } from "@/components/ui/Input/styled";

export const StyledStudentNotes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 690px;
  width: 100%;
`;

export const StyledStudentNotesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & ${InputContainer} {
    display: none;
  }

  ${media.lg`
    & ${InputContainer} {
      display: flex;
    }
  `}
`;

export const StyledStudentNotesBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.lg`
    gap: 24px;
  `}
`;
