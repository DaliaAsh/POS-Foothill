import React, { useEffect, Suspense, useState, useRef } from "react";
import LogIn from "../../components/LogIn/LogIn";
import { styled } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Spinner from "../../components/UI/Spinner/Spinner";
import { BreakPoints } from "../../Constants/BreakPoints/BreakPoints";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
const useStyles = makeStyles(() =>
  createStyles({
    informativeSection: {
      width: "60%",
      "@media (max-width:680px)": {
        display: "none",
      },
    },
    header: {
      textAlign: "center",
      color: "white",
      letterSpacing: "0.5em",
      width: "80%",
      margin: "0 auto",
      whiteSpace: "nowrap",
      overflow: "hidden",
      borderRight: "3px solid white",
    },
    typingAnimation: {
      animation: "3.5s steps(30,end) $typing 0.5s",
    },
    "@keyframes typing": {
      from: {
        width: "0%",
      },
      to: {
        width: "100%",
      },
    },
  })
);
const LogInPageLayout = styled(Grid)({
  width: "100%",
  height: "100vh",
  backgroundColor: "#33b2e5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all .5s ease-in-out",
});

const LogInPage = (props) => {
  const mobileOrientation = useMediaQuery(`(max-width:${BreakPoints.SM})`);
  const CustomPaper = styled(Paper)({
    width: mobileOrientation ? "100%" : "40%",
    height: "100%",
    marginRight: "auto",
  });
  useEffect(() => {
    const isAuth = localStorage.getItem("isUserAuthorized");
    if (isAuth) {
      const isUserAuthorized = JSON.parse(isAuth);
      if (isUserAuthorized) {
        props.history.push("/main/pos");
      }
    }
    setLoading(false);
  }, []);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  return (
    <Suspense fallback="loading">
      {loading ? (
        <Spinner />
      ) : (
        <LogInPageLayout>
          <CustomPaper>
            <LogIn />
          </CustomPaper>
          <Grid className={classes.informativeSection}>
            <h1 className={[classes.header, classes.typingAnimation].join(" ")}>
              Point Of Sales Data
            </h1>
          </Grid>
        </LogInPageLayout>
      )}
    </Suspense>
  );
};

export default LogInPage;
