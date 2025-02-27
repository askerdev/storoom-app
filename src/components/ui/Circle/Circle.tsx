import styled from "styled-components";

const Circle = styled.i`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.error};
`;

export default Circle;
