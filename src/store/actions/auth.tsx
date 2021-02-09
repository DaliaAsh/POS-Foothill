import * as actionTypes from "./actionTypes";
import Auth from "../../Models/Auth";
import SignInAuth from "../../Models/SignInAuth";
import axios from "axios";
export const signUpAdminHandler = (authData: Auth) => {
  return { type: actionTypes.SIGN_UP_ADMIN, authData: authData };
};
export const signUpAdmin = (authData: Auth) => {
  return (dispatch) => {
    return axios
      .post("admin", authData)
      .then(() => {
        localStorage.setItem("isUserAuthorized", "true");
        dispatch(signUpAdminHandler(authData));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const signInAdminHandler = (signInAuthData: Auth) => {
  return { type: actionTypes.SIGN_IN_ADMIN, authData: signInAuthData };
};
export const signInAdmin = (authData: SignInAuth) => {
  return (dispatch) => {
    return axios
      .get(`admin/${authData.name}/${authData.password}`)
      .then((res) => {
        console.log(res);
        console.log(res.data.admin[0]);
        if (res.data.admin[0] !== undefined) {
          localStorage.setItem("isUserAuthorized", "true");
          dispatch(signInAdminHandler(res.data.admin[0]));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
