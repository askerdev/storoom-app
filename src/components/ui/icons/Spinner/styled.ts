import styled, { keyframes } from "styled-components";

const spin = keyframes`
  100% {
    transform:rotate(360deg);
  }
`;

export const SpinnerStyledSvg = styled.svg`
  transform-origin: center;
  animation: ${spin} 2s linear infinite;
`;
