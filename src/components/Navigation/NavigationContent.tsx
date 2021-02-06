import React from "react";
import Categories from "../../containers/MainPage/MainPageContent/Categories/Categories";
import Edit from "../../containers/MainPage/MainPageContent/Edit";
import Expense from "../../containers/MainPage/MainPageContent/Expense";
import People from "../../containers/MainPage/MainPageContent/People";
import POS from "../../containers/MainPage/MainPageContent/POS/POS";
import Product from "../../containers/MainPage/MainPageContent/Product/Product";
import Reports from "../../containers/MainPage/MainPageContent/Reports";
import Sales from "../../containers/MainPage/MainPageContent/Sales";
import Setting from "../../containers/MainPage/MainPageContent/Setting/Setting";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { BreakPoints } from "../../Constants/BreakPoints/BreakPoints";
import { Switch } from "react-router-dom";
import {
  Grid,
  createStyles,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import SettingsForm from "../Settings/SettingsForm/SettingsForm";
import Users from "../Settings/Users/Users";
import Stores from "../Settings/Stores/Stores";
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
      <Switch>
        <PrivateRoute path="/main/product" component={Product} exact />
        <PrivateRoute path="/main/pos" component={POS} exact />
        <PrivateRoute path="/main/categories" component={Categories} exact />
        <PrivateRoute path="/main/edit-category" component={Edit} exact />
        <PrivateRoute path="/main/setting" component={Setting} exact />
        <PrivateRoute
          path="/main/setting/settings"
          component={SettingsForm}
          exact
        />
        <PrivateRoute path="/main/setting/users" component={Users} exact />
        <PrivateRoute path="/main/setting/stores" component={Stores} exact />
      </Switch>
    </Grid>
  );
};
export default NavigationContent;
