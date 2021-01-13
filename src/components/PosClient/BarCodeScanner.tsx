import React from "react";
import {
  makeStyles,
  createStyles,
  Grid,
  Theme,
  InputBase,
} from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "75%",
      margin: "auto",
      backgroundColor: "white",
    },
    input: {
      width: "100%",
      padding: theme.spacing(1),
      border: "1px solid #344963",
      borderRadius: "0.2em",
      backgroundColor: "white",
      "&::placeholder": {
        color: "#344963",
      },
    },
    inputFocused: {
      border: "1px solid #5897fb",
      boxShadow: "0px 0px 5px 1px #5897fb",
    },
  })
);
const BarCodeScanner = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <InputBase
        placeholder="Barcode Scanner"
        className={classes.input}
        inputProps={{ style: { height: "0.1em" } }}
        classes={{ focused: classes.inputFocused }}
      />
    </Grid>
  );
};
export default BarCodeScanner;
