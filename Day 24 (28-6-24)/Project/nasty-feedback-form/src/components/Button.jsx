import React from "react";
import { Link } from "react-router-dom";
const Button = () => {
  return (
    <div>
      <button
        type="submit"
        className="focus:outline-none text-black bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800 mt-3"
      >
        <Link to="/success">Submit</Link>
      </button>
    </div>
  );
};

export default Button;
