import { ComponentProps } from "react";

const TableCellWrapper = (props: ComponentProps<"div">) => (
  <td>
    <div {...props} />
  </td>
);

export default TableCellWrapper;
