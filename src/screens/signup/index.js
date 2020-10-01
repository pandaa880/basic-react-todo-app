import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/auth-context";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useAuth();
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const res = authContext.addUser(email, password);

    if (res) {
      history.push("/login");
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
        SignUp
      </button>
    </form>
  );
}

export default SignUp;
