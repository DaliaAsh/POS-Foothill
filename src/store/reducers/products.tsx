import { ProductRowModel } from "../../Models/Product/ProductRowModel";
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
interface ProductModel extends ProductRowModel {
  _id: string;
}
interface FetchProductAction {
  type: string;
  products: ProductModel[];
  selectedProducts: ProductModel[];
}
interface State {
  products: ProductModel[];
  loading: boolean;
  selectedProductsByCategoryName: ProductModel[];
}

const initialState: State = {
  products: [],
  loading: true,
  selectedProductsByCategoryName: [],
};
const reducer = (state: State = initialState, action: FetchProductAction) => {
  switch (action.type) {
    case actionTypes.PUSH_PRODUCTS_BY_CATEGORY:
      return updateObject(state, {
        selectedProductsByCategoryName: action.selectedProducts,
        loading: false,
      });
    case actionTypes.ADD_PRODUCT:
      return updateObject(state, { products: action.products, loading: false });
    case actionTypes.FETCH_PRODUCTS:
      return updateObject(state, { products: action.products, loading: false });
    case actionTypes.DELETE_PRODUCT:
      return updateObject(state, { products: action.products, loading: false });
  }
  return state;
};

export default reducer;
