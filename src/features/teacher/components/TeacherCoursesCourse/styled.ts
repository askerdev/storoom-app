import styled, { css } from "styled-components";

export const TeacherCoursesCourseLessonContainer = styled.div<{
  $isDragging: boolean;
}>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  opacity: ${(props) => (props.$isDragging ? 0 : 1)};
  ${(props) =>
    props.$isDragging &&
    css`
      &:hover {
        cursor: grab;
      }
    `}
`;
