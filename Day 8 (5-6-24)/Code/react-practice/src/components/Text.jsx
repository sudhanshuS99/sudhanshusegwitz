import React, { useEffect } from "react";
import { useState } from "react";
const Text = () => {
  const [showText, setShowText] = useState("");

  useEffect(() => {
    console.log("COMPONENT MOUNTED");

    return () => {
      console.log("COMPONENT UNMOUNTED");
    };
  }, []);

  return (
    <>
      <input
        onChange={(event) => {
          setShowText(event.target.value);
        }}
      />
      <h1>{showText}</h1>
    </>
  );
};

export default Text;
