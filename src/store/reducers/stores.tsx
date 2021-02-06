import * as actionTypes from "../actions/actionTypes";
import Store from "../../Models/Store";
import { updateObject } from "../utility";
interface State {
  stores: Store[];
}
interface Action {
  type: string;
  stores: Store[];
}
const initialState: State = {
  stores: [],
};
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_STORE: {
      return updateObject(state, { stores: action.stores });
    }

    case actionTypes.FETCH_STORES: {
      return updateObject(state, { stores: action.stores });
    }
    default:
      return state;
  }
};
export default reducer;
