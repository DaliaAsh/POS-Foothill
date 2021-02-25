import * as actionTypes from "./actionTypes";
import axios from "axios";
import Checkout from "../../Models/Checkout";
export const addCheckoutHandler = (checkouts: Checkout[]) => {
  return { type: actionTypes.ADD_CHECKOUT, checkouts: checkouts };
};
export const addCheckout = (checkout: Checkout, checkouts: Checkout[]) => {
  return (dispatch) => {
    const updatedCheckouts: Checkout[] = [...checkouts, checkout];
    axios
      .post("checkout", checkout)
      .then(() => {
        dispatch(addCheckoutHandler(updatedCheckouts));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchCheckoutsHandler = (checkouts: Checkout[]) => {
  return { type: actionTypes.FETCH_CHECKOUTS, checkouts: checkouts };
};
export const fetchCheckouts = () => {
  return (dispatch) => {
    axios
      .get("checkout")
      .then((result) => {
        console.log(result.data.checkouts);
        dispatch(fetchCheckoutsHandler(result.data.checkouts));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
