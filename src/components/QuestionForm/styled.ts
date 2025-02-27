import styled from "styled-components";
import { media } from "@/styles/screens";

export const QuestionFormCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${media.lg`
    gap: 40px;
  `}
`;

export const QuestionStyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

  ${media.lg`
    gap: 30px;
  `}
`;

export const QuestionFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const QuestionFormNoAccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  span {
    color: ${(props) => props.theme.colors.gray_100};
  }
`;
