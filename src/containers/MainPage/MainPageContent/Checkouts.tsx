import React, { useEffect } from "react";
import Spinner from "../../../components/UI/Spinner/Spinner";
import * as checkoutsActions from "../../../store/actions/checkouts";
import { Grid, createStyles, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import Checkout from "../../../Models/Checkout";
import CheckoutCard from "../../../components/UI/Checkout";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "120vh",
      backgroundColor: `rgb(3,4,5)`,
      display: "flex",
      flexWrap: "wrap",
      overflow: "auto",
    },
  })
);
interface CheckoutsProps {
  loadingCheckouts: boolean;
  onInitCheckouts: () => void;
  checkouts: Checkout[];
}
const Checkouts = (props: CheckoutsProps) => {
  console.log("checkouts page");
  useEffect(() => {
    props.onInitCheckouts();
  }, []);
  const classes = useStyles();
  if (props.loadingCheckouts) {
    return <Spinner />;
  }
  return (
    <Grid className={classes.root}>
      {props.checkouts.map((checkout: Checkout) => {
        return <CheckoutCard checkout={checkout} />;
      })}
    </Grid>
  );
};
const mapStateToProps = (state) => {
  return {
    checkouts: state.checkouts.checkouts,
    loadingCheckouts: state.checkouts.loadingCheckouts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitCheckouts: () => dispatch(checkoutsActions.fetchCheckouts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkouts);
