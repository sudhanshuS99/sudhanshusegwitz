import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name= ${name}`).then((res) => {
      setPredictedAge(res.data.age);
      console.log(res.data.age);
    });
  };
  return (
    <>
      <input
        placeholder="ex. pedro..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>

      <h1>Predicted Age: {predictedAge} </h1>
    </>
  );
}

export default App;
