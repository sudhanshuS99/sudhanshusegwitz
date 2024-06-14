import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((Response) => Response.json())
      .then((data) => setNames(data));
  }, []);

  return <div>Names: {names.join(", ")}</div>;
};

export default App;
