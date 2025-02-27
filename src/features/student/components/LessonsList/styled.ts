import styled, { css } from "styled-components";

export const StyledLessonsList = styled.div`
  width: 100%;
  max-width: 384px;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const StyledLessonsListContainer = styled.div`
  height: 366px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: scroll;

  scrollbar-color: ${(props) => props.theme.colors.purple_200};

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.purple_200};
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.gray_25};
  }
`;

export const StyledLessonsListPrevButton = styled.button<{
  $disabled: boolean;
}>`
  padding: 16px;
  width: 52px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  & svg {
    color: ${(props) => props.theme.colors.purple_200};
  }

  ${(props) =>
    props.$disabled &&
    css`
      & svg {
        color: ${props.theme.colors.gray_100};
      }
      background-color: ${props.theme.colors.bg_gray};
    `}
`;

export const StyledLessonsListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 68px;

  & > a {
    padding: 16px;
    width: max-content;
    font-size: 16px;
  }
`;
