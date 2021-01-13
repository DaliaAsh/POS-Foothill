import React from "react";
import { AuthContent } from "../../Models/AuthContent/AuthContent";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
  let isAuth = false;
  const auth = localStorage.getItem("pos-auth");
  if (auth) {
    const authContent: AuthContent = JSON.parse(auth);
    isAuth = authContent.isAuth;
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
