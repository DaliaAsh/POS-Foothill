import React from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import Checkout from "../../Models/Checkout";
import ProductOrder from "../../Models/Product/ProductOrder";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "14em",
      height: "5em",
      background: "white",
      margin: "1em auto",
      color: "black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1em",
    },
    total: {
      fontSize: "2em",
    },
    firstSection: {
      borderRight: "1px solid black",
      margin: "auto",
    },
  })
);
interface CheckoutProps {
  checkout: Checkout;
}
const CheckoutCard = (props: CheckoutProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} key={props.checkout.checkoutId}>
      <Grid className={classes.firstSection}>
        <Grid>{props.checkout.itemsNumber}</Grid>
        <Grid>
          {props.checkout.productsOrders.map((productOrder: ProductOrder) => {
            return (
              <Grid key={productOrder.id}>
                {productOrder.productName} , {productOrder.price}$
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Grid className={classes.total}>{props.checkout.total}$</Grid>
    </Grid>
  );
};
export default CheckoutCard;
