import kingdomTower from "../assets/images/kingsdom-tower.png";
import dubaiMall from "../assets/images/dubai-mall.png";
import kingRoad from "../assets/images/king-road-office.png";
import beachTower from "../assets/images/beach-tower.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from "react-responsive";

interface item {
  id: number;
  image: string;
  header: string;
  text: string;
}

const Projects = () => {
  const items: item[] = [
    {
      id: 1,
      image: kingdomTower,
      header: "Kingdom Tower",
      text: "Marble Flooring",
    },
    { id: 2, image: dubaiMall, header: "Dubai mall", text: "Wood Flooring" },
    {
      id: 3,
      image: kingRoad,
      header: "King Road Offices",
      text: "Outdoor Flooring",
    },
    {
      id: 4,
      image: beachTower,
      header: "Beach Tower Alupang",
      text: "Wood Flooring",
    },
  ];
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      <main className=" font-ProximaNova my-16">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-5xl text-[#111010] font-bold text-center border-b-4 p-1 max-lg:text-2xl max-lg:border-b-2">
            Projects
          </h1>
          <p className="text-[#616161] text-xl w-[826px] text-center mt-2 max-xl:text-sm max-lg:w-[388px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </section>

        <section className="flex justify-center items-center gap-4 m-8">
          {isMobile && (
            <Carousel>
              {items.map((item) => (
                <div
                  className="flex flex-col justify-center items-center "
                  key={item.id}
                >
                  <img src={item.image} alt={item.image} className="" />
                  <h1 className="text-[#111010] text-2xl font-semibold">
                    {item.header}
                  </h1>
                  <p className="text-[#616161]">{item.text}</p>
                </div>
              ))}
            </Carousel>
          )}
        </section>

        <div className="flex justify-center items-center">
          <button className="bg-[#111010] text-[#FFF] py-2 px-8 uppercase font-bold">
            View All
          </button>
        </div>
      </main>
    </>
  );
};
export default Projects;
