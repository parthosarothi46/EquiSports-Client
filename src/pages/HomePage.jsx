import Banner from "../components/Banner";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import ProductSection from "../components/ProductSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProductSection />
      <Product />
      <Features />
      <Newsletter />
    </div>
  );
};

export default HomePage;
