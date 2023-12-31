import logo from "/src/assets/images/footer-logo.svg";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";

interface text {
  id: number;
  header: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

const Footer = () => {
  const texts: text[] = [
    {
      id: 1,
      header: "Products",
      text1: "Sand Stone",
      text2: "Stone",
      text3: "Cement",
      text4: "Soft Stone",
    },
    {
      id: 2,
      header: "Services",
      text1: "Measurement Service",
      text2: "Product Advice",
      text3: "Interior Design",
      text4: "",
    },
    {
      id: 3,
      header: "Contact information",
      text1: "3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, ",
      text2: "An Nuzhah, Riyadh 12474, ",
      text3: "Saudi Arabia",
      text4: "",
    },
  ];
  return (
    <>
      <footer className="  bg-[#111010]  pt-16 pb-8 px-16">
        <main className="flex max-xl:flex-col  items-center lg:gap-x-56">
          <section className=" flex flex-col max-lg:justify-center gap-y-12">
            <img
              src={logo}
              alt="logo"
              className="lg:w-[162px] w-[122px] lg:h-[57px] h-[42px]"
            />
            <div className="flex gap-x-4">
              <Facebook fontSize="small" className="text-[#FFF]" />
              <Twitter fontSize="small" className="text-[#FFF]" />
              <Instagram fontSize="small" className="text-[#FFF]" />
            </div>
          </section>
          <section className=" flex max-lg:flex-col items-center max-lg:justify-center lg:gap-x-40 max-lg:my-4" >
            {texts.map((text) => (
              <div className="text-[#FFFFFF] text-sm" key={text.id}>
                <h1 className=" font-semibold capitalize my-2 text-start max-lg:space-y-8">
                  {text.header}
                </h1>
                <p className="text-[#A4A4A4] max-lg:hidden">{text.text1}</p>
                <p className="text-[#A4A4A4] max-lg:hidden">{text.text2}</p>
                <p className="text-[#A4A4A4] max-lg:hidden">{text.text3}</p>
                <p className="text-[#A4A4A4] max-lg:hidden">{text.text4}</p>
              </div>
            ))}
          </section>
        </main>
        <hr className="lg:hidden"/>
        <div className="flex lg:justify-between max-lg:flex-col items-center text-[#FFF] mt-12">
          <p className=" text-[9px]">
            Copyright © 2022 | All Rights Reserved.
          </p>
          <p className="text-[9px]">Created with love by thecreation.design</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
