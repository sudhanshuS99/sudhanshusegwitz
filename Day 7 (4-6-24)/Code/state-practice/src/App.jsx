import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");
  const [count, setCount] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div className="App">
      {/* {age} <button onClick={increaseAge}>Increase Age</button> */}
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        SHOW/HIDE
      </button>
      {showText === true && <h2>HI MY NAME IS HEHE</h2>}

      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        change color
      </button>
      <h1 style={{ color: textColor }}>BRUH</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setCount(count > 0 ? count - 1 : 0);
        }}
      >
        decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        set to zero
      </button>

      {count}
    </div>
  );
}

export default App;
