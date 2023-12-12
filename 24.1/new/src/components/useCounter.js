import { useState, useEffect } from "react";
const useCounter = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue((c) => c + 1);
  const decrement = () => setValue((c) => c - 1);
  const double = () => setValue((c) => c * 2);
  const divide = () => setValue((c) => c / 2);

  return { increment, decrement, double, divide, value };
};
export default useCounter;
