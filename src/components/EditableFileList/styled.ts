import styled from "styled-components";
import { media } from "@/styles/screens";

export const StyledEditableFileList = styled.div`
  max-width: 384px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & label:first-child {
    width: 100%;
  }
  & input {
    display: none;
  }

  ${media.lg`
    gap: 32px;
  `}
`;

export const StyledEditableFileListUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledEditableFileListList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.lg`
    gap: 24px;
  `}
`;

export const StyledEditableFileListItem = styled.div`
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
