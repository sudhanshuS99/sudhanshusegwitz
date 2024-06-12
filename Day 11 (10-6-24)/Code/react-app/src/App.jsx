import { useEffect, useState } from "react";
import "./App.css";

// 1b368fbf

const APIKEY = "http://www.omdbapi.com/?i=tt3896198&apikey=1b368fbf";
function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${APIKEY}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);
  return (
    <>
      <h1>app </h1>
    </>
  );
}

export default App;
