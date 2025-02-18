import { useContext } from "react";
import { counterContext } from "../useContext/CounterContext";

export const useAppState = () => {
  const { state, dispatch } = useContext(counterContext);

  return [state, dispatch];
};
