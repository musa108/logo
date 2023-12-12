import Tiles from "./Tiles";



const Collections = () => {
  
  return (
    <>
      <main className="">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-5xl max-lg:text-3xl text-[#111010] font-bold text-center border-b-4 p-1">
            Tile Collections
          </h1>
          <p className="text-[#616161] text-xl max-lg:text-lg max-lg:w-[300px] w-[826px] text-center my-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </section>
        <Tiles/>
        
      </main>
    </>
  );
};
export default Collections;
