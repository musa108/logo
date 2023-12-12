import product1 from "/src/assets/images/product5.png";
import product2 from "/src/assets/images/product6.png";
import product3 from "/src/assets/images/product7.png";
import product4 from "/src/assets/images/product8.png";

interface item {
  id: number;
  image: string;
  name: string;
  oldPrice: string;
  newPrice: string;
}

const ProdTiles = () => {
  const items: item[] = [
    {
      id: 1,
      image: product1,
      name: "Windsor White Oak",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
    {
      id: 2,
      image: product2,
      name: "Sicily Grey Décor 30×60",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
    {
      id: 3,
      image: product3,
      name: "Sardinia White",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
    {
      id: 4,
      image: product4,
      name: "Sicily Grey 30×60",
      oldPrice: "449.99 SAR",
      newPrice: "312.49 SAR",
    },
  ];
  return (
    <>
      <main className="grid grid-cols-4 items-center gap-4 m-8">
        {items.map((item) => (
          <div
            className="flex flex-col justify-center items-center border-[1px] drop-shadow-md"
            key={item.id}
          >
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
          </div>
        ))}
      </main>
    </>
  );
};
export default ProdTiles;
