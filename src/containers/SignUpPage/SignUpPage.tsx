import React from "react";
import useSignUpPageHook from "./useSignUpPageHook";
import {
  Grid,
  makeStyles,
  createStyles,
  Theme,
  Paper,
  TextField,
  Button,
  InputBase,
  OutlinedInput,
} from "@material-ui/core";
import { AnimateOnChange } from "react-animation";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    animatedSection: {
      marginTop: "15%",
      marginLeft: "15%",
      width: "30%",
      "@media (max-width:900px)": {
        height: "15em",
      },
    },
    animatedWords: {
      color: "white",
      fontSize: "4em",
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "Potta One",
    },
    signUpCard: {
      width: "30%",
      height: "70%",
      margin: "auto",
      fontFamily: "Potta One",
      "@media (max-width:900px)": {
        width: "80%",
        height: "90vh",
      },
    },
    signUpPaper: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#555",
    },
    textField: {
      width: "100%",
    },
    textFieldGrid: {
      width: "80%",
      marginTop: "5%",
    },
    buttonGrid: {
      width: "80%",
      marginTop: "8%",
    },
    signUpButton: {
      fontFamily: "Potta One",
      backgroundColor: "#555",
      color: "white",
      width: "100%",
      height: "3em",
    },
    lock: {
      color: "#555",
    },
    form: {
      width: "100%",
      height: "100vh",
      backgroundColor: "#555",
      display: "flex",
      flexDirection: "row",
      "@media (max-width:900px)": {
        width: "100%",
        height: "200vh",
        backgroundColor: "#555",
        display: "flex",
        flexDirection: "column",
      },
    },
  })
);
const SignUpPage = () => {
  const {
    current,
    words,
    createNewAccount,
    nameRef,
    passwordRef,
    emailRef,
  } = useSignUpPageHook();
  const classes = useStyles();
  return (
    <Grid container>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createNewAccount();
        }}
        className={classes.form}
      >
        <Grid item className={classes.animatedSection}>
          <span className={classes.animatedWords}>
            <AnimateOnChange>{words[current]}</AnimateOnChange>
          </span>
        </Grid>
        <Grid className={classes.signUpCard}>
          <Paper className={classes.signUpPaper}>
            <h1>Sign Up</h1>
            <Grid className={classes.textFieldGrid}>
              <OutlinedInput
                placeholder="Name"
                className={classes.textField}
                inputProps={{ style: { fontFamily: "Potta One" } }}
                inputRef={nameRef}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid className={classes.textFieldGrid}>
              <OutlinedInput
                placeholder="E-mail"
                className={classes.textField}
                inputProps={{ style: { fontFamily: "Potta One" } }}
                inputRef={emailRef}
                startAdornment={
                  <InputAdornment position="start">
                    <MailOutlineIcon className={classes.lock} />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid className={classes.textFieldGrid}>
              <OutlinedInput
                placeholder="Password"
                className={classes.textField}
                inputProps={{ style: { fontFamily: "Potta One" } }}
                inputRef={passwordRef}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid className={classes.buttonGrid}>
              <Button className={classes.signUpButton} type="submit">
                Sign Up
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Grid>
  );
};
export default SignUpPage;
