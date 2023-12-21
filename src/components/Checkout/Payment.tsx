import PaypalIimage from "/src/assets/images/Paypal-image.png";
import SaudiBank from '/src/assets/images/investment-bank-image.png'
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Payment = () => {
  return (
    <>
      <main className="">
        <div className="">
          <div className="">
            <img src={PaypalIimage} alt="" />
            <p>Pay Pal</p>
          </div>
          <CheckBoxOutlineBlankIcon />
        </div>
        <div className="">
          <div className="">
            <img src={PaypalIimage} alt="" />
            <p>Pay Pal plus</p>
          </div>
          <CheckBoxOutlineBlankIcon />
        </div>
        <div className="">
            <div className="">
                <img src={SaudiBank} alt="" />
                <p className="">Investment Bank</p>
            </div>
            <CheckBoxIcon/>
        </div>
        <form action="">
            <input type="text" />
        </form>
      </main>
    </>
  );
};
export default Payment;
