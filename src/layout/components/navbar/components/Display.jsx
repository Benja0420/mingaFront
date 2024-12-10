import { useState } from 'react';
import menu from '../img/menu.svg';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <div>
        <button onClick={toggleMenu} className="hamburger-button">
          <img src={menu} alt="Menu" />
        </button>
        {isOpen && (
          <div className="menu">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
};

export default HamburgerMenu;