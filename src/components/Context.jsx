import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Context = () => {
  const { isHuman, setIsHuman } = useContext(AuthContext);
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      <p className="authText">
        {isHuman
          ? "You are now authenticated, you can proceed"
          : "you are not authenticated"}
      </p>
      <input
        value={isHuman}
        type="checkbox"
        id="input"
        onChange={(e) => setIsHuman(e.target.checked)}
      />
      <label htmlFor="input">I'm not a robot</label>
    </div>
  );
};

export default Context;
