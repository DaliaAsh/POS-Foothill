import React from "react";
import {
  Paper,
  Grid,
  makeStyles,
  createStyles,
  Theme,
  IconButton,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import classes from "*.module.css";
interface ProductOrderProps {
  productName: string;
  price: number;
  quantity: number;
  total: number;
  onDeleteOrderHandler: () => void;
  onIncrementProductOrder: () => void;
  onDecrementProductOrder: () => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      height: "5em",
    },
    productOrder: {
      width: "100%",
      height: "50%",
    },
    productOrderPaper: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-around",
      marginTop: "5%",
      alignItems: "center",
    },
    cancelIcon: {
      color: "red",
      opacity: "0.5",
      "&:hover": {
        opacity: "1",
      },
    },
    productName: {},
    productPrice: {},
    productQuantity: {
      display: "flex",
      alignItems: "center",
    },
    productTotal: {},
  })
);
const ProductOrder = (props: ProductOrderProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid className={classes.productOrder} item>
        <Paper className={classes.productOrderPaper}>
          <Grid className={classes.productName}>
            <IconButton onClick={props.onDeleteOrderHandler}>
              <CancelIcon className={classes.cancelIcon} />
            </IconButton>
            {props.productName}
          </Grid>
          <Grid className={classes.productPrice}>{props.price}</Grid>
          <Grid className={classes.productQuantity}>
            <IconButton onClick={props.onDecrementProductOrder}>
              <RemoveIcon />
            </IconButton>
            {props.quantity}
            <IconButton onClick={props.onIncrementProductOrder}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid className={classes.productTotal}>{props.total}</Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default ProductOrder;
