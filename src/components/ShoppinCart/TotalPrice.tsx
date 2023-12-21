import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CartItem } from "../../context/CartContext";

interface TotalPriceProps {
  cart: CartItem[];
 
}

const TotalPrice: React.FC<TotalPriceProps> = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col gap-4 border p-4 mt-4 bg-[#FAFAFA]">
      <div className=" flex justify-between">
        <h3 className="text-xl font-bold">
          Do you have a voucher?{" "}
          <span className="text-[#A7A7A7] text-sm">(Optional)</span>
        </h3>
        <KeyboardArrowUpIcon fontSize="large" />
      </div>
      <div className="flex items-center justify-between">
        <button className="border border-[#000] text-xl font-bold py-2 px-3">Enter the code</button>
        <button className="border bg-[#000] text-[#FFF] text-xl font-bold py-2 px-8">Redeem</button>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Price:</h3>
         <p className="">199.9 SAR</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">
          Total {" "}
          <span className="text-[#A7A7A7] text-sm">(VAT included.)</span>:
        </p>
        <p>${totalPrice.toFixed(2)} SAR</p>
      </div>
        <button className="w-full bg-[#000] text-[#FFF] py-2 text-xl font-bold">
        Safe to checkout
        </button>
    </div>
  );
};

export default TotalPrice;
