import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <header className="text-4xl mt-8 mb-2 ml-8 text-start">
        Foothills Investment Property
      </header>
      <div className="flex flex-row justify-between">
        <div id="logo"></div>
        <ul className="nav-items flex justify-between items-center text-2xl px-8 mr-10">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/mortgagerelief">Mortgage Relief</Link>
          </li>
          <li className="nav-link">
            <Link to="/agents">Agents</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
