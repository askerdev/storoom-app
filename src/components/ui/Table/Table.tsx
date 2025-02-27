import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ComponentProps, Dispatch, SetStateAction } from "react";
import Pagination from "@/components/ui/Pagination";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableWrapper,
} from "./styled";
import TableSkeleton from "./TableSkeleton";
import Typography from "../Typography";
import { IPagination } from "@/types/units.api";
import { IResPagination } from "@/types/response.api";
import PaginationSkeleton from "@/components/ui/Pagination/PaginationSkeleton";

type TTableProps<TData, TValue> = {
  data?: { list: TData[]; pagination: IResPagination };
  columns: ColumnDef<TData, TValue>[];
  pagination: IPagination;
  setPagination: Dispatch<SetStateAction<IPagination>>;
  isLoading?: boolean;
} & Pick<ComponentProps<typeof TableContainer>, "$borderRadius">;

const Table = <TData, TValue>({
  columns,
  data,
  pagination,
  setPagination,
  isLoading,
  $borderRadius,
}: TTableProps<TData, TValue>) => {
  const table = useReactTable<TData>({
    data: data?.list || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    onPaginationChange: (updaterOrValue) => {
      if (typeof updaterOrValue === "function") {
        setPagination((prev) => {
          const newValue = updaterOrValue({
            pageIndex: prev.page,
            pageSize: prev.pageSize,
          });
          return {
            page: newValue.pageIndex,
            pageSize: newValue.pageSize,
          };
        });
      } else {
        setPagination({
          page: updaterOrValue.pageIndex,
          pageSize: updaterOrValue.pageSize,
        });
      }
    },
    pageCount: data?.pagination?.total || 0,
    state: {
      pagination: {
        pageIndex: pagination.page,
        pageSize: pagination.pageSize,
      },
    },
  });

  if (isLoading) {
    return (
      <TableWrapper>
        <TableSkeleton columnCount={columns.length} />
        <PaginationSkeleton />
      </TableWrapper>
    );
  }

  return (
    <TableWrapper>
      <TableContainer $borderRadius={$borderRadius}>
        <TableHead>
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id}>
              {group.headers.map((header) => (
                <TableCell key={header.id}>
                  <Typography $variant="text1" $color="gray_200">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
      <Pagination
        pageIndex={table.getState().pagination.pageIndex}
        totalPages={table.getPageCount()}
        nextPage={table.nextPage}
        previousPage={table.previousPage}
        canPreviousPage={table.getCanPreviousPage()}
        canNextPage={table.getCanNextPage()}
        setPageIndex={table.setPageIndex}
      />
    </TableWrapper>
  );
};

export default Table;
