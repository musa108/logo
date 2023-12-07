import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-image.png";

const Hero = () => {
  return (
    <>
      <main className="mt-4 relative">
        <img src={heroImage} alt="" className="max-lg:h-[434px] max-lg:w-full overflow-hidden" />
        <section className="bg-[#000000] max-lg:bg-[#666A6F] bg-opacity-30 font-ProximaNova absolute top-8 right-8 p-8 max-lg:p-4 max-lg:top-96 max-lg:left-5">
          <h1 className="text-4xl text-[#FFF] font-bold max-lg:text-2xl">
            New Generation Ceramic Tile
          </h1>
          <p className="text-xl text-[#ECECEC] w-[610px] my-4 max-lg:text-lg max-lg:w-[322px] max-lg:my-2">
            Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
            aptent dapibus metus maecenas consequat. Elementum interdum a
            semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra
            sagittis sit aliquet at. Magna nam platea justo.
          </p>
          <button className="bg-[#FFF] px-12 py-2  font-bold uppercase hover:bg-[#000000] hover:text-[#FFF]">
            <Link to="/catalogPage">Learn More</Link>
          </button>
        </section>
      </main>
    </>
  );
};
export default Hero;
