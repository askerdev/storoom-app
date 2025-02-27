import styled from "styled-components";
import { media } from "@/styles/screens";

export const StudentScheduleCalendarTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme.colors.purple_200};
`;

export const StudentScheduleCalendarItemsContainer = styled.div`
  display: flex;
  gap: 8px 16px;
  padding-bottom: 8px;
  overflow-x: auto;
  align-items: start;

  ${media.lg`
    gap: 20px 16px;
  `}
`;
