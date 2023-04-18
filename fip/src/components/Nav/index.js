import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo/FinalOakTree.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="svg-img">
      <div className="flex flex-row justify-between">
        <div className="hidden md:block">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="flex md:hidden mt-6 ml-6">
          <button
            className={` text-center fixed text-neutral-900 focus:outline-none bg-white rounded ${
              menuOpen ? "rotate-180" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path
                fillRule="evenodd"
                d="M2.5 5h15a.5.5 0 0 1 0 1h-15a.5.5 0 1 1 0-1zm0 5h15a.5.5 0 0 1 0 1h-15a.5.5 0 1 1 0-1zm0 5h15a.5.5 0 0 1 0 1h-15a.5.5 0 1 1 0-1z"
              />
            </svg>
          </button>
        </div>

        <ul
          className={`menu nav-items md:flex md:justify-between items-center font-bold md:text-xl lg:text-3xl text-lg px-8 mt-3 mr-10 ${
            menuOpen ? "block" : "hidden"
          } transition-all duration-{#} ease-in-out`}
        >
        <li className="nav-link hover:text-{} hover:-translate-y-1">
            <Link to="Main" smooth={true} duration={2000}>
              HOME
            </Link>
          </li>
          <li className="nav-link hover:text-yellow-{#} hover:-translate-y-1">
            <Link to="MortgageRelief" smooth={true} duration={2000}>
              MORTGAGE RELIEF
            </Link>
          </li>
          <li className="nav-link hover:text-yellow-{#} hover:-translate-y-1">
            <Link to="Team" smooth={true} duration={2000}>
              TEAM
            </Link>
          </li>
          <li className="nav-link hover:text-yellow-{#} hover:-translate-y-1">
            <Link to="Contact" smooth={true} duration={2000}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
