import React from "react";
import { styled, Grid, Dialog, IconButton } from "@material-ui/core";
import ProductOrder from "./ProductOrder";
import { connect } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import Order from "../../../Models/Product/Order";
import ProductOrderModel from "../../../Models/Product/ProductOrder";
import * as actionTypes from "../../../store/actions/actionTypes";
import * as ordersActions from "../../../store/actions/orders";
import * as checkoutsActions from "../../../store/actions/checkouts";
import Checkout from "../../../Models/Checkout";
interface State {}
interface Props {
  productsOrders: ProductOrderModel[];
  deleteOrderById: (orderId: string) => void;
  incrementProductOrder: (order: Order) => void;
  decrementProductOrder: (productOrderId: string) => void;
  clearOrders: () => void;
  onAddCheckout: (checkout: Checkout, checkouts: Checkout[]) => void;
  checkouts: Checkout[];
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
  fontFamily: "'Montserrat',sans-serif",
  color: "#33b2e5",
});
const LabelsHeader = styled(Grid)({
  marginTop: "4%",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});
const PaymentDetails = styled(Grid)({
  color: "#33b2e5",
  backgroundColor: "white",
  width: "100%",
  marginTop: "2em",
});
const PaymentRow = styled(Grid)({
  display: "flex",
  width: "100%",
});
const PaymentCell = styled(Grid)({
  width: "50%",
  border: "1px solid #555",
  padding: "0.5em",
});
const PaymentButtons = styled(Grid)({
  width: "100%",
  display: "flex",
  marginTop: "5%",
  height: "4em",
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
const EmptyGrid = styled(Grid)({
  backgroundColor: "#e8e8e8",
  width: "100%",
  height: "100%",
  borderRadius: "0.5em",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "7%",
});
const OrdersContainer = styled(Grid)({
  marginBottom: "5em",
});
const CloseGrid = styled(Grid)({
  color: "white",
  width: "45%",
  backgroundColor: "red",
  textAlign: "center",
  margin: "auto",
  height: "100%",
  borderRadius: "1em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5em",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
  },
});
const PaymentGrid = styled(Grid)({
  color: "white",
  width: "45%",
  backgroundColor: "green",
  textAlign: "center",
  margin: "auto",
  height: "100%",
  borderRadius: "1em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5em",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
  },
});
const CheckoutGrid = styled(Grid)({
  width: "25em",
  height: "15em",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  padding: "2em",
});
const DetailsGrid = styled(Grid)({
  fontSize: "1.2em",
});
const CheckoutButton = styled(Grid)({
  width: "7em",
  height: "3em",
  backgroundColor: "#33b2e5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.5em",
  color: "white",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "green",
  },
});
const RowGrid = styled(Grid)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});
const CloseOrderDialogIcon = styled(CloseIcon)({
  fontSize: "2em",
  "&:hover": {
    color: "red",
    cursor: "pointer",
  },
});
const DialogHeader = styled("h1")({
  color: "#33b2e5",
  marginRight: "5em",
});
class ProductsList extends React.Component<Props, State> {
  state = {
    openDialog: false,
  };
  openCheckoutOrderDialog = () => {
    this.setState({ openDialog: true });
  };
  closeCheckoutOrderDialog = () => {
    this.setState({ openDialog: false });
  };
  handleCheckout = (
    total: number,
    itemsNumber: number,
    productsOrders: ProductOrderModel[]
  ) => {
    const checkout: Checkout = {
      checkoutId: Date.now(),
      clientName: "",
      barCodeScanner: "",
      productsOrders: productsOrders,
      total: total,
      itemsNumber: itemsNumber,
    };
    this.props.onAddCheckout(checkout, this.props.checkouts);
    this.props.clearOrders();
    this.closeCheckoutOrderDialog();
  };
  render() {
    let total = 0;
    let quantity = 0;
    return (
      <ProductsOrdersContainer container>
        {this.props.productsOrders.length === 0
          ? null
          : this.props.productsOrders.map((order: ProductOrderModel) => {
              total += order.price * order.quantity;
              quantity += order.quantity;
            })}
        <Dialog
          open={this.state.openDialog}
          onClose={this.closeCheckoutOrderDialog}
        >
          <CheckoutGrid>
            <RowGrid>
              <DialogHeader>Orders Sheet</DialogHeader>
              <CloseOrderDialogIcon onClick={this.closeCheckoutOrderDialog} />
            </RowGrid>

            <DetailsGrid>Total Price : {total}</DetailsGrid>
            <DetailsGrid>Items Ordered No. {quantity}</DetailsGrid>
            <CheckoutButton
              onClick={() =>
                this.handleCheckout(total, quantity, this.props.productsOrders)
              }
            >
              Checkout
            </CheckoutButton>
          </CheckoutGrid>
        </Dialog>
        {this.props.productsOrders.length === 0 ? null : (
          <LabelsHeader>
            <LabelSpan>Product</LabelSpan>
            <LabelSpan>Price</LabelSpan>
            <LabelSpan>Quantity</LabelSpan>
            <LabelSpan>Total</LabelSpan>
          </LabelsHeader>
        )}
        <Orders>
          {this.props.productsOrders.length === 0 ? (
            <EmptyGrid>Empty Orders List</EmptyGrid>
          ) : (
            <OrdersContainer>
              {this.props.productsOrders.map(
                (productOrder: ProductOrderModel) => {
                  return (
                    <ProductOrder
                      productName={productOrder.productName}
                      price={productOrder.price}
                      quantity={productOrder.quantity}
                      total={productOrder.quantity * productOrder.price}
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
                }
              )}
            </OrdersContainer>
          )}
        </Orders>
        <>
          <PaymentDetails>
            <PaymentRow>
              <PaymentCell>No. Items Ordered</PaymentCell>
              <PaymentCell>{quantity}</PaymentCell>
            </PaymentRow>
            <PaymentRow>
              <PaymentCell>Total</PaymentCell>
              <PaymentCell>{total}</PaymentCell>
            </PaymentRow>
          </PaymentDetails>
          <PaymentButtons>
            <CloseGrid onClick={this.props.clearOrders}>Clear</CloseGrid>
            <PaymentGrid onClick={this.openCheckoutOrderDialog}>
              Payment
            </PaymentGrid>
          </PaymentButtons>
        </>
      </ProductsOrdersContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productsOrders: state.orders.productsOrders,
    checkouts: state.checkouts.checkouts,
  };
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
    clearOrders: () => dispatch(ordersActions.clearOrders()),
    onAddCheckout: (checkout: Checkout, checkouts: Checkout[]) =>
      dispatch(checkoutsActions.addCheckout(checkout, checkouts)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
