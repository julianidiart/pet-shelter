import React, { useState } from "react";

const Context = React.createContext("en");

export const LanguageStore = ({ children }) => {
  const [state, setState] = useState({ language: "en" });

  const onLanguageChange = language => {
    setState({ language });
  };

  return (
    <Context.Provider value={{ ...state, onLanguageChange }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
