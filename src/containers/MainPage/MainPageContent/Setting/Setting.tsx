import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import SettingsOptions from "../../../../components/Settings/SettingsOptions/SettingsOptions";
import SettingsForm from "../../../../components/Settings/SettingsForm/SettingsForm";
import Stores from "../../../../components/Settings/Stores/Stores";
import Users from "../../../../components/Settings/Users/Users";
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      height: "100%",
    },
  })
);
const Setting = (props) => {
  const classes = useStyles();
  useEffect(() => {
    setLoading(false);
  }, []);
  const [loading, setLoading] = useState(true);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={classes.container}>
      <BrowserRouter>
        <Switch>
          <Route path="/settings" component={SettingsForm} />
          <Route path="/users" component={Users} />
          <Route path="/stores" component={Stores} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Setting;
