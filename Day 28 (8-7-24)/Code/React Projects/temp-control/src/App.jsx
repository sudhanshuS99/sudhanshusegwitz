import { useState } from "react";

const App = () => {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("cold");
  const increaseTemperature = () => {
    const newTemp = temp + 1;

    if (newTemp >= 15) {
      setTempColor("hot");
    }
    if (temp < 30) setTemp(newTemp);
  };
  const decreaseTemperature = () => {
    const newTemp = temp - 1;
    if (newTemp < 15) {
      setTempColor("cold");
    }
    if (temp > 0) setTemp(newTemp);
  };

  return (
    <div>
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${tempColor}`}>{temp}</div>
        </div>
        <div className="button-container">
          <button onClick={() => increaseTemperature()}>+</button>
          <button onClick={() => decreaseTemperature()}>-</button>
        </div>
      </div>
    </div>
  );
};

export default App;
