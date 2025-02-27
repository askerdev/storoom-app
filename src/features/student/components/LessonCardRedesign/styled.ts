import styled from "styled-components";
import { media } from "@/styles/screens";
import Image from "@/components/Image";

export const StyledLessonCardRedesign = styled.div`
  width: 320px;
  height: 431px;
  min-width: 320px;
  min-height: 431px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 4px 4px 24px 0px #c7c7c740;

  ${media.lg`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 24px;
    height: 194px;
    min-height: 194px;
    padding: 8px;
    align-items: center;
  `}
`;

export const StyledLessonCardRedesignImg = styled(Image)`
  width: 100%;
  height: 40%;
  object-fit: cover;
  object-position: center;

  ${media.lg`
    border-radius: 10px;
    min-width: 239px;
    min-height: 178px;
    width: 239px;
    height: 178px;
  `}
`;

export const StyledLessonCardRedesignContent = styled.div`
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
		width: 100%;
    flex-direction: row;
    gap: 30px;
    padding: 20px 20px 10px;

    & > a {
      min-width: 344px;
      width: 344px;
    }
  `}
`;

export const StyledLessonCardRedesignTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledLessonCardRedesignLessonWithIconContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
