import React, { useEffect } from "react";
import { Grid, createStyles, makeStyles } from "@material-ui/core";
import LandingSection from "../../components/LandingComponents/LandingSection";
import FooterSection from "../../components/LandingComponents/FooterSection";
import FacilitiesSection from "../../components/LandingComponents/FacilitiesSection";
import PromotingSection from "../../components/LandingComponents/PromotingSection";
import ToolsSection from "../../components/LandingComponents/Tools";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);
const LandingPage = (props) => {
  const classes = useStyles();
  useEffect(() => {
    const isAuth = localStorage.getItem("isUserAuthorized");
    if (isAuth) {
      const isUserAuthorized = JSON.parse(isAuth);
      if (isUserAuthorized) {
        props.history.push("/main/pos");
      }
    }
  }, []);
  return (
    <Grid className={classes.root}>
      <LandingSection />
      <FacilitiesSection />
      <PromotingSection />
      <ToolsSection />
      <FooterSection />
    </Grid>
  );
};
export default LandingPage;
