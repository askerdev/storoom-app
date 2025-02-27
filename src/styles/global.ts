import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li[data-sonner-toast] {
    padding: 16px;
  }

  a,
  button,
  input {
    all: unset;
    box-sizing: border-box;
  }

  a, button {
    cursor: pointer;
  }

  html, textarea {
    font-family: Cygre, sans-serif, serif, monospace;
  }

  body {
    min-height: 100dvh;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.gray_100};

    &:hover {
      background-color: ${(props) => props.theme.colors.gray_200};
    }
  }
`;
