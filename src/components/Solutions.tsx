import mirrorImage from "../assets/images/mirror-image.png";
import yellowChair from "../assets/images/yellow-chair.png";
import laptopOnFloor from "../assets/images/laptop-on-floor.png";
import flowerRoom from "../assets/images/flower-room.png";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";

interface item {
  header: string;
  text: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

const Solutions = () => {
  const items: item[] = [
    {
      header: "Creative Solutions by Professional Designers",
      text: "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.",
      image1: mirrorImage,
      image2: yellowChair,
      image3: laptopOnFloor,
      image4: flowerRoom,
    },
  ];
  return (
    <>
      <main>
        {items.map((item) => (
          <div className="flex justify-center items-center gap-4 my-8 max-lg:my-0">
            <div className="flex flex-col items-start gap-8 max-lg:ml-4">
              <h1 className="text-[#111010] lg:text-5xl  text-2xl font-bold lg:w-[580px] w-[388px] ">
                {item.header}
              </h1>
              <p className="lg:w-[610px] text-[#616161] max-lg:text-lg w-[380px]">{item.text}</p>
              <div className="flex items-center gap-3 max-lg:hidden">
                <img src={item.image1} alt="" />
                <img src={item.image2} alt="" />
                <img src={item.image3} alt="" />
              </div>
              <button className="bg-[#111010] text-[#FFF] py-2 px-8 uppercase font-bold ">
                Learn More
              </button>
            </div>
            <div className="relative max-lg:hidden">
              <img src={item.image4} alt="" className=""/>
              <div className="absolute flex items-center gap-1 bg-[#FFF] bottom-0 right-0 p-2">
                <PlayCircleFilledOutlinedIcon fontSize="large"/>
                <div className="flex flex-col">
                  <p className="text-[#898989] text-sm font-semibold">
                    Watch
                  </p>
                  <p className="text-[#111010] text-sm font-semibold">
                    Video-tour
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};
export default Solutions;
