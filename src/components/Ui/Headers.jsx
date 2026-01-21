import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="grid navbar-grid">
          
          {/* LOGO */}
          <div className="logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          {/* NAVBAR */}
          <nav className={`navbar ${isOpen ? "menu-mobile" : "menu-web"}`}>
            <ul onClick={() => setIsOpen(false)}>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/country">Country</NavLink></li>
            </ul>
          </nav>

          {/* HAMBURGER ICON */}
          <div className="ham-menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;