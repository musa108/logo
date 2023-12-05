import Room from "../assets/images/Living-room.png";
interface item {
  image: string;
  header: string;
  text: string;
  button: string;
}

const Vision = () => {
  const items: item[] = [
    {
      image: Room,
      header: "Vision",
      text: "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.",
      button: "Learn more",
    },
  ];

  return (
    <>
      {items.map((item) => (
        <div className=" relative my-14 lg:mx-20 max-lg:my-36 max-lg:flex max-lg:flex-col-reverse">
          <img
            src={item.image}
            alt={item.image}
            className="max-lg:w-[435px] max-lg:h-[672px]"
          />
          <div className="bg-[#F7F7F7] lg:absolute lg:top-16 lg:left-[-4rem] lg:py-16 lg:pl-4 p-4 w-[345px] m-auto">
            <h1 className="text-[#111010] lg:text-5xl text-2xl font-bold ">
              {item.header}
            </h1>
            <p className="lg:w-[610px] w-[300px] text-[#616161] my-4 max-lg:text-lg">
              {item.text}
            </p>
            <button className="bg-[#111010] text-[#FFF] py-2 px-8 uppercase font-bold ">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default Vision;
