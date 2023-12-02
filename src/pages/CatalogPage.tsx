import CatalogHero from "../components/CatalogHero";
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
        <Tiles/>
        <Footer/>
      </main>
    </>
  );
};
export default CatalogPage;
