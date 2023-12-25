import type { FC } from "react";
import { CartItem, useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

interface ArticlePriceProps {
  cart: CartItem[];
}

const ArticlePrice: FC<ArticlePriceProps> = ({ cart }) => {
    const {clearCart} = useCart()
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    clearCart();
  };
  return (
    <>
      <main className=" max-xl:p-2 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center my-4">
          <p className="text-lg font-bold">
            Total{" "}
            <span className="text-[#A7A7A7] text-sm">(VAT included.)</span>:
          </p>
          <p>${totalPrice.toFixed(2)} SAR</p>
        </div>
        <button className="w-full bg-[#000] text-[#FFF] py-2 text-xl font-bold max-xl:ml-6" onClick={handleCheckout}>
          <Link to="/">checkout</Link>
        </button>
      </main>
    </>
  );
};
export default ArticlePrice;
