import React from "react";
import { AuthContent } from "../../Models/AuthContent/AuthContent";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
  let isAuth: boolean = false;
  const auth = localStorage.getItem("isUserAuthorized");
  if (auth) {
    isAuth = JSON.parse(auth);
    console.log(isAuth);
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default PrivateRoute;
