import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../contexts/auth-context";

function PrivateRoute({ component: Component, path, ...props }) {
  const [userStatus, setUserStatus] = useState("");

  const authContext = useAuth();

  useEffect(() => {
    const email = sessionStorage.getItem("userEmail");

    if (email) {
      const isLoggedIn = authContext.isUserLoggedIn(email);

      if (isLoggedIn) {
        setUserStatus("valid");
      } else {
        setUserStatus("invalid");
      }
    }
  }, []);

  if (userStatus === "") {
    return (
      <Route path={path}>
        <h3>Please Wait...</h3>
      </Route>
    );
  }

  if (userStatus === "invalid") {
    return (
      <Route path={path}>
        <Redirect to="/login" />
      </Route>
    );
  }

  return (
    <Route path={path}>
      <Component {...props} />
    </Route>
  );
}

export default PrivateRoute;
