import showroom from "/src/assets/images/showroom.png";

interface item {
  header: string;
  text: string;
  button: string;
}

const Showroom = () => {
  const items: item[] = [
    {
      header: "Our Showrooms",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry  Lorem Ipsum has been the industrys standard dummy text",
      button: "Learn more",
    },
  ];
  return (
    <>
      <main>
        <section className=" relative lg:my-14 lg:mx-8 max-lg:flex max-lg:flex-col-reverse">
          <img src={showroom} alt="showroom" className=" max-lg:w-[943px] max-lg:h-[700px]"/>
          <div className="">
            {items.map((item) => (
              <div className=" bg-[#F9F9F9] lg:absolute lg:top-28 lg:right-14 lg:p-8 lg:space-y-8 max-lg:mx-4 space-y-4 p-4">
                <h1 className=" lg:text-6xl text-2xl font-bold">{item.header}</h1>
                <p className="lgtext-xl text-lg lg:w-[454px] w-[347px]">{item.text}</p>
                <button className="bg-[#111010] text-[#FFF] py-2 px-8 uppercase font-bold">
                  {" "}
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
export default Showroom;
