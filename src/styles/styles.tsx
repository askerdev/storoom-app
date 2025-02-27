import { ThemeProvider } from "styled-components";
import { PropsWithChildren } from "react";
import { theme } from "./theme";
import { GlobalStyle } from "./global";

const Styles = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Styles;
