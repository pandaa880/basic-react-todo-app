import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useUser } from "../../contexts/user-context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userContext = useUser();
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const res = userContext.login(email, password);

    if (res) {
      history.push("/");
    }
  };
  return (
    <form>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" onClick={handleFormSubmit}>
        Login
      </button>
    </form>
  );
}

export default Login;
