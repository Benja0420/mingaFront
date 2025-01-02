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
      link: "/profile/username",
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
        <div className=" lg:w-3/12 w-full fixed bg-gradient-to-t from-orange-500 to-orange-600 h-screen  flex-col  top-0 left-0">
          <div className="flex items-center p-4 justify-between">
            <div className="flex gap-2 items-center cursor-pointer">
              <img src={avatar} className="h-12 z-40" alt="" />
              <h3 className="text-white text-xl">benjamin@sepulveda.com</h3>
            </div>
            <h3 className="text-xl cursor-pointer" onClick={toggleMenu}>
              ❎
            </h3>
          </div>
          <ul>
            {menuList.map((item, i) => (
              <li key={i} className="text-center z-20">
                <Link
                  to={item.link}
                  className="block text-white p-4 hover:bg-white hover:text-orange-500 z-20"
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
