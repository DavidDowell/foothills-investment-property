import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import logo from '../../assets/images/logo/WhiteOak.png';

const Nav = () => {
  return (
    <nav>
      <div className="flex flex-row justify-between m-8">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <ul className="nav-items flex justify-between items-center font-bold text-4xl px-8 mr-10">
          <li className="nav-link hover:text-emerald-200">
            <Link to="Main" smooth={true} duration={2000}>
              HOME
            </Link>
          </li>
          <li className="nav-link hover:text-emerald-200">
            <Link to="MortgageRelief" smooth={true} duration={2000}>
              MORTGAGE RELIEF
            </Link>
          </li>
          <li className="nav-link hover:text-emerald-200">
            <Link to="Team" smooth={true} duration={2000}>
              TEAM
            </Link>
          </li>
          <li className="nav-link hover:text-emerald-200">
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
