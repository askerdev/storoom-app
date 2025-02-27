import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
import { media } from "@/styles/screens";

export const StudentLessonContainer = styled.div`
  scroll-margin-top: 128px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.lg`
    gap: 32px;
  `}
`;

export const StyledStudentLesson = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const StyledStudentLessonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;

  ${media.lg`
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const StyledStudentLessonCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.lg`
    gap: 60px;
  `}
`;

export const StyledStudentLessonDescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${media.lg`
    gap: 12px;
  `}
`;

export const StyledStudentLessonHeader = styled.div`
  display: flex;
  gap: 12px;
  flex-grow: 1;
  align-items: center;

  ${media.lg`
    gap: 24px;
  `}
`;

export const StyledStudentLessonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  ${media.lg`
    flex-direction: row;
    gap: 24px;
    justify-content: space-between;
  `}
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  background-color: ${(props) => props.theme.colors.gray_25};
  aspect-ratio: 16 / 9;
  max-width: 793px !important;
  width: 100% !important;
  height: auto !important;
`;
