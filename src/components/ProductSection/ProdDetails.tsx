import { useState, type FC } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useCart } from "../../context/CartContext";

interface ProdDetailsProps {
  name: string;
  price: number;
}

const ProdDetails: FC<ProdDetailsProps> = ({name, price }) => {
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useCart();
  
 

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleAddToCart = () => {
    addToCart({
      id: Math.random().toString(), 
      name,
      price,
      quantity,
    });
  };
  return (
    <>
      <main className="flex flex-col items-start gap-y-8">
        <section className="flex flex-col gap-y-4">
          <h1 className="text-5xl font-bold">{name}</h1>
          <h3 className="text-3xl">${price}</h3>
          <p className="text-[#616161] text-xl w-[610px]">
            Product Short Description senectus et netus et malesuada fames ac
            turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies
            eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
            semper. Aenean ultricies mi vitae est. Mauris placerat eleifend{" "}
          </p>
        </section>
        <section className="flex items-center gap-2">
          <div className="flex items-center border gap-6 py-2">
            <button onClick={decrement}>
              <RemoveIcon />
            </button>

            <p className="">{quantity}</p>
            <button onClick={increment}>
              <AddIcon />
            </button>
          </div>
          <button className="bg-[#111010] py-2 px-8 text-[#FFF] " onClick={handleAddToCart}>
            Add to Cart
          </button>
          <div className="border p-2">
            <FavoriteBorderIcon />
          </div>
        </section>
        <ul className="flex flex-col items-center ml-4">
          <li className=" list-disc text-lg text-[#000]">
            Lorem ipsum dolor sit amet,
          </li>
          <li className=" list-disc  text-lg text-[#000]">
            Lorem ipsum dolor sit amet,
          </li>
          <li className=" list-disc  text-lg text-[#000]">
            Lorem ipsum dolor sit amet,
          </li>
        </ul>
      </main>
    </>
  );
};
export default ProdDetails;
