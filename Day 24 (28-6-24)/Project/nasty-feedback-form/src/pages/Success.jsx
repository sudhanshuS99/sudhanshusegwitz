import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div>
      <Header />
      <div className="grid place-items-center">
        <div className="">success image</div>
        <div className="grid place-items-center">
          <div className="font-bold text-green-500">
            Your Form Submission is
            <h2 className="grid place-items-center">Successful</h2>
          </div>
          <p className="mb-3 sm: grid place-items-center">
            Hurray! Your form has been submitted successfully.
          </p>
          <button className="focus:outline-none text-black bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800">
            <Link to="/">Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
