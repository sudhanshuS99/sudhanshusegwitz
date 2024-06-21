import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);

  function addOne() {
    count++;
  }

  return (
    <div className="App">
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
};

export default App;
