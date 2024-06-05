import React from "react";
import { useContext } from "react";
import App, { AppContext } from "../App";
const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <nav></nav>
      <h1>THIS IS HOME PAGE AND USER IS: {username}</h1>
    </div>
  );
};

export default Home;
