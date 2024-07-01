import React from "react";
import { useState } from "react";
const Ratings = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    console.log(`You selected: ${rating}`);
  };
  return (
    <div>
      <div className="flex flex-col items-center pb-4 ">
        <div className="flex flex-col">
          <div className="flex">
            {[...Array(10)].map((_, index) => {
              const rating = index + 1;
              let bgColor = "";

              if (rating <= 4) {
                bgColor = "bg-red-500";
              } else if (rating <= 6) {
                bgColor = "bg-white";
              } else {
                bgColor = "bg-green-500";
              }

              return (
                <button
                  key={rating}
                  className={`w-20 py-2 text-black ${bgColor} ${
                    selectedRating === rating ? "font-bold" : ""
                  }`}
                  style={{
                    borderRadius:
                      index === 0
                        ? "4px 0 0 4px"
                        : index === 9
                        ? "0 4px 4px 0"
                        : "0",
                  }}
                  onClick={() => handleRatingClick(rating)}
                >
                  {rating}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
