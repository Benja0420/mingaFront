import { useState } from "react";
import Menu from "../../img/Menu.svg";
import avatar from "./img/avatar.png"
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Register",
      link: "/register",
    },
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Profile",
      link: "/profile/66fe32336aff4962dc74ea72",
    },
    {
      name: "Mangas",
      link: "/mangas",
    },
  ];

  return (
    <div>
      <button onClick={toggleMenu} className="hamburger-button">
        <img src={Menu} alt="Menu" />
      </button>
      {isOpen && (
        <div className="top-0 left-0 fixed flex-col bg-gradient-to-t from-orange-500 to-orange-600 w-full lg:w-3/12 h-screen">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={avatar} className="z-40 h-12" alt="" />
              <h3 className="text-white text-xl">benjamin@sepulveda.com</h3>
            </div>
            <h3 className="text-xl cursor-pointer" onClick={toggleMenu}>
              ❎
            </h3>
          </div>
          <ul>
            {menuList.map((item, i) => (
              <li key={i} className="z-20 text-center">
                <Link
                  to={item.link}
                  className="block z-20 hover:bg-white p-4 text-white hover:text-orange-500"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
