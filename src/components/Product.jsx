import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard"; // Assuming ProductCard is in the same directory
import { Fade } from "react-awesome-reveal";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [displayAll, setDisplayAll] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch products from MongoDB
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/equipment"); // Update this URL with your MongoDB API endpoint
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Show 8 products initially or all products if displayAll is true
  const productsToDisplay = displayAll ? products : products.slice(0, 8);

  return (
    <div className="dark:bg-gray-900 dark:text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10">Our Products</h2>

        {loading ? (
          <p>Loading products...</p>
        ) : (
          <>
            <Fade direction="left">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsToDisplay.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </Fade>

            {!displayAll && products.length > 8 && (
              <button
                onClick={() => setDisplayAll(true)}
                className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
