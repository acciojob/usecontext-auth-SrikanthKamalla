import React, { createContext, useState } from "react";
import "./../styles/App.css";
import Context from "./Context";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
      {/* <ContextProvider> */}
      <Context />
      {/* </ContextProvider> */}
    </AuthProvider>
  );
};

export default App;
