import styled from "styled-components";
import { media } from "@/styles/screens";

export const StyledStudentEducationCourse = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  ${media.lg`
    gap: 36px;
  `}
`;

export const StyledStudentEducationCourseHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  ${media.lg`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const StyledStudentEducationCourseBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;
