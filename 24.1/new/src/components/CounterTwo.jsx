import React from "react";
import useCounter from "./useCounter";

const CounterTwo = () => {
  const { increment, decrement, double, divide, value } = useCounter(1);
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

export default CounterTwo;
