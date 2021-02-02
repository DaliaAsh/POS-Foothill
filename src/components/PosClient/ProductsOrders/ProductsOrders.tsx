import React from "react";
import { styled, Grid } from "@material-ui/core";
import ProductOrder from "./ProductOrder";
import { connect } from "react-redux";
import Order from "../../../Models/Product/Order";
import ProductOrderModel from "../../../Models/Product/ProductOrder";
import * as actionTypes from "../../../store/actions/actionTypes";
interface State {}
interface Props {
  productsOrders: ProductOrderModel[];
  deleteOrderById: (orderId: string) => void;
  incrementProductOrder: (order: Order) => void;
  decrementProductOrder: (productOrderId: string) => void;
}
const ProductsOrdersContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  width: "90%",
  height: "100%",
  marginLeft: "5%",
});
const LabelSpan = styled("span")({
  fontWeight: "bold",
  fontSize: "1em",
  marginLeft: "10%",
});
const LabelsHeader = styled(Grid)({
  marginTop: "4%",
  width: "100%",
});
const Orders = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  height: "50%",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    height: "0.9em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 5px grey",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#777",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#444 ",
  },
});
class ProductsList extends React.Component<Props, State> {
  render() {
    return (
      <ProductsOrdersContainer container>
        <LabelsHeader>
          <LabelSpan>Product</LabelSpan>
          <LabelSpan>Price</LabelSpan>
          <LabelSpan>Quantity</LabelSpan>
          <LabelSpan>Total</LabelSpan>
        </LabelsHeader>
        <Orders>
          {this.props.productsOrders.map((productOrder: ProductOrderModel) => {
            return (
              <ProductOrder
                productName={productOrder.productName}
                price={productOrder.price}
                quantity={productOrder.quantity}
                total={productOrder.total}
                key={productOrder.id}
                onDeleteOrderHandler={() =>
                  this.props.deleteOrderById(productOrder.id)
                }
                onIncrementProductOrder={() =>
                  this.props.incrementProductOrder({
                    productName: productOrder.productName,
                    price: productOrder.price,
                  })
                }
                onDecrementProductOrder={() =>
                  this.props.decrementProductOrder(productOrder.id)
                }
              />
            );
          })}
        </Orders>
      </ProductsOrdersContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return { productsOrders: state.orders.productsOrders };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrderById: (productOrderId) =>
      dispatch({
        type: actionTypes.DELETE_PRODUCT_ORDER,
        productOrderId: productOrderId,
      }),
    incrementProductOrder: (order) =>
      dispatch({
        type: actionTypes.INCREMENT_PRODUCT_ORDER,
        newProductOrder: order,
      }),
    decrementProductOrder: (orderId) =>
      dispatch({
        type: actionTypes.DECREMENT_PRODUCT_ORDER,
        productOrderId: orderId,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
