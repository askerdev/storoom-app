import styled from "styled-components";

export const MultiSelectWrapper = styled.div`
  position: relative;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MultiSelectContainer = styled.div`
  position: absolute;
  border-radius: 6px;
  padding: 12px 8px;
  background-color: ${(props) => props.theme.colors.white};
  top: calc(100% + 16px);
  left: 0;
  width: 144px;
  border: 1px solid ${(props) => props.theme.colors.purple_200};
  z-index: 1;
`;

export const MultiSelectScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 122px;
  gap: 8px;
  overflow-y: scroll;
`;

export const MultiSelectListContainer = styled.div`
  max-width: 360px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const MultiSelectEntryButton = styled.div`
  border-radius: 3px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.gray_25};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;
