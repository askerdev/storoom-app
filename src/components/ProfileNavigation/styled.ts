import styled from "styled-components";
import { media } from "@/styles/screens";

export { default } from "./ProfileNavigation";

export const ProfileNavigationContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.lg`
    gap: 40px;
  `}
`;
