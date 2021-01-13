import React from "react";
import {
  ListItem,
  makeStyles,
  createStyles,
  Theme,
  Grid,
  MenuItem,
} from "@material-ui/core";
import Product from "../../../Models/Product/Product";
import Order from "../../../Models/Product/Order";
interface ProductItemProps {
  product: Product;
  productImageUrl: string;
  addProductOrder: () => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: "9em",
      height: "9em",
      margin: "1em",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "0.5em",
      backgroundPosition: "center",
      opacity: "0.5",
      justifyContent: "center",
      "&:hover": {
        cursor: "pointer",
        opacity: "1",
        transition: "all 0.5s",
        "& $childInformation": {
          display: "block",
          fontSize: "2em",
          fontWeight: "bold",
          textAlign: "center",
          color: "#333",
          padding: "1em",
        },
      },
    },
    childInformation: {
      display: "none",
    },
  })
);
const ProductItem = (props: ProductItemProps) => {
  console.log(props.productImageUrl);
  const classes = useStyles();
  return (
    <MenuItem
      onClick={props.addProductOrder}
      style={{
        backgroundImage: `url(${JSON.stringify(props.productImageUrl)}`,
      }}
      className={classes.card}
    >
      <Grid item className={classes.childInformation}>
        <Grid> {props.product.name}</Grid>
        <Grid> {props.product.price}$</Grid>
      </Grid>
    </MenuItem>
  );
};
export default ProductItem;
/*   */
