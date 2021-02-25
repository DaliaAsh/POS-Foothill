import React, { useRef } from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import { FaReact, FaNodeJs } from "react-icons/fa";
import useOnScreen from "../../CustomHooks/useOnScreen";
import {
  SiRedux,
  SiMaterialUi,
  SiTypescript,
  SiStorybook,
} from "react-icons/si";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "auto",
      backgroundColor: "white",
      paddingBottom: "3em",
    },
    header: {
      marginLeft: "15%",
    },
    explanation: { marginLeft: "15%", fontWeight: "bold", fontSize: "1.5em" },
    icons: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "5%",
    },
    icon: {
      margin: "2em",
    },
    iconsAnimation: {
      animation: "1s $fadeIn",
    },
    "@keyframes fadeIn": {
      "0%": {
        transform: "translateY(25%)",
        opacity: "0",
      },
      "100%": {
        transform: "translateY(0)",
        opacity: "1",
      },
    },
    headerAnimation: {
      animation: "1s $slideIn",
    },
    "@keyframes slideIn": {
      "0%": {
        transform: "translateX(15%)",
        opacity: "0",
      },
      "100%": {
        transform: "translateX(0)",
        opacity: "1",
      },
    },
  })
);
const Tools = () => {
  const classes = useStyles();
  const iconsRef = useRef(null);
  const isIconsOnScreen = useOnScreen(iconsRef);
  const headerRef = useRef(null);
  const isHeaderOnScreen = useOnScreen(headerRef);
  return (
    <Grid className={classes.root}>
      <Grid
        className={isHeaderOnScreen ? classes.headerAnimation : null}
        innerRef={headerRef}
      >
        <h1 className={classes.header}>Tools</h1>
        <Grid className={classes.explanation}>
          The best Tools were used in order to build an optimized and well
          organized website
        </Grid>
      </Grid>
      <Grid
        className={
          isIconsOnScreen
            ? [classes.icons, classes.iconsAnimation].join(" ")
            : classes.icons
        }
        innerRef={iconsRef}
      >
        <FaReact size="5em" color="#33b2e5" className={classes.icon} />
        <FaNodeJs size="5em" color="#02be6e" className={classes.icon} />
        <SiRedux size="5em" color="#7318a5" className={classes.icon} />
        <SiMaterialUi size="5em" color="#33b2e5" className={classes.icon} />
        <SiStorybook size="5em" color="#ec407a" className={classes.icon} />
        <SiTypescript size="5em" color="#33b2e5" className={classes.icon} />
      </Grid>
    </Grid>
  );
};
export default Tools;
