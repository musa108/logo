import logo from "../assets/images/footer-logo.svg";
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
      id: 1,
      header: "Services",
      text1: "Measurement Service",
      text2: "Product Advice",
      text3: "Interior Design",
      text4: "",
    },
    {
      id: 1,
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
        <main className="flex items-center gap-x-56">
        <section className=" flex flex-col gap-y-12">
          <img src={logo} alt="logo" className="w-[162px] h-[57px] " />
          <div className="flex gap-x-4">
            <Facebook fontSize="small" className="text-[#FFF]" />
            <Twitter fontSize="small" className="text-[#FFF]" />
            <Instagram fontSize="small" className="text-[#FFF]" />
          </div>
        </section>
        <section className=" flex items-center gap-x-40">
            {texts.map((text)=>(
                <div className="text-[#FFFFFF] text-sm" key={text.id}>
                    <h1 className=" font-semibold capitalize my-2">{text.header}</h1>
                    <p className="text-[#A4A4A4]">{text.text1}</p>
                    <p className="text-[#A4A4A4]">{text.text2}</p>
                    <p className="text-[#A4A4A4]">{text.text3}</p>
                    <p className="text-[#A4A4A4]">{text.text4}</p>

                </div>
            ))}
        </section>
        </main>
        <div className="flex justify-between items-center text-[#FFF] mt-12">
            <p className=" text-[9px]">Copyright © 2022 | All Rights Reserved.</p>
            <p className="text-[9px]">Created with love by thecreation.design</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
