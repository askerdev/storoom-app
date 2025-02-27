import { defaultPagination } from "@/constants/api";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "./styled";
import Skeleton from "../Skeleton";

const TableSkeleton = ({ columnCount = 6 }: { columnCount?: number }) => (
  <TableContainer $height={408}>
    <TableHead>
      <TableRow>
        {Array(columnCount)
          .fill(0)
          .map((_, index) => `head-${index}`)
          .map((key) => (
            <TableCell key={key}>
              <Skeleton $width={64} $height={16} $borderRadius={16} />
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {Array(defaultPagination.pageSize)
        .fill(0)
        .map((_, index) => `body-${index}`)
        .map((key) => (
          <TableRow key={key}>
            {Array(columnCount)
              .fill(0)
              .map((_, index) => `${key}-cell-${index}`)
              .map((cellKey) => (
                <TableCell key={cellKey}>
                  <Skeleton $width={128} $height={16} $borderRadius={16} />
                </TableCell>
              ))}
          </TableRow>
        ))}
    </TableBody>
  </TableContainer>
);

export default TableSkeleton;
