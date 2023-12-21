import ProdCarousel from "./ProdCarousel";
import ProdDetails from "./ProdDetails";

const ProdCart = () => {
  return (
    <>
      <main className="flex justify-center items-center gap-8 my-8">
        <ProdCarousel />
        <ProdDetails name='Product name' price={199.9}/>
      </main>
    </>
  );
};
export default ProdCart;
