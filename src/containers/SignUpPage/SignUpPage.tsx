import React, { useRef } from "react";
import useSignUpPageHook from "./useSignUpPageHook";
import blackSplash from "../../assets/Logo/black.png";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/auth";
import desktopImage from "../../assets/images/desktop.jpg";
import {
  Grid,
  makeStyles,
  createStyles,
  Theme,
  TextField,
  Button,
} from "@material-ui/core";
import Auth from "../../Models/Auth";
import { History } from "history";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    authSection: {
      backgroundColor: "white",
      width: "50%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "@media (max-width:900px)": {
        width: "100%",
      },
    },
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      overflowX: "hidden",
    },
    promotingSection: {
      backgroundColor: "black",
      width: "50%",
      height: "100%",
      padding: "5em",
      "@media (max-width:900px)": {
        display: "none",
      },
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
    greeting: {
      color: "white",
      fontSize: "2.5em",
      display: "flex",
      justifyContent: "center",
    },
    greetingImage: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10%",
    },
    animation: {
      animation: "1s $fadeIn",
    },
    "@keyframes fadeIn": {
      "0%": {
        opacity: "0",
        transform: "translateY(-20%)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
    imageAnimation: {
      animation: "1s $rotate",
    },
    "@keyframes rotate": {
      "0%": {
        transform: "rotate(20deg)",
      },
      "50%": {
        transform: "rotate(-20deg)",
      },
      "100%": {
        transform: "rotate(0deg)",
      },
    },
  })
);
interface SignUpPageProps {
  onSignUpAdmin: (authData: Auth) => any;
  history: History;
}
const SignUpPage = (props: SignUpPageProps) => {
  const classes = useStyles();
  const {
    nameRef,
    changeNameHandler,
    greetingTextRef,
    isGreetingTextVisible,
    greetingImageRef,
    isGreetingImageVisible,
    handleSignUpAdmin,
    passwordRef,
    emailRef,
  } = useSignUpPageHook(props);
  return (
    <Grid className={classes.root}>
      <Grid className={classes.promotingSection}>
        <Grid
          className={
            isGreetingTextVisible
              ? [classes.greeting, classes.animation].join(" ")
              : classes.greeting
          }
          innerRef={greetingTextRef}
        >
          Let's Get Started
        </Grid>
        <Grid className={classes.greetingImage}>
          <img
            src={desktopImage}
            width="400"
            height="300"
            ref={greetingImageRef}
            className={isGreetingImageVisible ? classes.imageAnimation : null}
          />
        </Grid>
      </Grid>
      <Grid className={classes.authSection}>
        <Grid
          className={
            isGreetingTextVisible
              ? [classes.header, classes.animation].join(" ")
              : classes.header
          }
        >
          POS <img src={blackSplash} width="200" height="200" />
        </Grid>
        <Grid
          className={
            isGreetingTextVisible
              ? [classes.subHeader, classes.animation].join(" ")
              : classes.subHeader
          }
        >
          Create New Account
        </Grid>

        <form
          className={classes.form}
          onSubmit={(event) => handleSignUpAdmin(event)}
        >
          <TextField
            label="Name"
            className={classes.textField}
            required={true}
            onChange={changeNameHandler}
            inputRef={nameRef}
          />
          <TextField
            label="E-mail"
            type="email"
            className={classes.textField}
            required={true}
            inputRef={emailRef}
          />
          <TextField
            label="Password"
            type="password"
            className={classes.textField}
            required={true}
            inputRef={passwordRef}
          />
          <Button className={classes.createAccountButton} type="submit">
            Sign Up
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUpAdmin: (authData: Auth) =>
      dispatch(authActions.signUpAdmin(authData)),
  };
};
export default connect(null, mapDispatchToProps)(SignUpPage);
