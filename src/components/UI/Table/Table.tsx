import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import CustomTableHead from "./CustomTableHead";
import CustomTableBody from "./CustomTableBody";
import { ProductRowModel } from "../../../Models/Product/ProductRowModel";
import { CategoryRowModel } from "../../../Models/Category/CategoryRowModel";
import { Button, Grid } from "@material-ui/core";
import List from "../List/List";
import useTableHook from "./useTableHook";
interface CustomizedTableProps {
  rows: ProductRowModel[] | CategoryRowModel[];
  columnNames: string[];
  tableWidth: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 600,
    },
    container: {
      margin: "auto",
      marginTop: "5%",
    },
    itemsNumber: {
      marginBottom: "5em",
    },
    control: {
      marginLeft: "60%",
      marginTop: "2em",
      width: "50%",
    },
    buttons: {
      display: "flex",
      marginLeft: "5%",
    },
    controlRow: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      color: "#33b2e5",
      fontWeight: 800,
    },
    button: {
      color: "white",
      fontWeight: 600,
      backgroundColor: "#33b2e5",
      margin: "2%",
      paddingRight: "0.8em",
      paddingLeft: "0.8em",
    },
    select: {
      marginBottom: "2%",
      color: "#33b2e5",
    },
  })
);
const CustomizedTable = (props: CustomizedTableProps) => {
  const {
    pageSize,
    changeOptionHandler,
    startIndexTablePage,
    disablePreviousButton,
    showPreviousPage,
    endIndexTablePage,
    disableNextButton,
    showNextPage,
  } = useTableHook(props);
  console.log("start" + startIndexTablePage);
  console.log("end" + endIndexTablePage);
  const classes = useStyles();
  return (
    <Grid style={{ width: props.tableWidth }} className={classes.container}>
      <Grid className={classes.select}>
        show{" "}
        <List
          options={[4, 10, 25, 50, 100]}
          value={pageSize}
          handleChangeOption={changeOptionHandler}
        />{" "}
        entries
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <CustomTableHead columnNames={props.columnNames} />
          <CustomTableBody
            columnNames={props.columnNames}
            rows={props.rows}
            pageSize={pageSize}
            startIndex={startIndexTablePage}
            endIndex={endIndexTablePage}
          />
        </Table>
      </TableContainer>

      <Grid
        style={{
          display: props.rows.length === 0 ? "none" : "flex",
          position: "relative",
        }}
        className={classes.control}
      >
        <Grid className={classes.controlRow}>
          show{" "}
          {endIndexTablePage > props.rows.length
            ? props.rows.length - startIndexTablePage
            : endIndexTablePage - startIndexTablePage}{" "}
          of {props.rows.length} entries
          <Grid className={classes.buttons}>
            <Button
              className={classes.button}
              disabled={disablePreviousButton}
              onClick={showPreviousPage}
            >
              Previous
            </Button>
            <Button
              className={classes.button}
              disabled={disableNextButton}
              onClick={showNextPage}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CustomizedTable;
