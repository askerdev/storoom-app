import styled from "styled-components";
import { media } from "@/styles/screens";

export const StyledCourseCardRedesignTeacher = styled.div`
  position: absolute;
  bottom: 10px;
  left: 16px;
  display: flex;
  opacity: 0;
  align-items: center;
  gap: 10px;
  padding: 4px 10px;
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(6px);
  right: 16px;
  transition: 0.25s;
  width: max-content;

  & > img {
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
`;

export const StyledCourseCardRedesign = styled.div`
  width: 320px;
  height: 394px;
  min-width: 320px;
  min-height: 394px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 4px 4px 24px 0px #c7c7c740;

  &:hover ${StyledCourseCardRedesignTeacher} {
    opacity: 1;
  }

  ${media.lg`
    width: 384px;
    height: 451px;
    min-width: 384px;
    min-height: 451px;
  `}
`;

export const StyledCourseCardRedesignImg = styled.div`
  position: relative;
  width: 100%;
  height: 50%;

  & > img {
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledCourseCardRedesignContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 16px 10px;

  & > a {
    padding: 16px 0px;
    width: 100%;
    height: 71px;
  }

  ${media.lg`
    gap: 30px;
    padding: 20px 20px 10px;
  `}
`;

export const StyledCourseCardRedesignTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledCourseCardRedesignLessonCountContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
