import CatalogHeroImage from "/src/assets/images/catalogHeroImage.png";

const CatalogHero = () => {
  return (
    <>
      <main className="relatiive my-4">
        <img
          src={CatalogHeroImage}
          alt="catalogheroimage"
          className="w-full h-full object-cover transition-filter duration-300 ease-in-out filter grayscale-0 hover:grayscale-100 max-xl:h-[434px]"
        />
        <div className="absolute top-52 left-8 space-y-4">
          <h1 className=" text-7xl text-[#FFF] font-bold uppercase">Catalog</h1>
          <p className="w-[657px] text-[#E4E4E4] text-xl max-xl:text-base max-xl:w-[300px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
      </main>
    </>
  );
};
export default CatalogHero;
