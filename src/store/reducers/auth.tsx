import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import Auth from "../../Models/Auth";

interface Action {
  type: string;
  authData: Auth;
}
interface State {
  authData: Auth;
}
const initialState: State = {
  authData: null,
};
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_ADMIN:
      return updateObject(state, {
        authData: action.authData,
      });
    case actionTypes.SIGN_IN_ADMIN:
      return updateObject(state, {
        isUserAuthorized: true,
        authData: action.authData,
      });
    default:
      return state;
  }
};
export default reducer;
