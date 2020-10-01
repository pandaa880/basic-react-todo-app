import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Home from "../screens/home";
import SignUp from "../screens/signup";
import Login from "../screens/login";

function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Home} path="/" exact />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
