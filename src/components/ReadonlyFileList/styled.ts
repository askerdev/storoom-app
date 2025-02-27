import styled from "styled-components";
import { media } from "@/styles/screens";

export const StyledReadonlyFileList = styled.div`
  max-width: 384px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  ${media.lg`
    gap: 32px;
  `}
`;

export const StyledReadonlyFileListList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  ${media.lg`
    gap: 24px;
  `}
`;

export const StyledReadonlyFileListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > a {
    padding: 0;
    width: 58px;
    min-width: 58px;
    height: 42px;
    min-height: 42px;
  }
`;
