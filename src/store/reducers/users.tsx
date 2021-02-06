import * as actionTypes from "../actions/actionTypes";
import User from "../../Models/User";
import { updateObject } from "../utility";
interface State {
  users: User[];
}
interface Action {
  type: string;
  users: User[];
}
const initialState: State = {
  users: [],
};
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_USER: {
      return updateObject(state, { users: action.users });
    }

    case actionTypes.FETCH_USERS: {
      return updateObject(state, { users: action.users });
    }
    default:
      return state;
  }
};
export default reducer;
