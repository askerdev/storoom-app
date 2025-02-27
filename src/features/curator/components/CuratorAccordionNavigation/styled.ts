import styled, { css } from "styled-components";
import { media } from "@/styles/screens";
import { TColor } from "@/styles/colors";

export const CuratorAccordionNavigationItemContainer = styled.div<{
  $open: boolean;
}>`
  width: 100%;
  ${(props) =>
    props.$open &&
    css`
      background-color: ${props.theme.colors.yellow_200};
      border-radius: 6px;
    `};
`;

export const CuratorAccordionNavigationItemContent = styled.div<{
  $height: number;
  $open: boolean;
}>`
  transition: height 0.3s cubic-bezier(0.32, 0.72, 0, 1);
  height: ${(props) => props.$height}px;
  overflow: hidden;
  border-radius: 6px;
  background-color: white;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.$open &&
    css`
      margin: 2px;
      padding: 16px 4px;
    `}
`;

export const CuratorAccordionNavigationItemTrigger = styled.button<{
  $open: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 6px;
  padding: 20px 0;

  color: ${(props) => props.theme.colors[props.$open ? "white" : "gray_100"]};

  border: 2px solid
    ${(props) => props.theme.colors[props.$open ? "yellow_200" : "gray_100"]};

  background-color: ${(props) =>
    props.$open ? props.theme.colors.yellow_200 : "transparent"};
`;

export const CuratorAccordionNavigationContainer = styled.div<{
  $height: number | string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  ${(props) => media.lg`
    width: 20%;
    min-height: ${typeof props.$height === "number" ? `${props.$height}px` : props.$height};
  `}
`;

export const CuratorAccordionNavigationLessonContainer = styled.div`
  width: 100%;
  ${media.lg`
    position: absolute;
    right: 0;
    top: 0;
    width: 70%;
  `}
`;

export const CuratorAccordionNavigationLessonLink = styled.a`
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  align-items: center;
  transition: all 0.15s;

  & div {
    max-width: 70%;
  }

  & span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.gray_25};
  }
`;

export const CuratorAccordionNavigationLessonHomeworkStatus = styled.div<{
  $color: TColor;
}>`
  width: 10px;
  height: 10px;
  min-width: 10px;
  min-height: 10px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors[props.$color]};
`;
