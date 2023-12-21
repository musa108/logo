import { useCart } from "../context/CartContext";
import CartedItem from "../components/ShoppinCart/CartedItem";

import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import TotalPrice from "../components/ShoppinCart/TotalPrice";
import { Link } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";
import RecentProd from "../components/ProductSection/RecentProd";

interface CartProps {}

const ShoppingCart: React.FC<CartProps> = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <main className="">
      <Header />
      <div className="pl-12 mt-2 bg-gray-100 p-1">
      <h2 className="text-2xl font-bold ">Shopping Cart</h2>
       <Link to="/productSection"> <ArrowBack/> Continue Shopping</Link>
      </div>
      <section className=" flex gap-4 items-center m-8">
        <div>
          {cart.map((item) => (
            <CartedItem
              key={item.id}
              item={item}
              onRemove={() => removeFromCart(item.id)}
            />
          ))}
        </div>
        <TotalPrice cart={cart} />
      </section>

      <RecentProd/>
      <Footer />
    </main>
  );
};

export default ShoppingCart;
