import styled from "styled-components";
import { media } from "@/styles/screens";

export const NotificationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 2px solid ${(props) => props.theme.colors.gray_300};
  background-color: ${(props) => props.theme.colors.gray_100};
  border-radius: 6px;
  padding: 12px;

  ${media.lg`
    padding: 30px;
  `}
`;
