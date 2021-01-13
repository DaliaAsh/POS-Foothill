import React from "react";
import { makeStyles, createStyles, Paper, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
  })
);
const CustomTabs = () => {
  const classes = useStyles();
  return <Paper className={classes.root}>Custom Tabs</Paper>;
};
export default CustomTabs;
