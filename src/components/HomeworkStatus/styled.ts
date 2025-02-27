import styled from "styled-components";
import { HomeworkStatus } from "@/constants/enums";

export const HomeworkStatusContainer = styled.div<{ $status: HomeworkStatus }>`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors[props.$status]};
  border-radius: 3px;
`;
