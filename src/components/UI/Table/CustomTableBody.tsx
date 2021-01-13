import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { ProductRowModel } from "../../../Models/Product/ProductRowModel";
import { CategoryRowModel } from "../../../Models/Category/CategoryRowModel";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableCell: {
      border: "0.05em solid #ccc",
    },
    tableRow: {
      "&:nth-of-type(odd)": {
        backgroundColor: "#eeee",
      },
    },
  })
);
interface CustomTableBodyProps {
  rows: any;
  columnNames: string[];
  pageSize: number;
  startIndex: number;
  endIndex: number;
}
const isProductRowModel = (item: any): boolean => {
  if ("productId" in item) {
    return true;
  } else {
    return false;
  }
};
const isProductRowModelArray = (array: any) => {
  return Array.isArray(array) && array.every(isProductRowModel);
};
const CustomTableBody = (props: CustomTableBodyProps) => {
  const classes = useStyles();
  console.log(isProductRowModelArray(props.rows));
  return (
    <TableBody>
      {isProductRowModelArray(props.rows)
        ? props.rows
            .slice(props.startIndex, props.endIndex)
            .map((row: ProductRowModel) => (
              <TableRow key={row.name} className={classes.tableRow}>
                {props.columnNames.map((columnName) => {
                  return (
                    <TableCell
                      className={classes.tableCell}
                      align="left"
                      key={`${row.productId}${columnName}`}
                    >
                      {row[columnName]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
        : props.rows
            .slice(props.startIndex, props.endIndex)
            .map((row: CategoryRowModel) => (
              <TableRow key={row.categoryName} className={classes.tableRow}>
                {props.columnNames.map((columnName) => {
                  return (
                    <TableCell
                      align="left"
                      key={`${row.categoryId}${columnName}`}
                      className={classes.tableCell}
                    >
                      {row[columnName]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
    </TableBody>
  );
};
export default CustomTableBody;
