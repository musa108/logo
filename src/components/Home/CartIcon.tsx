import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartIcon: React.FC = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Badge badgeContent={totalItems} color="primary">
      <Link to="/Shoppingcart">
        <ShoppingCartIcon />
      </Link>
    </Badge>
  );
};

export default CartIcon;
