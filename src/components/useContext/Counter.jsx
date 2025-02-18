import React, { useContext } from "react";
import { counterContext } from "./CounterContext";
import { useAppState } from "../customHook/useAppState";

const Counter = () => {
  const [state, dispatch] = useAppState(); //Using customhook to get the context value
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT_COUNT" })}>
        Increment Count
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_COUNT" })}>
        Decrement Count
      </button>
    </div>
  );
};

export default Counter;
