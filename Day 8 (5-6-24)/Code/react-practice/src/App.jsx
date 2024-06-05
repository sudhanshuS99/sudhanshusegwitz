import { useState } from "react";
import "./App.css";
import Text from "./components/Text";

function App() {
  const [showText, setShowText] = useState("");

  return (
    <>
      <div className="App">
        <button
          onClick={() => {
            setShowText(!showText);
          }}
        >
          Show Text
        </button>

        {showText && <Text />}
      </div>
    </>
  );
}

export default App;
