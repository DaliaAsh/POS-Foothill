import React from "react";
import SettingsOptions from "../SettingsOptions/SettingsOptions";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import AddButton from "../../UI/AddButton/AddButton";
import AddStoreDialog from "../../UI/Form/FormDialog";
import useStores from "./useStores";
import * as storesActions from "../../../store/actions/stores";
import { connect } from "react-redux";
import Store from "../../../Models/Store";
import StoresGrid from "../../../components/CustomGrid/CustomGrid";
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
interface StoresProps {
  stores: Store[];
  onAddStore: (store: Store, stores: Store[]) => void;
  onInitStores: () => void;
}
const Stores = (props: StoresProps) => {
  const classes = useStyles();
  const {
    handleOpenAddStoreDialog,
    openStoreDialog,
    closeDialogHandler,
    submitDialogHandler,
    storeNameRef,
    emailRef,
    countryRef,
    cityRef,
    storePhoneRef,
  } = useStores(props);
  return (
    <>
      <AddStoreDialog
        open={openStoreDialog}
        handleCloseDialog={closeDialogHandler}
        handleDialogSubmit={(event) => submitDialogHandler(event)}
        title="Add Store"
      >
        <AddStoreDialog.TextInput
          inputLabel="Store Name"
          inputValue={storeNameRef}
        />

        <AddStoreDialog.TextInput inputLabel="Email" inputValue={emailRef} />
        <AddStoreDialog.NumberInput
          inputLabel="Phone Number"
          inputValue={storePhoneRef}
        />
        <AddStoreDialog.TextInput
          inputLabel="Country"
          inputValue={countryRef}
        />
        <AddStoreDialog.TextInput inputLabel="City" inputValue={cityRef} />

        <AddStoreDialog.SubmitCloseButtons
          handleDialogClose={closeDialogHandler}
        />
      </AddStoreDialog>
      <SettingsOptions />
      <Grid className={classes.usersContainer}>
        <AddButton marginLeft="5%" onClick={handleOpenAddStoreDialog}>
          Add Store
        </AddButton>
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    stores: state.stores.stores,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddStore: (store: Store, stores: Store[]) =>
      dispatch(storesActions.addStore(store, stores)),
    onInitStores: () => dispatch(storesActions.fetchStores()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Stores);
