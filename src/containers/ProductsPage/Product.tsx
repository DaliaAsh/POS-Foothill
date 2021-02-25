import React from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import ProductFields from "../../Models/Product/Product";
import axios from "axios";
interface ProductModel extends ProductFields {
  _id: string;
}
interface ProductProps {
  product: ProductModel;
}
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "10em",
      height: "15em",
      margin: "2em",
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    },
    name: {
      color: "#0170ff",
      fontWeight: 1000,
      textTransform: "capitalize",
      fontSize: "1.5em",
      marginLeft: "5%",
      marginTop: "5%",
    },
    image: { width: "100%", height: "60%" },
    information: {},
  })
);
const Product = (props: ProductProps) => {
  const classes = useStyles(props);
  console.log(`${axios.defaults.baseURL}${props.product.productImage}`);
  return (
    <Grid className={classes.root} key={props.product.id}>
      <Grid className={classes.image}>
        <img
          src={`${axios.defaults.baseURL}${props.product.productImage}`}
          width="100%"
          height="100%"
        />
      </Grid>
      <Grid className={classes.information}>
        <Grid className={classes.name}>{props.product.name}</Grid>
        <Grid>{props.product.description}</Grid>
        <Grid>{props.product.price}$</Grid>
      </Grid>
    </Grid>
  );
};
export default Product;
