import React, { useMemo } from "react";
import { useState } from "react";

const CalculateFactorial = () => {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);
  const factorial = useMemo(() => calculate(number), [number]);
  const updateCounter = () => {
    console.log("Counter");
    setCounter((prevCount) => prevCount + 1);
  };
  return (
    <div>
      Enter the number :{" "}
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />{" "}
      <br />
      <br />
      <div>
        Factorial of {number} is {factorial}
      </div>
      <div>The Value of Counter is {counter}</div>
      <button onClick={updateCounter}>Update Counter</button>
    </div>
  );
};

export default CalculateFactorial;

function calculate(n) {
  console.log("Calculate method");
  return n <= 1 ? 1 : n * calculate(n - 1);
}
