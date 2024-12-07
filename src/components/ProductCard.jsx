import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-green-600 font-bold">${product.price}</p>
        <Link
          to={`/product/${product._id}`}
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
