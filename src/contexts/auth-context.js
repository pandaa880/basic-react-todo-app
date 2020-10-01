import React, { useState, createContext, useContext } from "react";
import shortid from "shortid";

const AuthContext = React.createContext({
  users: [],
  addUser: () => {},
  updateUser: () => {},
  isUserLoggedIn: () => {},
});

function AuthProvider({ children }) {
  const [users, setUsers] = useState([]);

  const addUser = (email, password) => {
    const obj = {
      email,
      password,
      id: shortid.generate(),
      isLoggedIn: false,
    };

    const users_data = [...users, obj];
    setUsers(users_data);

    return obj;
  };

  const updateUser = (email, status) => {
    const users_data = [...users];
    const userIndex = users_data.findIndex((user) => user.email === email);

    users_data[userIndex].isLoggedIn = status;
    setUsers(users_data);
    return users_data[userIndex];
  };

  const isUserLoggedIn = (email) => {
    const user = users.find((user) => user.email === email);
    if (user) {
      return user.isLoggedIn;
    }
    return false;
  };
  return (
    <AuthContext.Provider
      value={{ users, addUser, updateUser, isUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context) {
    return context;
  }
}

export { useAuth, AuthProvider };
