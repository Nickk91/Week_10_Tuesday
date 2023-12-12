import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
  const { increment, decrement, double, divide, value } = useCounter(5);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={double}>*2</button>
      <button onClick={divide}>/2</button>
    </div>
  );
};

export default Counter;
