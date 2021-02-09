import React from "react";
import { Grid, createStyles, makeStyles, Avatar } from "@material-ui/core";
import axios from "axios";
import User from "../../Models/User";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "20em",
      height: "18em",
      backgroundColor: "white",
      marginLeft: "auto",
      marginTop: "5em",
      marginRight: "auto",
      animation: "2s $fadeIn",
    },
    "@keyframes fadeIn": {
      "0%": {
        opacity: "0",
        transform: "translateY(-20%)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
    bgSection: {
      backgroundColor: "#33b2e5",
      width: "100%",
      height: "40%",
      position: "relative",
    },
    userImage: {
      position: "absolute",
      top: "55%",
      width: "3.5em",
      height: "3.5em",
      left: "5%",
    },
    username: {
      marginLeft: "5%",
      marginTop: "10%",
    },
    role: {
      color: "#555",
      marginLeft: "8%",
      marginTop: "-1em",
    },
    deleteButton: {
      width: "90%",
      height: "2em",
      backgroundColor: "#33b2e5",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#555",
      },
      margin: "auto",
      marginTop: "2em",
    },
  })
);
interface UserCardProps {
  user: User;
}
const UserCard = (props: UserCardProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid className={classes.bgSection}>
        <Avatar
          src={`${axios.defaults.baseURL}${props.user.userImagePath}`}
          className={classes.userImage}
        />
      </Grid>
      <Grid>
        <h1 className={classes.username}>{props.user.userName}</h1>
        <Grid className={classes.role}>{props.user.role}</Grid>
        <Grid className={classes.deleteButton}>Delete</Grid>
      </Grid>
    </Grid>
  );
};
export default UserCard;
