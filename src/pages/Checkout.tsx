import type { FC } from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import { Link } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = () => {
  return (
    <>
      <Header />
        <div className=" w-full pl-12 mt-2 bg-gray-100 p-1">
          <h2 className="text-2xl font-bold ">Shopping Cart</h2>
          <Link to="/productSection">
            {" "}
            <ArrowBack /> Continue Shopping
          </Link>
        </div>
      <main className="">

      </main>
      <Footer />
    </>
  );
};
export default Checkout;
