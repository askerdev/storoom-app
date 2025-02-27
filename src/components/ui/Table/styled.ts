import styled, { CSSProperties } from "styled-components";
import Flex from "@/components/ui/Flex";
import { media, TValueWithMedia } from "@/styles/screens";
import { withMediaValue } from "@/styles/utils";
import TableCellWrapper from "./TableCellWrapper";

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & ${Flex} {
    align-self: center;
  }

  ${media.lg`
    gap: 40px;
  `}
`;

export const TableContainer = styled.table<{
  $borderRadius?: TValueWithMedia<CSSProperties["borderRadius"]>;
  $height?: TValueWithMedia<CSSProperties["height"]>;
}>`
  min-width: 100%;
  width: max-content;
  border: 1px solid ${(props) => props.theme.colors.purple_100};
  background-color: ${(props) => props.theme.colors.bg_gray};
  padding: 20px 30px;

  ${(props) => withMediaValue("border-radius", props.$borderRadius, 6)}
  ${(props) => withMediaValue("height", props.$height)}
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableCell = styled(TableCellWrapper)`
  padding-right: 24px;
  padding-bottom: 16px;
`;
