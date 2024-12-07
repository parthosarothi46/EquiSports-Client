import React from "react";

const SportsCategories = () => {
  const categories = [
    "Football",
    "Basketball",
    "Tennis",
    "Cricket",
    "Baseball",
    "Golf",
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Shop by Sports Category
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {categories.map((category) => (
          <div
            key={category}
            className="w-40 h-40 bg-white border rounded-lg shadow-md flex justify-center items-center text-lg font-semibold"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsCategories;
