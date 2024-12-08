import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";
import { Fade } from "react-awesome-reveal";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://b10-a10-server-side-parthosarothi46.vercel.app/products?limit=6"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="py-20 dark:bg-gray-900 dark:text-white px-3 lg:px-4 xl:px-0">
      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold mb-10">Featured Products</h2>
        <Fade direction="right">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ProductSection;
