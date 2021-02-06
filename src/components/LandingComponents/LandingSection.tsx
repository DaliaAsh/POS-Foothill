import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Grid, createStyles, makeStyles, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import LandingImage from "../../assets/images/landing.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import SplatImage from "../../assets/Logo/splat.png";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      position: "relative",
      backgroundColor: "#000000",
      overflow: "hidden",
      zIndex: 100,
    },
    menuButton: {
      color: "#33b2e5",
      alignSelf: "flex-end",
      "@media(min-width:1060px)": {
        display: "none",
      },
    },
    header: {
      width: "100%",
      backgroundColor: "#000000",
      position: "fixed",
      height: "3.5em",
      display: "flex",
      justifyContent: "space-between",
    },
    logo: {
      alignSelf: "flex-start",
    },
    heading: {
      textAlign: "center",
      position: "absolute",
      top: "30%",
      fontFamily: "'Montserrat',sans-serif",
      padding: "2em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      flexDirection: "column",
    },
    subHeading: {
      textTransform: "uppercase",
      color: "#ffffff",
      fontFamily: "'Montserrat',sans-serif",
    },
    mainHeading: {
      fontSize: "2.3em",
      color: "#ffffff",
    },
    openModal: {
      position: "fixed",
      animation: "1s $slideIn",
    },
    closeModal: {
      animation: "1s $slideOut",
      opacity: "0",
    },
    modal: {
      width: "100%",
      height: "100vh",
      backgroundColor: "#ffffff",
      overflowY: "hidden",
    },
    closeButton: {
      position: "absolute",
      left: "70%",
      top: "4%",
    },
    closeIcon: {
      fontSize: "3em",
    },
    "@keyframes slideIn": {
      "0%": {
        transform: "translateX(100%)",
      },
      "50%": {
        transform: "translateX(-10%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
    "@keyframes slideOut": {
      "0%": {
        opacity: "1",
        transform: "translateX(0)",
      },
      "100%": {
        opacity: "0",
        transform: "translateX(100%)",
      },
    },
    modalItem: {
      fontFamily: "'Montserrat',sans-serif",
      fontWeight: 800,
      fontSize: "2em",
      position: "relative",
      marginBottom: "1em",
      "@media(min-width:680px)": {
        color: "white",
        fontSize: "1em",
        marginLeft: "5em",
      },
    },
    expandIcon: {
      fontSize: "2em",
      position: "absolute",
      left: "95%",
      top: "-20%",
    },
    modalList: {
      position: "absolute",
      top: "20%",
      left: "1%",
      "@media(min-width:680px)": {
        display: "flex",
        left: "30%",
        flexWrap: "wrap",
      },
    },
    getStarted: {
      fontFamily: "'Montserrat',sans-serif",
      position: "absolute",
      fontSize: "2em",
      textTransform: "uppercase",
      top: "85%",
      width: "100%",
      backgroundColor: "black",
      height: "100%",
      color: "white",
      textAlign: "center",
      paddingTop: "0.8em",
    },
    logIn: {
      fontFamily: "'Montserrat',sans-serif",
      position: "absolute",
      fontSize: "2em",
      textTransform: "uppercase",
      top: "70%",
      width: "100%",
      textAlign: "center",
      "&:hover": {
        cursor: "pointer",
        color: "#33b2e5",
      },
    },
    getStartedButton: {
      color: "black",
      backgroundColor: "#33b2e5",
      fontFamily: "'Montserrat',sans-serif",
      textTransform: "uppercase",
      fontWeight: 800,
      margin: "auto",
      padding: "1em 2em",
      width: "10em",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "white",
      },
    },
    navigation: {
      display: "none",
      "@media(min-width:1060px)": {
        display: "inline",
      },
    },
  })
);
const LandingSection = (props) => {
  const [modalOpen, setModelOpen] = useState<boolean>(false);
  console.log(modalOpen);
  const classes = useStyles();
  const openModalHandler = () => {
    setModelOpen(true);
  };
  const closeModalHandler = () => {
    setModelOpen(false);
  };
  const navigateToSignUpPage = () => {
    props.history.push("/sign-up");
  };
  const navigateToSignInPage = () => {
    props.history.push("/sign-in");
  };
  return (
    <Grid className={classes.root} container>
      <Grid
        item
        className={classes.header}
        style={modalOpen ? { zIndex: 0 } : { zIndex: 200 }}
      >
        <img src={SplatImage} width="70" height="50" className={classes.logo} />
        <nav className={classes.navigation}>
          <ul className={classes.modalList}>
            <Grid className={classes.modalItem}>
              Products
              <ExpandMoreIcon className={classes.expandIcon} />
            </Grid>
            <Grid className={classes.modalItem}>
              Categories
              <ExpandMoreIcon className={classes.expandIcon} />
            </Grid>
            <Grid className={classes.modalItem}>
              Users
              <ExpandMoreIcon className={classes.expandIcon} />
            </Grid>
            <Grid className={classes.modalItem} onClick={navigateToSignInPage}>
              Log In
            </Grid>
          </ul>
        </nav>
        <IconButton onClick={openModalHandler} className={classes.menuButton}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item className={classes.heading}>
        <h2 className={classes.subHeading}>Manage your POS</h2>
        <h1 className={classes.mainHeading}>
          The Leader in Point Of Sales Data
        </h1>
        <div
          className={classes.getStartedButton}
          onClick={navigateToSignUpPage}
        >
          Get Started
        </div>
      </Grid>
      <Grid
        className={
          modalOpen
            ? [classes.modal, classes.openModal].join(" ")
            : [classes.modal, classes.closeModal].join(" ")
        }
      >
        <IconButton className={classes.closeButton} onClick={closeModalHandler}>
          <CloseIcon className={classes.closeIcon} htmlColor="black" />
        </IconButton>
        <ul className={classes.modalList}>
          <Grid className={classes.modalItem}>
            Products
            <ExpandMoreIcon className={classes.expandIcon} />
          </Grid>
          <Grid className={classes.modalItem}>
            Categories
            <ExpandMoreIcon className={classes.expandIcon} />
          </Grid>
          <Grid className={classes.modalItem}>
            Users
            <ExpandMoreIcon className={classes.expandIcon} />
          </Grid>
        </ul>
        <div className={classes.logIn} onClick={navigateToSignInPage}>
          Log In
        </div>
        <Grid className={classes.getStarted}>Get Started</Grid>
      </Grid>
    </Grid>
  );
};
export default withRouter(LandingSection);
