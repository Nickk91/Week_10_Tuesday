import { useState } from "react";
import Fetch from "./components/Fetch";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Fetch />
      <FetchTwo />
    </>
  );
}

export default App;
