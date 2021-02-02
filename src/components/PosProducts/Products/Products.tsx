import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../../../Models/Product/Product";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";
import ProductOrderModel from "../../../Models/Product/ProductOrder";
import ProductItem from "./ProductItem";
import axios from "axios";
import Order from "../../../Models/Product/Order";
import Spinner from "../../UI/Spinner/Spinner";
interface ProductModel extends Product {
  _id: string;
}
interface State {
  products: ProductModel[];
}
interface Props {
  products: ProductModel[];
  addToProductsOrder: (productOrder: Order) => void;
  loading: boolean;
}
class Products extends React.Component<Props, State> {
  state = {
    products: [],
  };
  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Grid container>
        {" "}
        {this.props.products.map((product: ProductModel) => {
          console.log(product.description);
          return (
            <ProductItem
              product={product}
              productImageUrl={`${axios.defaults.baseURL}${product.productImage}`}
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
const mapStateToProps = (state) => {
  return {
    products: state.products.selectedProductsByCategoryName,
    loading: state.products.loading,
  };
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
