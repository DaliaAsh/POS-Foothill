import React, { useEffect } from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import { connect } from "react-redux";
import * as productsActions from "../../store/actions/products";
import ProductFields from "../../Models/Product/Product";
import Product from "./Product";
interface ProductModel extends ProductFields {
  _id: string;
}
interface ProductsPageProps {
  products: ProductModel[];
  onInitProducts: () => void;
}
const useStyles = makeStyles(() =>
  createStyles({
    header: {
      color: "#0170ff",
      marginLeft: "5%",
      marginTop: "5%",
      fontWeight: 1000,
      fontSize: "2.5em",
    },
    productsGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "left",
      "@media(max-width:680px)": {
        justifyContent: "center",
      },
    },
  })
);
const ProductsPage = (props: ProductsPageProps) => {
  useEffect(() => {
    props.onInitProducts();
  }, []);
  console.log(props.products);
  const classes = useStyles();
  return (
    <>
      <Grid>
        <Grid className={classes.header}>Products</Grid>
        <Grid className={classes.productsGrid}>
          {props.products.map((product: ProductModel) => {
            return <Product product={product} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitProducts: () => dispatch(productsActions.fetchProducts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
