import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo/FinalOakTree.png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPastMortgageRelief, setIsPastMortgageRelief] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const mortgageReliefSectionOffsetTop =
        document.getElementById('MortgageRelief').offsetTop;
      setIsPastMortgageRelief(scrollTop > mortgageReliefSectionOffsetTop);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`svg-img navbar ${
        isPastMortgageRelief ? 'scrolled' : 'bg-transparent'
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
              menuOpen ? 'rotate-180' : ''
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
          className={`menu nav-items md:flex-row md:justify-between items-center font-bold md:text-xl lg:text-3xl text-lg px-8 mr-10 ${
            menuOpen ? 'block' : 'hidden'
          } transition-all duration-{#} ease-in-out`}
        >
          <li className="nav-link hover:text-yellow-300 hover:-translate-y-1">
            <Link to="Main" smooth={true} duration={2000}>
              HOME
            </Link>
          </li>
          <li className="nav-link hover:text-yellow-300 hover:-translate-y-1">
            <Link to="MortgageRelief" smooth={true} duration={2000}>
              MORTGAGE RELIEF
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
