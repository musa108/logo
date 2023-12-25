import type { FC } from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import { Link } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Payment from "../components/Checkout/Payment";
import Form from "../components/Checkout/Form";
import Article from "../components/Checkout/Article";
import { useCart } from "../context/CartContext";
import ArticlePrice from "../components/Checkout/ArticlePrice";

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = () => {
  const { cart } = useCart();

  return (
    <>
      <Header />
      <div className=" w-full pl-12 mt-2 bg-gray-100 p-1 max-xl:pl-6">
        <h2 className="text-2xl font-bold max-xl:text-lg ">Shopping Cart</h2>
        <Link to="/productSection">
          {" "}
          <ArrowBack /> Continue Shopping
        </Link>
      </div>
      <main className="flex justify-center items-start max-xl:flex-col">
        <Form />
        <Payment />
        <section>
          {cart.map((item) => (
            <Article item={item} key={item.id} />
          ))}
          <ArticlePrice cart={cart}/>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Checkout;
