import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import logo from "../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";

type list = {
  id: number;
  link: string;
};
const Header = () => {
  const Menus: list[] = [
    { id: 1, link: "Home" },
    { id: 2, link: "Spaces" },
    { id: 2, link: "Products & Services" },
    { id: 3, link: "Showrooms" },
    { id: 4, link: "Company" },
    { id: 5, link: "Media" },
    { id: 6, link: "Contact" },
  ];

  return (
    <>
      <main className="mt-4">
        <img src={logo} alt="" className="m-auto " />
        <nav className="flex justify-center items-center gap-32 mt-4">
          <SearchIcon />
          <div className=" flex justify-center items-center gap-10">
            {Menus.map((menu) => (
              <ul
                key={menu.id}
                className="font-ProximaNova uppercase font-bold"
              >
                {menu.id === 1 ? (
                  <NavLink to="/" className="text-[#979797]">
                    {menu.link}
                  </NavLink>
                ) : (
                  <li>{menu.link}</li>
                )}
              </ul>
            ))}
          </div>
          <div className=" flex justify-center items-center gap-4">
            <ShoppingCartIcon />
            <FavoriteBorderIcon />
            <Person2OutlinedIcon />
          </div>
        </nav>
      </main>
    </>
  );
};
export default Header;
