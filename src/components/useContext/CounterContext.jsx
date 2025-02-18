import React, { createContext, useReducer } from "react";

export const counterContext = createContext(null);

const initialState = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT_COUNT":
      return { ...state, count: state.count - 1 };
  }
}
const CounterContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <counterContext.Provider value={{ state, dispatch }}>
      {children}
    </counterContext.Provider>
  );
};

export default CounterContext;

