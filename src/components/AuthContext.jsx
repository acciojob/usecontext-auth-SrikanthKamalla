import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isHuman, setIsHuman] = useState(true);
  return (
    <AuthContext.Provider value={{ isHuman, setIsHuman }}>
      {children}
    </AuthContext.Provider>
  );
};
