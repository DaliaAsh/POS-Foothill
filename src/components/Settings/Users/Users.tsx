import React from "react";
import SettingsOptions from "../SettingsOptions/SettingsOptions";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import AddButton from "../../UI/AddButton/AddButton";
import AddUserDialog from "../../UI/Form/FormDialog";
import useUsers from "./useUsers";
import * as usersActions from "../../../store/actions/users";
import { connect } from "react-redux";
import User from "../../../Models/User";
import UsersGrid from "../../../components/CustomGrid/CustomGrid";
const useStyles = makeStyles(() =>
  createStyles({
    usersContainer: {
      width: "90%",
      height: "90vh",
      margin: "auto",
      paddingTop: "2em",
    },
  })
);
interface UsersProps {
  users: User[];
  onAddUser: (user: User, users: User[]) => void;
  onInitUsers: () => void;
}
const Users = (props: UsersProps) => {
  const classes = useStyles();
  const {
    handleOpenAddUserDialog,
    openUserDialog,
    closeDialogHandler,
    submitDialogHandler,
    userNameRef,
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    repeatPasswordRef,
    uploadImageHandler,
    role,
    handleRoleChange,
  } = useUsers(props);
  return (
    <>
      <AddUserDialog
        open={openUserDialog}
        handleCloseDialog={closeDialogHandler}
        handleDialogSubmit={(event) => submitDialogHandler(event)}
        title="Add User"
      >
        <AddUserDialog.TextInput
          inputLabel="User Name"
          inputValue={userNameRef}
        />
        <AddUserDialog.TextInput
          inputLabel="First Name"
          inputValue={firstNameRef}
        />
        <AddUserDialog.TextInput
          inputLabel="Last Name"
          inputValue={lastNameRef}
        />
        <AddUserDialog.TextInput inputLabel="Email" inputValue={emailRef} />
        <AddUserDialog.TextInput
          inputLabel="Password"
          inputValue={passwordRef}
        />
        <AddUserDialog.TextInput
          inputLabel="Repeat Password"
          inputValue={repeatPasswordRef}
        />
        <AddUserDialog.ImageInput handleUploadImage={uploadImageHandler} />
        <AddUserDialog.RadioInput
          inputLabel="Role"
          options={["admin", "sales"]}
          inputValue={role}
          handleOptionChange={handleRoleChange}
        />
        <AddUserDialog.SubmitCloseButtons
          handleDialogClose={closeDialogHandler}
        />
      </AddUserDialog>
      <SettingsOptions />
      <Grid className={classes.usersContainer}>
        <UsersGrid
          items={props.users}
          columnNames={[
            "Avatar",
            "first Name",
            "last Name",
            "Username",
            "Role",
            "Action",
          ]}
        />
        <AddButton marginLeft="5%" onClick={handleOpenAddUserDialog}>
          Add User
        </AddButton>
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
    onAddUser: (user: User, users: User[]) =>
      dispatch(usersActions.addUser(user, users)),
    onInitUsers: () => dispatch(usersActions.fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
