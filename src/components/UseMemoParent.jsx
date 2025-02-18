import React, { useCallback, useState } from "react";
import UseMemoCounter from "./UseMemoCounter";

const UseMemoParent = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const updateCounter1 = useCallback(() => {
    setCounter1((prevValue) => prevValue + 1);
  }, []);

  const updateCounter2 = useCallback(() => {
    setCounter2((prevValue) => prevValue + 1);
  }, []);

  return (
    <div>
      <UseMemoCounter value={counter1} onClick={updateCounter1}>
        Counter 1
      </UseMemoCounter>
      <UseMemoCounter value={counter2} onClick={updateCounter2}>
        Counter 2
      </UseMemoCounter>
    </div>
  );
};

export default UseMemoParent;
