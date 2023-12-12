import CatalogBanner from "../components/Catalog/CatalogBanner";
import CatalogHero from "../components/Catalog/CatalogHero";
import CatalogSearch from "../components/Catalog/CatalogSearch";
import Categories from "../components/Home/Categories";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Tiles from "../components/Home/Tiles";

const CatalogPage = () => {
  return (
    <>
      <main>
        <Header />
        <CatalogHero/>
        <Categories/>
        <CatalogSearch/>
        <Tiles/>
        <CatalogBanner/>
        <Footer/>
      </main>
    </>
  );
};
export default CatalogPage;
