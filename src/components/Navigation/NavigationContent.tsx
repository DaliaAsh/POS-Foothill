import React from "react";
import Categories from "../../containers/MainPage/MainPageContent/Categories/Categories";
import Edit from "../../containers/MainPage/MainPageContent/Edit";
import Checkouts from "../../containers/MainPage/MainPageContent/Checkouts";
import People from "../../containers/MainPage/MainPageContent/People";
import POS from "../../containers/MainPage/MainPageContent/POS/POS";
import Product from "../../containers/MainPage/MainPageContent/Product/Product";
import Reports from "../../containers/MainPage/MainPageContent/Reports/Reports";
import Sales from "../../containers/MainPage/MainPageContent/Sales";
import Setting from "../../containers/MainPage/MainPageContent/Setting/Setting";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
      backgroundColor: "#253138",
      height: "100vh",
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
        <PrivateRoute path="/main/reports" component={Reports} exact />
        <PrivateRoute path="/main/people" component={People} exact />
        <PrivateRoute path="/main/edit-category" component={Edit} exact />
        <PrivateRoute path="/main/checkouts" component={Checkouts} exact />
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
