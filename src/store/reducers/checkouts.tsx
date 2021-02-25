import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import Checkout from "../../Models/Checkout";
interface State {
  checkouts: Checkout[];
  loadingCheckouts: boolean;
}
interface Action {
  type: string;
  checkouts: Checkout[];
}
const initialState: State = {
  checkouts: [],
  loadingCheckouts: true,
};
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_CHECKOUT:
      return updateObject(state, {
        checkouts: action.checkouts,
        loadingCheckouts: false,
      });

    case actionTypes.FETCH_CHECKOUTS:
      return updateObject(state, {
        checkouts: action.checkouts,
        loadingCheckouts: false,
      });
    default:
      return state;
  }
};
export default reducer;
