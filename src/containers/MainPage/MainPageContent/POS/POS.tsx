import React from "react";
import {
  useMediaQuery,
  makeStyles,
  Theme,
  Grid,
  Paper,
  createStyles,
} from "@material-ui/core";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import { BreakPoints } from "../../../../Constants/BreakPoints/BreakPoints";
import CategoriesTab from "../../../../components/PosProducts/CategoriesTab/CategoriesTab";
import ProductsSearchBar from "../../../../components/PosProducts/ProductsSearchBar/ProductsSearchBar";
import Products from "../../../../components/PosProducts/Products/Products";
import CustomTabs from "../../../../components/PosClient/CustomTabs";
import ClientHeader from "../../../../components/PosClient/ClientHeader";
import SearchDropDownList from "../../../../components/PosClient/SearchDropDownList/SearchDropDownList";
import BarCodeScanner from "../../../../components/PosClient/BarCodeScanner";
import AddUserDialog from "../../../../components/UI/Form/FormDialog";
import usePosHook from "./usePosHook";
import ProductsOrders from "../../../../components/PosClient/ProductsOrders/ProductsOrders";
import { connect } from "react-redux";
import * as usersActions from "../../../../store/actions/users";
import User from "../../../../Models/User";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rowRoot: {
      flexGrow: 1,
      width: "100%",
      height: "160vh",
      padding: theme.spacing(2),
      alignItems: "center",
      overflow: "hidden",
    },
    columnRoot: {
      flexGrow: 1,
      width: "100%",
      height: "320vh",
      padding: theme.spacing(2),
      flexDirection: "column",
    },
    paper1: {
      backgroundColor: "#555",
      width: "100%",
      height: "100%",
    },
    paper2: {
      width: "100%",
      height: "100%",
      backgroundColor: "#555",
      overflow: "auto",
    },
    rowGridItemContainer1: {
      width: "40%",
      height: "100%",
    },
    rowGridItemContainer2: {
      width: "60%",
      height: "100%",
    },
    columnGridItemContainer: {
      width: "100%",
      height: "50%",
    },
    container: {
      width: "100%",
      backgroundColor: "black",
      overflowX: "hidden",
    },
  })
);
interface PosProps {
  users: User[];
  onInitUsers: () => void;
  loadingUsers: boolean;
  onAddUser: (user: User, users: User[]) => void;
}
const Pos = (props: PosProps) => {
  const {
    handleCloseAddClient,
    handleOpenAddClient,
    handleSubmitAddClient,
    openAddClientDialog,
    options,
    userNameRef,
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    repeatPasswordRef,
    uploadImageHandler,
    role,
    handleRoleChange,
  } = usePosHook(props);
  const tabletOrientation = useMediaQuery(`(max-width:${BreakPoints.MD})`);
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <AddUserDialog
        open={openAddClientDialog}
        handleCloseDialog={handleCloseAddClient}
        handleDialogSubmit={(event) => handleSubmitAddClient(event)}
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
          handleDialogClose={handleCloseAddClient}
        />
      </AddUserDialog>
      <Grid
        container
        className={tabletOrientation ? classes.columnRoot : classes.rowRoot}
        spacing={2}
        justify="center"
      >
        <Grid
          item
          className={
            tabletOrientation
              ? classes.columnGridItemContainer
              : classes.rowGridItemContainer1
          }
        >
          <Paper className={classes.paper1}>
            <ClientHeader openAddUserDialog={handleOpenAddClient} />
            <SearchDropDownList options={options} />
            <BarCodeScanner />
            <ProductsOrders />
          </Paper>
        </Grid>
        <Grid
          item
          className={
            tabletOrientation
              ? classes.columnGridItemContainer
              : classes.rowGridItemContainer2
          }
        >
          <Paper className={classes.paper2}>
            <CategoriesTab />
            <Products />
          </Paper>
        </Grid>
      </Grid>
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
    onAddUser: (user: User, users: User[]) =>
      dispatch(usersActions.addUser(user, users)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pos);
