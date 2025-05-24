import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isHuman, setIsHuman] = useState(false);
  return (
    <AuthContext.Provider value={{ isHuman, setIsHuman }}>
      {children}
    </AuthContext.Provider>
  );
};
