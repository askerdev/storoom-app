import styled from "styled-components";
import { media } from "@/styles/screens";

export const BuyCourseFormCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 60px;

  @include media-lg {
    gap: 40px;
  }
`;

export const BuyCourseFormInputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const BuyCourseFormNoAccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  span {
    color: ${(props) => props.theme.colors.gray_100};
  }
`;

export const BuyCourseFormForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  ${media.lg`
    gap: 30px;
  `}
`;

export const BuyCourseFormAdvantagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
  list-style: none;
`;

export const BuyCourseFormAdvantage = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
  color: ${(props) => props.theme.colors.gray_200};

  &::before {
    display: block;
    position: relative;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.purple_200};
    width: 12px;
    height: 12px;
    content: "";
  }
`;
