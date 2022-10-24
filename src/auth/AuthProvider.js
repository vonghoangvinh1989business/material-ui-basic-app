import React, { useState } from "react";
import Auth from "./auth";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  let signin = (newUser) => {
    return Auth.signin(() => {
      setUser(newUser);
    });
  };

  let signout = () => {
    return Auth.signout(() => {
      setUser(null);
    });
  };

  let value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
