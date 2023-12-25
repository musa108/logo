import type { FC } from "react";
import { CartItem } from "../../context/CartContext";
import productImage from "../../assets/images/productImage.png";

interface ArticleProps {
  item: CartItem;
}

const Article: FC<ArticleProps> = ({ item }) => {
  return (
    <div className="flex flex-col max-xl:p-2">
      <div className="flex justify-between gap-4 items-center my-2">
        <div className="flex items-center gap-2">
          <img src={productImage} alt="" className=" w-28 h-28" />
          <p className="text-[#A1A1A1] text-sm">Lorem Ipsum</p>
        </div>
        <div className="">
          <p>
            ${item.price} x {item.quantity} SAR
          </p>
        </div>
      </div>
    </div>
  );
};
export default Article;
