import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import Checkout from "../../Models/Checkout";
interface State {
  checkouts: Checkout[];
}
interface Action {
  type: string;
  checkouts: Checkout[];
}
const initialState: State = {
  checkouts: [],
};
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_CHECKOUT:
      return updateObject(state, { checkouts: action.checkouts });
    default:
      return state;
  }
};
export default reducer;
