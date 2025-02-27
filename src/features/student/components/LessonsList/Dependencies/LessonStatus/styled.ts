import styled, { css } from "styled-components";
import { HomeworkStatus } from "@/constants/enums";

export const StyledLessonStatusCircle = styled.div<{
  $status?: HomeworkStatus;
}>`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  transition: 0.25s;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    if (props.$status) {
      return css`
        background-color: ${props.theme.colors[props.$status]};
      `;
    }
    return css`
      border: 1px solid ${props.theme.colors.gray_100};
      background-color: transparent;

      &:hover {
        background-color: ${props.theme.colors.purple_200};
      }
    `;
  }}};
`;
