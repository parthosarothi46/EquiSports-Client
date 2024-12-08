import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Fade } from "react-awesome-reveal";
import LoadingSpinner from "./LoadingSpinner";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [displayAll, setDisplayAll] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch products from MongoDB
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://b10-a10-server-side-parthosarothi46.vercel.app/equipment"
        ); // Update this URL with your MongoDB API endpoint
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Show 8 products initially or all products if displayAll is true
  const productsToDisplay = displayAll ? products : products.slice(0, 8);

  return (
    <div className="dark:bg-gray-900 dark:text-white px-3 lg:px-4 xl:px-0">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10">Our Products</h2>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Fade direction="left">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productsToDisplay.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </Fade>

            {!displayAll && products.length > 8 && (
              <button
                onClick={() => setDisplayAll(true)}
                className="mt-10 px-6 py-2 bg-black text-white rounded hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Show All
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
