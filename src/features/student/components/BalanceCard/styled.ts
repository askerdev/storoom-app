import styled from "styled-components";

export const BalanceCardContainer = styled.div`
  width: 315px;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;

  background-color: ${(props) => props.theme.colors.yellow_100};
  border-radius: 10px;
`;

export const BalanceCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
