import styled from "styled-components";

export const CalendarCardContainer = styled.div`
  width: 149px;
  height: 180px;
  background-color: ${(props) => props.theme.colors.yellow_100};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;
