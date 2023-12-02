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
        <div className=" relative my-14 mx-20">
          <img src={item.image} alt={item.image} />
          <div className="bg-[#F7F7F7] absolute top-16 left-[-4rem] py-16 pl-4">
            <h1 className="text-[#111010] text-5xl font-bold">{item.header}</h1>
            <p className="w-[610px] text-[#616161] my-4">{item.text}</p>
            <button className="bg-[#111010] text-[#FFF] py-2 px-8 uppercase font-bold ">{item.button}</button>
          </div>
        </div>
      ))}
    </>
  );
};
export default Vision;
