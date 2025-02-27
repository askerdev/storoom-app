import styled from "styled-components";
import { media } from "@/styles/screens";

export const StyledStudentNotesForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  box-shadow: 4px 4px 24px 0px #c7c7c740;
  padding: 12px;
  gap: 12px;

  ${media.lg`
    padding: 20px;
  `}
`;

export const StyledStudentNotesFormTitle = styled.input`
  font-size: 14px;
  line-height: 21.66px;
  color: ${(props) => props.theme.colors.gray_300};

  &:placeholder {
    color: ${(props) => props.theme.colors.gray_200};
  }

  ${media.lg`
    font-size: 20px;
    line-height: 30.94px;
  `}
`;

export const StyledStudentNotesFormBody = styled.textarea`
  font-size: 10px;
  line-height: 15.47px;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.gray_300};
  resize: none;

  &:placeholder {
    color: ${(props) => props.theme.colors.gray_100};
  }

  ${media.lg`
    font-size: 16px;
    line-height: 24.75px;
  `}
`;

export const StyledStudentNotesFormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid ${(props) => props.theme.colors.bg_gray};
  padding-top: 16px;
  padding-bottom: 20px;
`;

export const StyledStudentNotesFormSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  background-color: ${(props) => props.theme.colors.purple_200};
  border-radius: 50%;
`;
