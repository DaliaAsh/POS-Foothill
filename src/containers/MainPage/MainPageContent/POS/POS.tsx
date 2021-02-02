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
import PosPageContainer from "../../../../components/UI/PageContainer/PageContainer";
import CategoriesTab from "../../../../components/PosProducts/CategoriesTab/CategoriesTab";
import ProductsSearchBar from "../../../../components/PosProducts/ProductsSearchBar/ProductsSearchBar";
import Products from "../../../../components/PosProducts/Products/Products";
import CustomTabs from "../../../../components/PosClient/CustomTabs";
import ClientHeader from "../../../../components/PosClient/ClientHeader";
import SearchDropDownList from "../../../../components/PosClient/SearchDropDownList/SearchDropDownList";
import BarCodeScanner from "../../../../components/PosClient/BarCodeScanner";
import AddClientDialog from "../../../../components/UI/Form/FormDialog";
import usePosHook from "./usePosHook";
import ProductsOrders from "../../../../components/PosClient/ProductsOrders/ProductsOrders";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rowRoot: {
      flexGrow: 1,
      width: "100%",
      padding: theme.spacing(2),
      alignItems: "center",
      overflow: "hidden",
    },
    columnRoot: {
      flexGrow: 1,
      width: "100%",
      height: "200vh",
      padding: theme.spacing(2),
      flexDirection: "column",
    },
    paper1: {
      backgroundColor: "#ecf0f1",
      width: "100%",
      height: "100%",
    },
    paper2: {
      width: "100%",
      height: "100%",
      padding: theme.spacing(1),
      backgroundColor: "#ecf0f1",
    },
    rowGridItemContainer1: {
      width: "40%",
      height: "100vh",
    },
    rowGridItemContainer2: {
      width: "60%",
      height: "100vh",
    },
    columnGridItemContainer: {
      width: "100%",
      height: "50%",
    },
  })
);
const Pos = (props) => {
  const {
    handleCloseAddClient,
    handleOpenAddClient,
    handleSubmitAddClient,
    openAddClientDialog,
    loading,
  } = usePosHook();
  const tabletOrientation = useMediaQuery(`(max-width:${BreakPoints.MD})`);
  const classes = useStyles();
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <PosPageContainer>
        <AddClientDialog
          title="Add Customer"
          handleCloseDialog={handleCloseAddClient}
          handleDialogSubmit={handleSubmitAddClient}
          open={openAddClientDialog}
        >
          <AddClientDialog.TextInput
            inputLabel="Customer Name"
            inputValue={null}
          />
        </AddClientDialog>
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
              <ClientHeader />
              <SearchDropDownList options={["daloa", "dah", "yeg"]} />
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
      </PosPageContainer>
    );
  }
};
export default Pos;
