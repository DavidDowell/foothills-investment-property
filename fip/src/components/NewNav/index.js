import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo/FinalOakTree.png';

const NewNav = () => {
  return (
    <nav id="Nav" className="flex justify-end">
      <ul className="flex flex-col items-end nav-links">
        <li className="nav-link flex items-center justify-between hover:-translate-x-4">
          <Link to="Main" smooth={true} duration={2000} className="mr-4">
            HOME
          </Link>
          <div className="nav-link-line"></div>
        </li>
        <li className="nav-link flex items-center justify-between hover:-translate-x-4">
          <Link to="WWD" smooth={true} duration={2000} className="mr-4">
            About
          </Link>
          <div className="nav-link-line"></div>
        </li>
        <li className="nav-link flex items-center justify-between hover:-translate-x-4">
          <Link to="Team" smooth={true} duration={2000} className="mr-4">
            TEAM
          </Link>
          <div className="nav-link-line"></div>
        </li>
        <li className="nav-link flex items-center justify-between hover:-translate-x-4">
          <Link to="Contact" smooth={true} duration={2000} className="mr-4">
            CONTACT
          </Link>
          <div className="nav-link-line"></div>
        </li>
      </ul>
    </nav>
  );
};

export default NewNav;
