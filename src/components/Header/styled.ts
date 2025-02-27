import styled from "styled-components";
import Logo from "@/components/ui/Logo";
import {
  StyledPageContainer,
  StyledPageContainerWrapper,
} from "@/components/ui/PageContainer/styled";
import { media } from "@/styles/screens";

export const HeaderLogo = styled(Logo)`
  position: absolute;
  top: 29px;
  left: 50%;
  transform: translateX(-50%);
`;

export const HeaderWrapper = styled(StyledPageContainerWrapper)`
  background-color: ${(props) => props.theme.colors.bg_white};
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 0.05);
  flex-grow: 0;
`;

export const HeaderContainer = styled(StyledPageContainer)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.sizes.header_height};
  padding: 0;

  ${media["max-xl"]`
    padding: 0 25px;
  `}
`;

export const HeaderBurgerMenuNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`;

export const HeaderNavigationContainer = styled.div`
  display: none;

  ${media.lg`
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: left;
 `}
`;

export const HeaderNavigationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & p {
    font-size: 20px;
  }
`;

export const ProfileLink = styled.div`
  ${media.lg`
    display: none;
  `}
`;
