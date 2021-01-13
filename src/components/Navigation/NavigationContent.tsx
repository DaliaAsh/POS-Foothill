import React from "react";
import Categories from "../../containers/MainPage/MainPageContent/Categories/Categories";
import Edit from "../../containers/MainPage/MainPageContent/Edit";
import Expense from "../../containers/MainPage/MainPageContent/Expense";
import People from "../../containers/MainPage/MainPageContent/People";
import POS from "../../containers/MainPage/MainPageContent/POS/POS";
import Product from "../../containers/MainPage/MainPageContent/Product/Product";
import Reports from "../../containers/MainPage/MainPageContent/Reports";
import Sales from "../../containers/MainPage/MainPageContent/Sales";
import Setting from "../../containers/MainPage/MainPageContent/Setting";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { BreakPoints } from "../../Constants/BreakPoints/BreakPoints";
import {
  Grid,
  createStyles,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);
const NavigationContent = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <PrivateRoute path="/main/product" component={Product} />
      <PrivateRoute path="/main/pos" component={POS} />
      <PrivateRoute path="/main/categories" component={Categories} />
      <PrivateRoute path="/main/edit-category" component={Edit} />
    </Grid>
  );
};
export default NavigationContent;
