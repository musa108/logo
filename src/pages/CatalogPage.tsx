import CatalogBanner from "../components/CatalogBanner";
import CatalogHero from "../components/CatalogHero";
import CatalogSearch from "../components/CatalogSearch";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tiles from "../components/Tiles";

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
