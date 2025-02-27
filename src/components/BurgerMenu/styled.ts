import styled from "styled-components";
import { media } from "@/styles/screens";

export const BurgerMenuHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.sizes.header_height};
`;

export const BurgerMenuContainer = styled.div<{ $active: boolean }>`
  position: fixed;
  top: 0;
  z-index: 1;

  transition: all 0.5s cubic-bezier(0.32, 0.72, 0, 1);
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: ${(props) => props.theme.colors.bg_white};
  padding: 0 25px;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  transform: translate3d(${(props) => (props.$active ? 0 : "-100%")}, 0, 0);

  ${media.lg`
    display: none;
  `}
`;

export const BurgerMenuTrigger = styled.button`
  ${media.lg`
    display: none;
  `}
`;
