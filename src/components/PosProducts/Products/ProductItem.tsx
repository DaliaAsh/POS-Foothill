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
interface ProductItemProps {
  product: Product;
  productImageUrl: string;
  addProductOrder: () => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: "12em",
      height: "12em",
      backgroundColor: "#33b2e5",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      marginTop: "2em",
      marginLeft: "2em",
    },
    imageGrid: {
      backgroundSize: "cover",
      width: "100%",
      height: "100%",
    },
    productDetails: {
      width: "60%",
      height: "45%",
      position: "absolute",
      top: "50%",
      zIndex: 1,
      backgroundColor: "#fffe",
      boxShadow: "0em 0em 0.5em 0.05em #bbb",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
    productPrice: { fontWeight: "bold", fontSize: "1.5em" },
    productName: {},
    productDescription: {},
  })
);
const ProductItem = (props: ProductItemProps) => {
  console.log(props.productImageUrl);
  const classes = useStyles();
  return (
    <MenuItem onClick={props.addProductOrder} className={classes.card}>
      <Grid
        className={classes.imageGrid}
        style={{
          backgroundImage: `url(${JSON.stringify(props.productImageUrl)}`,
        }}
      ></Grid>
      <Grid className={classes.productDetails}>
        <Grid className={classes.productPrice}>{props.product.price}$</Grid>
        <Grid className={classes.productName}>{props.product.name}</Grid>
        <Grid className={classes.productDescription}>
          {props.product.description}
        </Grid>
      </Grid>
    </MenuItem>
  );
};
export default ProductItem;
