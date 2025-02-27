import styled from "styled-components";
import { media } from "@/styles/screens";

export const CourseCardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.yellow_100};
  padding: 25px;
  flex-shrink: 0;
  width: 320px;
  height: 235px;
  scroll-snap-align: center;

  ${media.xl`
    padding: 30px;
    width: 370px;
    height: 281px;
  `}
`;

export const CourseCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${media.lg`
    gap: 10px;
  `}
`;

export const CourseCardTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.lg`
    font-size: 24px;
  `}
`;

export const CourseCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
`;

export const CourseCardPriceContainer = styled.div`
  position: relative;
`;

export const CourseCardPreviousPrice = styled.div`
  position: absolute;
  bottom: 100%;
  color: #8f8f8f;
  font-size: 10px;
  text-decoration: line-through;

  ${media.lg`
      font-size: 12px;
  `}
`;

export const CourseCardCurrentPrice = styled.div`
  font-weight: 500;
  font-size: 20px;

  ${media.lg`
      font-size: 24px;
  `}
`;

export const CourseCardIcon = styled.img`
  width: 90px;
  height: 90px;
`;
