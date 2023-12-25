import ProdTiles from "./ProdTiles";

const RecentProd = () => {
  return (
    <>
      <main className=" flex flex-col justify-center items-center bg-[#FDFDFD] mx-8 my-16 max-xl:mx-4 max-xl:my-8">
        <h1 className="text-3xl max-xl:text-xl text-[#000] font-medium">
          Recently Viewed Products
        </h1>
        <ProdTiles />
      </main>
    </>
  );
};
export default RecentProd;
