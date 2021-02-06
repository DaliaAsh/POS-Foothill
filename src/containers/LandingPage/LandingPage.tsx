import React from "react";
import { Grid, createStyles, makeStyles } from "@material-ui/core";
import LandingSection from "../../components/LandingComponents/LandingSection";
import FooterSection from "../../components/LandingComponents/FooterSection";
import FacilitiesSection from "../../components/LandingComponents/FacilitiesSection";
import PromotingSection from "../../components/LandingComponents/PromotingSection";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);
const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <LandingSection />
      <FacilitiesSection />
      <PromotingSection />
      <FooterSection />
    </Grid>
  );
};
export default LandingPage;
