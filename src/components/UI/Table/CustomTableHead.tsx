import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { styled } from "@material-ui/core";
interface CustomTableHeadProps {
  columnNames: string[];
}
const CustomTableHead = (props: CustomTableHeadProps) => {
  const StyledTableCell = styled(TableCell)({
    border: "0.05em solid #ccc",
    color: "#555",
  });
  return (
    <TableHead>
      <TableRow>
        {props.columnNames.map((columnName: string) => {
          return (
            <StyledTableCell align="left" key={columnName}>
              {columnName.charAt(0).toUpperCase() + columnName.slice(1)}
            </StyledTableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
export default CustomTableHead;
