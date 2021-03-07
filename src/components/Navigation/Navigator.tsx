import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import NavigationHeader from "./NavigationHeader";
import NavigationContent from "./NavigationContent";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      backgroundColor: "#253138",
    },
  })
);
const MainContent = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <NavigationHeader changeDirection={() => {}} />
      <NavigationContent />
    </Grid>
  );
};
export default withRouter(MainContent);
