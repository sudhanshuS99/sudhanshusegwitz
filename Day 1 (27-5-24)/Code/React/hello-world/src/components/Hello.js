//using jsx
import React from "react";

const Hello = () => {
  // return (
  //     <div>
  //         <h1>Hello Segwitz using jsx</h1>
  //     </div>
  // )
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello segwitz without using JSX")
  );
};

export default Hello;
