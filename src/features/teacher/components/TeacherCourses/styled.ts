import styled from "styled-components";
import { media } from "@/styles/screens";

export const TeacherCoursesOutlet = styled.div`
  width: 70%;
  display: none;

  ${media.lg`
    display: block;
  `}
`;

export const TeacherCoursesNavigationContainer = styled.div`
  width: 100%;

  ${media.lg`
    width: 20%;
  `}
`;

export const TeacherCoursesNavigationLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TeacherCoursesNavigationOutlet = styled.div`
  width: 100%;
  ${media.lg`
    display: none;
  `}
`;

export const TeacherCoursesNavigationLink = styled.button<{
  $active: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 6px;
  padding: 20px 0;

  color: ${(props) => props.theme.colors[props.$active ? "white" : "gray_100"]};

  border: 2px solid
    ${(props) => props.theme.colors[props.$active ? "yellow_200" : "gray_100"]};

  background-color: ${(props) =>
    props.$active ? props.theme.colors.yellow_200 : "transparent"};
`;
