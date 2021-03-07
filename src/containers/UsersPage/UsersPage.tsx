import React, { useEffect } from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import { connect } from "react-redux";
import * as usersActions from "../../store/actions/users";
import UserFields from "../../Models/User";
import User from "./User";

interface UsersPageProps {
  users: UserFields[];
  onInitUsers: () => void;
}
const useStyles = makeStyles(() =>
  createStyles({
    header: {
      color: "#0170ff",
      marginLeft: "5%",
      marginTop: "5%",
      fontWeight: 1000,
      fontSize: "2.5em",
    },
    usersGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "left",
      "@media(max-width:680px)": {
        justifyContent: "center",
      },
    },
  })
);
const UsersPage = (props: UsersPageProps) => {
  useEffect(() => {
    props.onInitUsers();
  }, []);
  const classes = useStyles();
  return (
    <>
      <Grid>
        <Grid className={classes.header}>Users</Grid>
        <Grid className={classes.usersGrid}>
          {props.users.map((user: UserFields) => {
            return <User user={user} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitUsers: () => dispatch(usersActions.fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
