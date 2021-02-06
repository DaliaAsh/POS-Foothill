import React from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import bicycle from "../../assets/images/landing.jpg";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      backgroundColor: "white",
    },
    header: {
      padding: "0.5em",
    },
    carouselContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      maxHeight: "50%",
    },
    subHeader: {
      textTransform: "capitalize",
      marginLeft: "5%",
    },
    explain: { marginLeft: "5%" },
    detailsContainer: {
      padding: "2em",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      "@media (min-width:680px)": {
        flexDirection: "row",
      },
    },
  })
);
const FacilitiesSection = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <h1 className={classes.header}>Manage Your Data Quickly</h1>
      <Grid className={classes.container}>
        <Grid className={classes.carouselContainer}>
          <img src={bicycle} width="80%" />
        </Grid>
        <Grid className={classes.detailsContainer}>
          <h2 className={classes.subHeader}>turn your ideas into reality</h2>
          <Grid className={classes.explain}>
            You can create categories for your industry also create products and
            clients then order them.The orders appear in the POS page and
            delivered to the specified client with specific barcode.
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default FacilitiesSection;
