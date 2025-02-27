import styled from "styled-components";

export const UploadButtonContainer = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.gray_100};
  padding: 16px;
  width: max-content;
`;

export const UploadButtonInput = styled.input`
  display: none;
`;
