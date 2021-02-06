import * as actionTypes from "./actionTypes";
import axios from "axios";
import Store from "../../Models/Store";
export const setStores = (stores: Store[]) => {
  return { type: actionTypes.FETCH_STORES, stores: stores };
};
export const fetchStores = () => {
  return (dispatch) => {
    axios.get("store").then((result) => {
      console.log(result.data.stores);
      dispatch(setStores(result.data.stores));
    });
  };
};
export const addStoreHandler = (stores: Store[]) => {
  return { type: actionTypes.ADD_STORE, stores: stores };
};
export const addStore = (store: Store, stores: Store[]) => {
  const storeFormData: FormData = new FormData();
  storeFormData.append("storeId", JSON.stringify(store.storeId));
  storeFormData.append("city", store.city);
  storeFormData.append("country", store.country);
  storeFormData.append("phoneNumber", JSON.stringify(store.storePhone));
  storeFormData.append("storeName", store.storeName);

  let updatedStores: Store[] = [...stores, store];
  return (dispatch) => {
    axios
      .post("store", storeFormData)
      .then(() => {
        dispatch(addStoreHandler(updatedStores));
        console.log("add store");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
