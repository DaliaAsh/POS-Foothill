import React, { useRef } from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PublicIcon from "@material-ui/icons/Public";
import MailIcon from "@material-ui/icons/Mail";
import useOnScreen from "../../CustomHooks/useOnScreen";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
    },
    copyRight: {
      color: "#ffffff",
      textAlign: "center",
      fontWeight: "normal",
      paddingBottom: "5em",
    },
    block: {
      color: "#ffffff",
      padding: "2em",
    },
    footerHeader: {
      color: "#ffffff",
      fontWeight: 400,
      textTransform: "uppercase",
      marginBottom: "5%",
      borderBottom: "3px solid #33b2e5",
      paddingBottom: "1em",
    },
    aboutParagraph: {
      fontWeight: 400,
      textTransform: "capitalize",
      textOrientation: "mixed",
    },
    missionParagraph: {
      fontWeight: 400,
      textTransform: "capitalize",
      textOrientation: "mixed",
      color: "white",
    },
    contactInformation: {
      fontWeight: 300,
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      marginBottom: "5%",
    },
    missionBlock: {
      padding: "2em",
    },
    footerContent: {
      display: "flex",
      flexDirection: "column",
      "@media (min-width:680px)": {
        flexDirection: "row",
      },
    },
    icon: {
      marginRight: "5%",
    },
    "@keyframes fadeIn": {
      from: {
        opacity: "0",
        transform: "translateY(-40%)",
      },
      to: {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
    animation: {
      animation: "1s $fadeIn",
    },
  })
);
const FooterSection = () => {
  const footerRef = useRef(null);
  const isFooterVisible = useOnScreen(footerRef);
  const copyrightRef = useRef(null);
  const isCopyrightVisible = useOnScreen(copyrightRef);
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid
        className={
          isFooterVisible
            ? [classes.footerContent, classes.animation].join(" ")
            : classes.footerContent
        }
        innerRef={footerRef}
      >
        <Grid className={classes.block}>
          <Grid className={classes.footerHeader}>About Us</Grid>
          <Grid className={classes.aboutParagraph}>
            POS stands for Point Of Sale , this website will help you manage
            your sales in an effective way
          </Grid>
        </Grid>
        <Grid className={classes.block}>
          <Grid className={classes.footerHeader}>Contact US</Grid>
          <Grid>
            <Grid>
              <Grid className={classes.contactInformation}>
                <PhoneAndroidIcon className={classes.icon} />
                +972595280274
              </Grid>
              <Grid className={classes.contactInformation}>
                <PublicIcon className={classes.icon} />
                Tulkarm ,Palestine
              </Grid>
              <Grid className={classes.contactInformation}>
                <MailIcon className={classes.icon} />
                daliayousef1998@yahoo.com
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.missionBlock}>
          <Grid className={classes.footerHeader}>Our Mission</Grid>
          <Grid className={classes.missionParagraph}>
            Building simple , user friendly websites
          </Grid>
        </Grid>
      </Grid>

      <Grid
        className={
          isCopyrightVisible
            ? [classes.copyRight, classes.animation].join(" ")
            : classes.copyRight
        }
        innerRef={copyrightRef}
      >
        Copyright {new Date().getFullYear()} Dalia Ashayer
      </Grid>
    </Grid>
  );
};
export default FooterSection;
