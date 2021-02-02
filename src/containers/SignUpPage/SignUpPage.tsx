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
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { AnimateOnChange } from "react-animation";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
interface ISignUpForm {
  name: string;
  email: string;
  password: string;
}
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
      height: "70vh",
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
      marginTop: "3%",
    },
    buttonGrid: {
      width: "80%",
      marginTop: "3%",
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
    error: {
      color: "red",
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
    serverMessage,
  } = useSignUpPageHook();
  const classes = useStyles();
  return (
    <Grid container>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values: ISignUpForm, actions) => {}}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Name is Required"),
          email: Yup.string().email().required("E-mail is Required"),
          password: Yup.string().required("Password is Required"),
        })}
      >
        {(props) => {
          const { values, errors, touched, handleChange, handleBlur } = props;
          return (
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
                    <FormControl className={classes.textField}>
                      <OutlinedInput
                        placeholder="Name"
                        inputProps={{ style: { fontFamily: "Potta One" } }}
                        inputRef={nameRef}
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        startAdornment={
                          <InputAdornment position="start">
                            <AccountCircleIcon />
                          </InputAdornment>
                        }
                      />
                      <FormHelperText>
                        {errors.name ? (
                          <span className={classes.error}>{errors.name}</span>
                        ) : (
                          "Please Enter Full Name"
                        )}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid className={classes.textFieldGrid}>
                    <FormControl className={classes.textField}>
                      <OutlinedInput
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        id="email"
                        inputProps={{ style: { fontFamily: "Potta One" } }}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        startAdornment={
                          <InputAdornment position="start">
                            <MailOutlineIcon className={classes.lock} />
                          </InputAdornment>
                        }
                        error={errors.email && touched.email ? true : false}
                      />
                      <FormHelperText>
                        {errors.email ? (
                          <span className={classes.error}>{errors.email}</span>
                        ) : (
                          "Please Enter Your Email"
                        )}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid className={classes.textFieldGrid}>
                    <FormControl className={classes.textField}>
                      <OutlinedInput
                        placeholder="Password"
                        inputProps={{ style: { fontFamily: "Potta One" } }}
                        name="password"
                        type="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.password && touched.password ? true : false
                        }
                        startAdornment={
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        }
                      />
                      <FormHelperText>
                        {errors.password ? (
                          <span className={classes.error}>
                            {errors.password}
                          </span>
                        ) : (
                          "Please Enter Password"
                        )}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid className={classes.buttonGrid}>
                    <Button className={classes.signUpButton} type="submit">
                      Sign Up
                    </Button>
                  </Grid>
                </Paper>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </Grid>
  );
};
export default SignUpPage;
