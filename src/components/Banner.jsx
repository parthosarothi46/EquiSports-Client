import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-40">
        <h1 className="text-4xl font-bold">
          Welcome to Our Sports Equipment Store
        </h1>
      </div>
      <div className="carousel w-full h-full">
        <div className="carousel-item w-full">
          <img
            src="https://via.placeholder.com/1500x500"
            alt="Sports Banner 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://via.placeholder.com/1500x500"
            alt="Sports Banner 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://via.placeholder.com/1500x500"
            alt="Sports Banner 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
