import styled from "styled-components";
import { media } from "@/styles/screens";

export const CoursesListCoursesCardsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  width: 100%;
  gap: 10px;
  height: 235px;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.lg`
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
    gap: 24px;
  `}
`;
