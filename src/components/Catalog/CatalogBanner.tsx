import banner from "/src/assets/images/Banner.png";

const CatalogBanner = () => {
  return (
    <>
      <main className="flex justify-center items-center gap-4 ml-32 mr-10 my-10 divide-x">
        <section className="max-w-[481px]">
          <h1 className=" text-4xl text-[#000] font-sans">
            Promotional Banner
          </h1>
          <p className="text-xl text-[#616161]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </section>
        <section>
          <img src={banner} alt="" />
        </section>
      </main>
    </>
  );
};
export default CatalogBanner;
