import styled from "styled-components";
import { media } from "@/styles/screens";

export const StyledStudentNotesItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  box-shadow: 4px 4px 24px 0px #c7c7c740;
  padding: 12px;
  gap: 12px;

  ${media.lg`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4px;
    padding: 20px;
  `}
`;

export const StyledStudentNotesItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  ${media.lg`
    gap: 12px;
  `}
`;

export const StyledStudentNotesItemRemoveButton = styled.button``;
