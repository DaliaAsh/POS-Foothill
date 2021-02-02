import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import { CategoryRowModel } from "../../Models/Category/CategoryRowModel";
interface CategoriesReducerState {
  categories: CategoryRowModel[];
  loading: boolean;
}
interface CategoriesReducerAction {
  type: string;
  categories: CategoryRowModel[];
  categoryId: number;
}
const initialState: CategoriesReducerState = {
  categories: null,
  loading: true,
};
const reducer = (state = initialState, action: CategoriesReducerAction) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return updateObject(state, {
        loading: true,
      });
    case actionTypes.SET_CATEGORIES:
      return updateObject(state, {
        categories: action.categories,
        loading: false,
      });

    case actionTypes.DELETE_CATEGORY:
      return updateObject(state, { categories: action.categories });

    case actionTypes.EDIT_CATEGORY:
      return updateObject(state, {});
    case actionTypes.ADD_CATEGORY:
      return updateObject(state, { categories: action.categories });
    default:
      return state;
  }
};
export default reducer;
