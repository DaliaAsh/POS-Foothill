import React, { useRef } from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import mobile from "../../assets/images/mobile.jpg";
import { withRouter } from "react-router-dom";
import useOnScreen from "../../CustomHooks/useOnScreen";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      color: "white",
      textAlign: "center",
    },
    mobileImage: {
      alignSelf: "center",
      marginTop: "3em",
    },
    getStartedButton: {
      marginTop: "2.5em",
      color: "black",
      backgroundColor: "#33b2e5",
      fontFamily: "'Montserrat',sans-serif",
      textTransform: "uppercase",
      fontWeight: 800,
      padding: "1em 2em",
      width: "10em",
      textAlign: "center",
      alignSelf: "center",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "white",
      },
    },
    container: {
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    animation: {
      animation: "1s $slideIn",
    },
    "@keyframes slideIn": {
      "0%": {
        transform: "translateY(50%)",
        opacity: "0",
      },
      "100%": {
        transform: "translateY(0)",
        opacity: "1",
      },
    },
  })
);
const PromotingSection = (props) => {
  const classes = useStyles();
  const promotingRef = useRef(null);
  const isPromotingVisible = useOnScreen(promotingRef);
  const navigateToSignUpPage = () => {
    props.history.push("/sign-up");
  };
  return (
    <Grid className={classes.root} innerRef={promotingRef}>
      <h1
        className={
          isPromotingVisible
            ? [classes.header, classes.animation].join(" ")
            : classes.header
        }
      >
        Ready to Launch
      </h1>
      <Grid
        className={
          isPromotingVisible
            ? [classes.container, classes.animation].join(" ")
            : classes.container
        }
      >
        <div
          className={classes.getStartedButton}
          onClick={navigateToSignUpPage}
        >
          Get Started
        </div>
        <img
          src={mobile}
          width="300"
          height="300"
          className={classes.mobileImage}
        />
      </Grid>
    </Grid>
  );
};
export default withRouter(PromotingSection);
