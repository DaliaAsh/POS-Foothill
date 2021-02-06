import React from "react";
import useSignUpPageHook from "./useSignUpPageHook";
import blackSplash from "../../assets/Logo/black.png";
import {
  Grid,
  makeStyles,
  createStyles,
  Theme,
  TextField,
  Button,
} from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      width: "80%",
      margin: "auto",
    },
    createAccountButton: {
      color: "white",
      backgroundColor: "black",
      "&:hover": {
        color: "white",
        backgroundColor: "black",
      },
    },
    textField: {
      marginBottom: "2em",
    },
    header: {
      fontWeight: 800,
      fontSize: "3em",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    subHeader: {
      fontWeight: 800,
      fontSize: "1.5em",
      textAlign: "center",
      opacity: "0.5",
    },
  })
);
const SignUpPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid className={classes.header}>
        POS <img src={blackSplash} width="200" height="200" />
      </Grid>
      <Grid className={classes.subHeader}>Create New Account</Grid>

      <form className={classes.form}>
        <TextField label="Name" className={classes.textField} />
        <TextField label="E-mail" type="email" className={classes.textField} />
        <TextField
          label="Password"
          type="password"
          className={classes.textField}
        />
        <Button className={classes.createAccountButton}>Sign Up</Button>
      </form>
    </Grid>
  );
};
export default SignUpPage;
