import styled from "styled-components";
import {
  StyledPageContainer,
  StyledPageContainerWrapper,
} from "@/components/ui/PageContainer/styled";
import { media } from "@/styles/screens";

export const FooterWrapper = styled(StyledPageContainerWrapper)`
  background-color: ${(props) => props.theme.colors.bg_white};
  box-shadow: 0 -1px 10px 0 rgb(0 0 0 / 0.05);
  flex-grow: 0;
`;

export const FooterContainer = styled(StyledPageContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.sizes.footer_height};
  padding: 0;

  ${media["max-xl"]`
    padding: 0 20px;
  `}
`;

export const FooterCompanyName = styled.p`
  color: #8f8f8f;
  font-weight: 400;
  font-size: 16px;
`;

export const FooterNavigationContainer = styled.div`
  display: none;

  ${media.lg`
    display: flex;
    gap: 20px;
    align-items: center;
  `}
`;

export const FooterNavigationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #5e5e5e;
  font-weight: 400;
  font-size: 20px;
`;
