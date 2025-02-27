import styled from "styled-components";

export const StyledPhotoFile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & input {
    display: none;
  }

  & img {
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const StyledPhotoFileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
