import React from "react";
import { Route, Switch } from "react-router-dom";
import LogInPage from "./containers/LogInPage/LogInPage";
import MainPage from "./containers/MainPage/MainPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignUpPage from "./containers/SignUpPage/SignUpPage";
import LandingPage from "./containers/LandingPage/LandingPage";
function App() {
  return (
    <>
      <Switch>
        <PrivateRoute path="/main" component={MainPage} />
        <Route path="/sign-in" component={LogInPage} exact />
        <Route path="/sign-up" component={SignUpPage} exact />
        <Route path="/" component={LandingPage} />
      </Switch>
    </>
  );
}

export default App;
