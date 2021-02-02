import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import SettingsOptions from "../../../../components/Settings/SettingsOptions/SettingsOptions";
import SettingsForm from "../../../../components/Settings/SettingsForm/SettingsForm";
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
      <SettingsOptions />
    </div>
  );
};
export default Setting;
