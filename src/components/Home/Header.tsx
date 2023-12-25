import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "/src/assets/images/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";

type list = {
  id: number;
  link: string;
};
const Header = () => {
  const Menus: list[] = [
    { id: 1, link: "Home" },
    { id: 2, link: "Spaces" },
    { id: 3, link: "Products & Services" },
    { id: 4, link: "Showrooms" },
    { id: 5, link: "Company" },
    { id: 6, link: "Media" },
    { id: 7, link: "Contact" },
  ];

  return (
    <>
      <main className=" sticky top-0 z-50  bg-[#FFF] py-2">
        <div className="flex justify-between items-center mx-4 ">
          <div className="md:hidden">
            <MenuIcon />
          </div>
          <Link to="/" className="m-auto">
            <img src={logo} alt="" />
          </Link>
          <div className="md:hidden">
          <CartIcon/>
          </div>
        </div>

        <nav className="flex justify-center items-center gap-32 mt-4 max-lg:hidden">
          <SearchIcon />
          <div className=" flex justify-center items-center gap-10 max-lg:hidden">
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
          <div className=" flex justify-center items-center gap-4 max-lg:hidden">
           <CartIcon/>
            <FavoriteBorderIcon />
            <Person2OutlinedIcon />
          </div>
        </nav>
      </main>
    </>
  );
};
export default Header;
