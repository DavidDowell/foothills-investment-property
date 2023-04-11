import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <header className="text-4xl my-8 ml-8 text-start">
        Foothills Investment Property
      </header>
      <div className="flex flex-row justify-between">
        <div id="logo"></div>
        <ul className="nav-items flex justify-between items-center text-2xl px-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mortgagerelief">Mortgage Relief</Link>
          </li>
          <li>
            <Link to="/agents">Agents</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
