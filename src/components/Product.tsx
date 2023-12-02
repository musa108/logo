import bathroom from "../assets/images/bathroom.png";
import Marble from "../assets/images/Marble.png";
import outdoor from "../assets/images/outdoor.png";
import kitchen from "../assets/images/kitchen.png";
import Vision from "./Vision";
import Solutions from "./Solutions";

type items = {
  id: number;
  image: string;
  header: string;
  text: string;
};

const Product = () => {
  const item1: items[] = [
    {
      id: 1,
      image: bathroom,
      header: "Bathroom Tiles",
      text: "Ante mus blandit sapien sociosqu per consequat ad.",
    },
    {
        id:2,
        image:Marble,
        header:'Marble',
        text:'Ante mus blandit sapien sociosqu'
    }
  ];
  const item2: items[] = [
    {
      id: 1,
      image: outdoor,
      header: "Outdoor Flooring",
      text: "Ante mus blandit sapien sociosqu per consequat ad.",
    },
    {
        id:2,
        image:kitchen,
        header:'Kitchen Interior',
        text:'Ante mus blandit sapien sociosqu per consequat ad'
    }
  ];


  return (
    <>
      <main className=" font-ProximaNova my-16">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-5xl text-[#111010] font-bold text-center border-b-4 p-1">
            Products
          </h1>

          <p className=" text-[#616161] text-xl w-[826px] text-center mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </section>

        <section className=" flex justify-center items-center gap-4 mx-4">
            <div className="flex justify-center items-center gap-4">
                {item1.map((items)=>(
                    <div className=" relative" key={items.id}>
                        <img src={items.image} alt="image" />
                        <div className="bg-[#111010] text-[#FFF] max-w-max absolute bottom-[-2rem] left-4 p-3 text-center">
                            <h1 className="text-2xl font-semibold">
                                {items.header}
                            </h1>
                            <p className="text-[#B4B4B4]">
                                {items.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" flex flex-col gap-14">
                {item2.map((items)=>(
                    <div className=" relative" key={items.id}>
                        <img src={items.image} alt="image" />
                        <div className="bg-[#111010] text-[#FFF] max-w-max absolute  bottom-[-1rem] left-6 px-2 py-6 text-center ">
                            <h1 className="text-2xl font-semibold">
                                {items.header}
                            </h1>
                            <p className="text-[#B4B4B4] text-sm">
                                {items.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <Vision/>
        <Solutions/>
      </main>
    </>
  );
};
export default Product;
