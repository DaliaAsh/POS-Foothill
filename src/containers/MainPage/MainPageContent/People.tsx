import React, { useEffect } from "react";
import Spinner from "../../../components/UI/Spinner/Spinner";
import * as usersActions from "../../../store/actions/users";
import { Grid, createStyles, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import UserCard from "../../../components/UI/UserCard";
import User from "../../../Models/User";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "120vh",
      backgroundColor: "#253138",
      display: "flex",
      flexWrap: "wrap",
      overflow: "auto",
      justifyContent: "center",
    },
  })
);
interface PeopleProps {
  loadingUsers: boolean;
  onInitUsers: () => void;
  users: User[];
  onDeleteUser: (userId: number, users: User[]) => void;
}
const People = (props: PeopleProps) => {
  useEffect(() => {
    props.onInitUsers();
  }, []);
  const classes = useStyles();
  if (props.loadingUsers) {
    return <Spinner />;
  }
  return (
    <Grid className={classes.root}>
      {props.users.map((user: User) => {
        return (
          <UserCard
            user={user}
            key={user.userId}
            deleteUser={() => props.onDeleteUser(user.userId, props.users)}
          />
        );
      })}
    </Grid>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    loadingUsers: state.users.loadingUsers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitUsers: () => dispatch(usersActions.fetchUsers()),
    onDeleteUser: (userId, users) =>
      dispatch(usersActions.deleteUser(userId, users)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(People);
