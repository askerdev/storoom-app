import { FC, PropsWithChildren } from "react";
import { StyledPageContainer, StyledPageContainerWrapper } from "./styled";

const PageContainer: FC<PropsWithChildren> = ({ children }) => (
  <StyledPageContainerWrapper>
    <StyledPageContainer>{children}</StyledPageContainer>
  </StyledPageContainerWrapper>
);

export default PageContainer;
