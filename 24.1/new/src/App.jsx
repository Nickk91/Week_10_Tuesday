import { useState } from "react";
import "./App.css";
import useCounter from "./components/useCounter";
import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";

function App() {
  return (
    <>
      <Counter />
      <CounterTwo />
    </>
  );
}

export default App;
