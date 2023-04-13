import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/WhiteOak.png'

const Nav = () => {
  return (
    <nav>
      <div className="flex flex-row justify-between m-8">
        <div>
          <img src={logo} alt='logo'></img>
        </div>
        <ul className="nav-items flex justify-between items-center font-bold text-4xl px-8 mr-10">
          <li className="nav-link hover:text-emerald-200">
            <Link to="#">HOME</Link>
          </li>
          <li className="nav-link hover:text-emerald-200">
            <Link to="#mortgagerelief">MORTGAGE RELIEF</Link>
          </li>
          <li className="nav-link hover:text-emerald-200">
            <Link to="#team">TEAM</Link>
          </li>
          <li className="nav-link hover:text-emerald-200">
            <Link to="#contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
