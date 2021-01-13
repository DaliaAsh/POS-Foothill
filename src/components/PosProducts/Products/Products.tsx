import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../../../Models/Product/Product";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import ProductOrderModel from "../../../Models/Product/ProductOrder";
import ProductItem from "./ProductItem";
import axios from "axios";
import Order from "../../../Models/Product/Order";
interface ProductModel extends Product {
  _id: string;
}
interface State {
  products: ProductModel[];
}
interface Props {
  products: ProductModel[];
  addToProductsOrder: (productOrder: Order) => void;
}
class Products extends React.Component<Props, State> {
  state = {
    products: [],
  };
  render() {
    return (
      <Grid container>
        {" "}
        {this.props.products.map((product: ProductModel) => {
          return (
            <ProductItem
              product={product}
              productImageUrl={`${axios.defaults.baseURL}/${product.productImage}`}
              key={product.id}
              addProductOrder={() =>
                this.props.addToProductsOrder({
                  productName: product.name,
                  price: product.price,
                })
              }
            />
          );
        })}
      </Grid>
    );
  }
}
const mapStateToProps = (state: State) => {
  return { products: state.products };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToProductsOrder: (productOrder) =>
      dispatch({
        type: actionTypes.INCREMENT_PRODUCT_ORDER,
        newProductOrder: productOrder,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
