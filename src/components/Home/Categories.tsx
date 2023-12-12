import balcony from "/src/assets/images/balcony.png";
import sitting_room from "/src/assets/images/sitting-room.png";
import floor_design from "/src/assets/images/floor-designs.png";

interface item {
  id: number;
  image: string;
  header: string;
  textOne: string;
  textTwo: string;
}

const Categories = () => {
  const items: item[] = [

    {
      id: 1,
      image: sitting_room,
      header: "Categories",
      textOne: "Lorem Ipsum",
      textTwo: "Lorem Ipsum",
    },
    {
      id: 2,
      image: floor_design,
      header: "Categories",
      textOne: "Lorem Ipsum",
      textTwo: "Lorem Ipsum",
    },
    {
      id: 3,
      image: balcony,
      header: "Categories",
      textOne: "Lorem Ipsum",
      textTwo: "Lorem Ipsum",
    },
  ];
  return (
    <>
      <main className="flex justify-center items-center gap-x-4 my-8 mx-8">
        <div className="bg-[#252525] text-[#FFFF] py-20 px-4">
          <p className="text-base">Lorem Ipsum</p>
          <h1 className=" text-2xl font-bold">Categories</h1>
          <p className="text-[#BCBCBC] w-[255px] text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        {items.map((item) => (
          <ul className="" key={item.id}>
            <li className="relative">
              <img src={item.image} alt="" />
              <div className=" text-[#FFF] absolute bottom-4 left-4">
                <p className="text-base">{item.textOne}</p>
                <h1 className="text-2xl font-bold">{item.header}</h1>
                <p className="text-[#BCBCBC] text-lg">{item.textTwo}</p>
              </div>
            </li>
          </ul>
        ))}
      </main>
    </>
  );
};
export default Categories;
