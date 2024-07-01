import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormTwo = () => {
  const [buyDecision, setBuyDecision] = useState("");
  const [improvements, setImprovements] = useState("");

  const handleBuyDecisionChange = (e) => {
    setBuyDecision(e.target.value);
  };

  const handleImprovementsChange = (e) => {
    setImprovements(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buy decision:", buyDecision);
    console.log("Improvements:", improvements);
  };

  return (
    <div className="flex justify-center mt-5">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 text-white shadow-xl p-10 rounded w-full max-w-lg"
      >
        <label className="block text-sm font-bold mb-2">
          Will you buy this product?
        </label>
        <div className="mb-2">
          <input
            type="radio"
            id="buy-yes"
            name="buy-decision"
            value="yes"
            checked={buyDecision === "yes"}
            onChange={handleBuyDecisionChange}
          />
          <label htmlFor="buy-yes" className="ml-2">
            Yes
          </label>
        </div>
        <div className="mb-2">
          <input
            type="radio"
            id="buy-no"
            name="buy-decision"
            value="no"
            checked={buyDecision === "no"}
            onChange={handleBuyDecisionChange}
          />
          <label htmlFor="buy-no" className="ml-2">
            No
          </label>
        </div>
        <div className="mb-2">
          <input
            type="radio"
            id="buy-improvement"
            name="buy-decision"
            value="needs improvement"
            checked={buyDecision === "needs improvement"}
            onChange={handleBuyDecisionChange}
          />
          <label htmlFor="buy-improvement" className="ml-2">
            Needs Improvement
          </label>
        </div>

        {buyDecision === "needs improvement" && (
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">
              Describe your improvements:
            </h3>
            <textarea
              value={improvements}
              onChange={handleImprovementsChange}
              rows={4}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default FormTwo;
