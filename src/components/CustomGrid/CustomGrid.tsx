import React from "react";
import { Grid, createStyles, makeStyles, Avatar } from "@material-ui/core";
import User from "../../Models/User";
import axios from "axios";
import IconsActions from "../UI/IconsAction/IconsAction";
import Store from "../../Models/Store";
import { connect } from "react-redux";
import * as userActions from "../../store/actions/users";
interface GridProps {
  users: User[];
  columnNames: string[];
  onDeleteUser: (userId: number, users: User[]) => void;
}
const useStyles = makeStyles(() =>
  createStyles({
    header: {
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      borderTop: "1px solid #bbb",
      borderBottom: "1px solid #bbb",
      paddingBottom: "0.5em",
      paddingTop: "0.5em",
      marginBottom: "1em",
    },
    headerCell: {
      color: "#555",
      fontWeight: 500,
      marginLeft: "-2em",
    },
    content: {},
    userRow: {
      display: "flex",
      borderBottom: "1px solid #bbb",
      paddingBottom: "0.5em",
      justifyContent: "space-around",
      marginBottom: "2em",
    },
    userCell: {},
  })
);
const CustomGrid = (props: GridProps) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.header}>
        {props.columnNames.map((columnName: string) => {
          return <span className={classes.headerCell}>{columnName}</span>;
        })}
      </Grid>
      <Grid className={classes.content}>
        {props.users.map((user: User) => {
          return (
            <Grid className={classes.userRow}>
              <Avatar
                alt={(user as User).userName}
                src={`${axios.defaults.baseURL}${(user as User).userImagePath}`}
              />
              <span className={classes.userCell}>
                {(user as User).firstName}
              </span>
              <span className={classes.userCell}>
                {(user as User).lastName}
              </span>
              <span className={classes.userCell}>
                {(user as User).userName}
              </span>
              <span className={classes.userCell}>{(user as User).role}</span>
              <span className={classes.userCell}>
                <IconsActions.EditAction handleEditItemById={() => {}} />
                <IconsActions.ClearAction
                  handleDeleteItemById={() =>
                    props.onDeleteUser(user.userId, props.users)
                  }
                />
              </span>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUser: (userId: number, users: User[]) =>
      dispatch(userActions.deleteUser(userId, users)),
  };
};
export default connect(null, mapDispatchToProps)(CustomGrid);
