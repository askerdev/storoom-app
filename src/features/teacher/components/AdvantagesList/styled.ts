import styled from "styled-components";

export const AdvantagesListContainer = styled.div`
  max-width: 360px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const AdvantagesListAdvantage = styled.div`
  border-radius: 3px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.gray_25};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;
