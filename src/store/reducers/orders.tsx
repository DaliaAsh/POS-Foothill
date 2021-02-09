import Category from "../../Models/Category/Category";
import Product from "../../Models/Product/Product";
import ProductOrderModel from "../../Models/Product/ProductOrder";
import Order from "../../Models/Product/Order";
import { updateObject } from "../utility";
import * as actionTypes from "../actions/actionTypes";
interface State {
  productsOrders: ProductOrderModel[];
}
interface IncrementProductOrder {
  type: string;
  newProductOrder: Order;
}
interface DecrementProductOrder {
  type: string;
  productOrderId: string;
}
interface DeleteProductOrder {
  type: string;
  productOrderId: string;
}
interface ProductModel extends Product {
  _id: string;
}
type Action =
  | IncrementProductOrder
  | DecrementProductOrder
  | DeleteProductOrder;

const initialState: State = {
  productsOrders: [],
};
const addNewProductOrder = (newOrder: Order, state: State) => {
  const newProductOrder: ProductOrderModel = {
    ...newOrder,
    quantity: 1,
    id: `${Date.now()}${newOrder.productName}`,
  };
  return state.productsOrders.concat(newProductOrder);
};
const updateIncrementProductOrder = (existOrder: Order, state: State) => {
  const oldProductOrderIndex: number = state.productsOrders.findIndex(
    (productOrder) => {
      return productOrder.productName === existOrder.productName;
    }
  );
  const oldProductOrder = state.productsOrders[oldProductOrderIndex];
  const newProductOrder: ProductOrderModel = {
    productName: oldProductOrder.productName,
    price: oldProductOrder.price,
    quantity: oldProductOrder.quantity + 1,
    id: oldProductOrder.id,
  };
  const updatedOrdersArray = [...state.productsOrders];
  updatedOrdersArray.splice(oldProductOrderIndex, 1, newProductOrder);
  return updatedOrdersArray;
};

const deleteProductOrderById = (productOrderId: string, state: State) => {
  return state.productsOrders.filter((productOrder: ProductOrderModel) => {
    return productOrder.id !== productOrderId;
  });
};
const checkProductOrder = (order: Order, state: State, actionType: string) => {
  const filterOrders = state.productsOrders.filter(
    (productOrder: ProductOrderModel) => {
      return productOrder.productName === order.productName;
    }
  );
  if (filterOrders.length === 0) {
    return addNewProductOrder(order, state);
  } else {
    return updateIncrementProductOrder(order, state);
  }
};
const decrementProductOrder = (productOrderId: string, state: State) => {
  const oldProductOrderIndex: number = state.productsOrders.findIndex(
    (productOrder) => {
      return productOrder.id === productOrderId;
    }
  );
  const oldProductOrder = state.productsOrders[oldProductOrderIndex];
  if (oldProductOrder.quantity === 1) {
    return deleteProductOrderById(productOrderId, state);
  }
  const newProductOrder: ProductOrderModel = {
    productName: oldProductOrder.productName,
    price: oldProductOrder.price,
    quantity: oldProductOrder.quantity - 1,
    id: oldProductOrder.id,
  };
  const updatedOrdersArray = [...state.productsOrders];
  updatedOrdersArray.splice(oldProductOrderIndex, 1, newProductOrder);
  return updatedOrdersArray;
};
const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_PRODUCT_ORDER:
      const newProductsOrdersAfterAdd = checkProductOrder(
        (action as IncrementProductOrder).newProductOrder,
        state,
        action.type
      );
      return { ...state, productsOrders: newProductsOrdersAfterAdd };
      break;
    case actionTypes.DECREMENT_PRODUCT_ORDER:
      const newProductsOrdersAfterRemove = decrementProductOrder(
        (action as DecrementProductOrder).productOrderId,
        state
      );
      return { ...state, productsOrders: newProductsOrdersAfterRemove };
      break;
    case actionTypes.DELETE_PRODUCT_ORDER:
      const newProductsOrdersAfterDelete = deleteProductOrderById(
        (action as DeleteProductOrder).productOrderId,
        state
      );
      return { ...state, productsOrders: newProductsOrdersAfterDelete };
      break;
    case actionTypes.CLEAR_ORDERS:
      return updateObject(state, { productsOrders: [] });
  }
  return state;
};

export default reducer;
