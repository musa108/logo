import PaypalIimage from "/src/assets/images/Paypal-image.png";
import SaudiBank from '/src/assets/images/investment-bank-image.png'
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Payment = () => {
  return (
    <>
      <main className="p-4">
        <div className="flex justify-between items-center my-1 bg-[#FAFAFA]">
          <div className="flex items-center">
            <img src={PaypalIimage} alt="" />
            <p>Pay Pal</p>
          </div>
          <CheckBoxOutlineBlankIcon />
        </div>
        <div className="flex justify-between items-center my-1 bg-[#FAFAFA]">
          <div className="flex items-center">
            <img src={PaypalIimage} alt="" />
            <p>Pay Pal plus</p>
          </div>
          <CheckBoxOutlineBlankIcon />
        </div>
        <div className="flex justify-between items-center my-1 bg-[#FAFAFA]">
            <div className="flex items-center">
                <img src={SaudiBank} alt="" />
                <p className="">Investment Bank</p>
            </div>
            <CheckBoxIcon/>
        </div>
        <form action="" className="flex flex-col items-center gap-y-4 bg-[#FAFAFA] py-8 px-4 my-8">
            <input type="text" placeholder="Credit card number*" className="border w-[381px] h-[45px]"/>
            <label className="flex gap-x-16 items-center">
                <input type="text" placeholder="Expiry Date*" className="border w-[158px] h-[45px]"/>
                <input type="text" placeholder="CVC / CVV*" className="border w-[158px] h-[45px]"/>
            </label>
            <input type="text" placeholder="Name of Cardholder*" className="border w-[381px] h-[45px]"/>
        </form>
      </main>
    </>
  );
};
export default Payment;
