import React, { useReducer, createContext } from "react";
import { AppReducer } from "./reducer";

const initialContext = {
    users: [],
    todos: []
};

export const AppContext = createContext(initialContext);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialContext);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
