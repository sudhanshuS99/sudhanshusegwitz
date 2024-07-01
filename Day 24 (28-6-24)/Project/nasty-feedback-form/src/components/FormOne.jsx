import React, { useState } from "react";
import Ratings from "./RatingUI";
import FormTwo from "./FormTwo";
import { Link } from "react-router-dom";
import Button from "./Button";
const ProductRating = () => {
  return (
    <div className="shadow-xl p-10 max-w-wl rounded">
      <h1 className="text-2xl mb-4 max-w-xl">
        1. How do you like the product overall?
      </h1>
      <Ratings />
      <h1 className="text-2xl mb-4 max-w-xl">2. Flavour</h1>
      <Ratings />
      <h1 className="text-2xl mb-4 max-w-xl">3. Nicotine Satisfaction</h1>
      <Ratings />
      <h1 className="text-2xl mb-4 max-w-xl">4. Sweetness</h1>
      <Ratings />
      <h1 className="text-2xl mb-4 max-w-xl">5. Coolness</h1>
      <Ratings />
      <h1 className="text-2xl mb-4 max-w-xl">6. Throat Hit</h1>
      <Ratings />
      <h1 className="text-2xl mb-4 max-w-xl">7. Air Flow</h1>
      <Ratings />
      <h1 className="text-2xl mb-4 max-w-xl">8. Device Feel</h1>
      <Ratings />
      <h1 className="text-2xl mb-4 max-w-xl">9. Device Quality</h1>
      <Ratings />
      <h1 className="text-2xl mb-4 max-w-xl">10. Device Design</h1>
      <Ratings />

      <FormTwo />
      <Button />
    </div>
  );
};

export default ProductRating;
