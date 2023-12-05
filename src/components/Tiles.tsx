import { Link } from "react-router-dom";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import product8 from "../assets/images/product8.png";

interface item {
  id: number;
  image: string;
  name: string;
  oldPrice: string;
  newPrice: string;
}

const Tiles = () => {
  const items: item[] = [
    {
      id: 1,
      image: product1,
      name: "Zurich Vision 60×60",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
    {
      id: 2,
      image: product2,
      name: "Zurich Pearl 60×60",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
    {
      id: 3,
      image: product3,
      name: "Zurich Grey 60×60",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
    {
      id: 4,
      image: product4,
      name: "Zurich Dark Grey 60×60",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
    {
      id: 5,
      image: product5,
      name: "Windsor White Oak",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
    {
      id: 6,
      image: product6,
      name: "Sicily Grey Décor 30×60",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
    {
      id: 7,
      image: product7,
      name: "Sardinia White",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
    {
      id: 8,
      image: product8,
      name: "Sicily Grey 30×60",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
  ];
  return (
    <>
      <section className="grid grid-cols-4 items-center gap-4 m-8">
        {items.map((item) => (
          <div
            className="flex flex-col justify-center items-center border-[1px] drop-shadow-sm"
            key={item.id}
          >
            <Link to="/productSection" className="flex flex-col justify-center items-center">
              <img src={item.image} alt="" />
              <h1 className="text-[#111010] text-2xl font-bold mt-4">
                {item.name}
              </h1>
              <p className="text-[#CACACA] text-sm my-2">
                {item.oldPrice}{" "}
                <span className="text-[#B4B4B4] text-lg font-semibold">
                  {item.newPrice}
                </span>
              </p>
            </Link>
          </div>
        ))}
      </section>
      <div className="flex justify-center items-center my-10">
        <button className="bg-[#111010] text-[#FFF] py-2 px-8 uppercase font-bold">
          more products
        </button>
      </div>
    </>
  );
};
export default Tiles;
