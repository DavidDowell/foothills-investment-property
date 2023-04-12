import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="flex flex-row justify-between m-8">
        <div id="logo-2"></div>
        <ul className="nav-items flex justify-between items-center font-bold text-4xl px-8 mr-10">
          <li className="nav-link">
            <Link to="#">HOME</Link>
          </li>
          <li className="nav-link">
            <Link to="#mortgagerelief">MORTGAGE RELIEF</Link>
          </li>
          <li className="nav-link">
            <Link to="#team">TEAM</Link>
          </li>
          <li className="nav-link">
            <Link to="#contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
