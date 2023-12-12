import ProdTiles from "./ProdTiles";

const RelatedProd = () => {
  return (
    <>
      <main className=" flex flex-col justify-center items-center bg-[#FDFDFD] mx-8  my-16">
        <h1 className="text-3xl text-[#000] font-medium">Related Products</h1>
        <ProdTiles />
      </main>
    </>
  );
};
export default RelatedProd;
