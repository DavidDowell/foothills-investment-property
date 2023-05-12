import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo/FinalOakTree.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPastMortgageRelief, setIsPastMortgageRelief] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const mortgageReliefSectionOffsetTop =
        document.getElementById("MortgageRelief").offsetTop;
      setIsPastMortgageRelief(scrollTop > mortgageReliefSectionOffsetTop);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`svg-img navbar ${
        isPastMortgageRelief ? "scrolled" : "bg-transparent"
      }`}
    >
      <div className="svg-img-2"></div>
      <div className="flex flex-row justify-between">
        <div className="hidden md:block">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="flex md:hidden mt-6 ml-6">
          <button
            className={` text-center fixed text-neutral-900 opacity-80 focus:opacity-40 bg-white rounded ${
              menuOpen ? "rotate-180" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLincap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>

        <ul
          className={`menu nav-items md:flex md:justify-between items-center font-bold md:text-xl lg:text-3xl text-lg px-8 mr-10 ${
            menuOpen ? "block" : "hidden"
          } transition-all duration-{#} ease-in-out`}
        >
          <li className="nav-link hover:text-yellow-300 hover:-translate-y-1">
            <Link to="Main" smooth={true} duration={2000}>
              HOME
            </Link>
          </li>
          <li className="nav-link hover:text-yellow-300 hover:-translate-y-1">
            <Link to="MortgageRelief" smooth={true} duration={2000}>
              GOAL
            </Link>
          </li>
          <li className="nav-link hover:text-yellow-300 hover:-translate-y-1">
            <Link to="Team" smooth={true} duration={2000}>
              TEAM
            </Link>
          </li>
          <li className="nav-link hover:text-yellow-300 hover:-translate-y-1">
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
