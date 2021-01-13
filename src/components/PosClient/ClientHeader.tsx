import React from "react";
import {
  makeStyles,
  createStyles,
  Paper,
  Theme,
  IconButton,
  Grid,
  Tooltip,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import VisibilityIcon from "@material-ui/icons/Visibility";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerContainer: {
      alignItems: "center",
      justifyContent: "space-around",
      padding: theme.spacing(4),
    },
    iconsContainer: {
      marginRight: "-7%",
    },
    clientText: {
      fontSize: "2em",
      fontWeight: 700,
      color: "#344963",
      marginLeft: "-6%",
      fontFamily: "Calibri",
    },
    iconButton: {
      backgroundColor: "#a1b1bc",
      padding: "0.2em",
      borderRadius: "0.2em",
      color: "#344963",
    },
    visibilityIcon: {
      marginRight: "0.5em",
    },
  })
);
const ClientHeader = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.headerContainer}>
      <span className={classes.clientText}>Choose Client</span>
      <Grid item className={classes.iconsContainer}>
        <IconButton
          className={[classes.iconButton, classes.visibilityIcon].join(" ")}
        >
          <Tooltip title="show last receipt" placement="top">
            <VisibilityIcon />
          </Tooltip>
        </IconButton>

        <IconButton className={classes.iconButton}>
          <Tooltip title="Add new customer" placement="top">
            <PersonAddIcon />
          </Tooltip>
        </IconButton>
      </Grid>
    </Grid>
  );
};
export default ClientHeader;
