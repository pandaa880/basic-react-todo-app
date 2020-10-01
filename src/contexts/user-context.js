import React, { createContext, useContext } from "react";

import { useAuth } from "./auth-context";

const UserContext = React.createContext({
  login: () => {},
  logout: () => {},
});

function UserProvider({ children }) {
  const authContext = useAuth();

  const login = (email) => {
    const userDetails = authContext.updateUser(email, true);
    sessionStorage.setItem("userEmail", userDetails.email);

    return userDetails.isLoggedIn;
  };

  const logout = (email) => {
    authContext.updateUser(email, false);
    sessionStorage.removeItem("userEmail");
  };
  return (
    <UserContext.Provider value={{ login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context) {
    return context;
  }
}

export { useUser, UserProvider };
