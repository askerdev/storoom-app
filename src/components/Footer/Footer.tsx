import Logo from "@/components/ui/Logo";
import {
  FooterCompanyName,
  FooterContainer,
  FooterNavigationContainer,
  FooterWrapper,
} from "@/components/Footer/styled";

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <Logo />
      <FooterCompanyName>© СТОРУМ, 2024</FooterCompanyName>

      <FooterNavigationContainer>
        {/* <FooterNavigationItem>О нас</FooterNavigationItem> */}
        {/* <FooterNavigationItem>Курсы</FooterNavigationItem> */}
        {/* <FooterNavigationItem>Поиск</FooterNavigationItem> */}
      </FooterNavigationContainer>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
