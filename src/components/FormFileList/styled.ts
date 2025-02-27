import styled from "styled-components";
import { media } from "@/styles/screens";

export const StyledFormFileList = styled.div`
  max-width: 384px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > button:first-child {
    width: 100%;

    & > input {
      display: none;
    }
  }

  ${media.lg`
    gap: 32px;
  `}
`;

export const StyledFormFileListList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.lg`
    gap: 24px;
  `}
`;

export const StyledFormFileListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    padding: 0;
    width: 58px;
    min-width: 58px;
    height: 42px;
    min-height: 42px;
  }
`;
