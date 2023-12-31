import React from "react";
import { CartItem } from "../../context/CartContext";
import DeleteForever from "@mui/icons-material/DeleteForever";
import productImage from "../../assets/images/productImage.png";

interface CartedItemProps {
  item: CartItem;
  onRemove?: () => void;
}

const CartedItem: React.FC<CartedItemProps> = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between gap-56 max-xl:gap-20 border p-4 max-lg:p-2 mb-2 bg-[#FAFAFA]">
      <div className="flex items-center gap-2">
        <img src={productImage} alt="" />
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold max-xl:text-base">{item.name}</h3>
          <p className="text-[#A1A1A1] text-sm">Lorem Ipsum</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold max-xl:text-base">Price</h1>
        <p className=" max-xl:text-sm">
          ${item.price} x {item.quantity} SAR
        </p>
      </div>
      <button className="text-red-500" onClick={onRemove}>
        <DeleteForever />
      </button>
    </div>
  );
};

export default CartedItem;
