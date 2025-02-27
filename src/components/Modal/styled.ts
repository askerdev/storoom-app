import styled from "styled-components";
import { media } from "@/styles/screens";

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const ModalCard = styled.div`
  position: relative;
  padding: 20px;
  max-width: 894px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 90dvh;
  z-index: 1;
  width: 100%;
  height: 100%;

  ${media.lg`
    padding: 40px;
    max-height: 80dvh;
  `}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  width: 100%;
`;
