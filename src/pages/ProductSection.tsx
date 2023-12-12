import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import ProdCart from "../components/ProductSection/ProdCart";
import ProdDescription from "../components/ProductSection/ProdDescription";
import ProductNav from "../components/ProductSection/ProductNav";
import RecentProd from "../components/ProductSection/RecentProd";
import RelatedProd from "../components/ProductSection/RelatedProd";

const ProductSection = () => {
  return (
    <>
      <main>
        <Header/>
        <ProductNav/>
        <ProdCart/>
        <ProdDescription/>
        <RelatedProd/>
        <RecentProd/>
        <Footer/>
      </main>
    </>
  );
};
export default ProductSection;
