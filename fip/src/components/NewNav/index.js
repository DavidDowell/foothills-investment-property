import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo/FinalOakTree.png';

const NewNav = () => {
  return (
    <nav id="Nav" className="flex justify-start">
      <ul className="flex flex-col nav-links">
        <li className="nav-link flex items-center justify-between hover:-translate-x-4">
          <Link to="Main" smooth={true} duration={2000} className="mr-4">
            HOME
          </Link>
          <Link to="Main" smooth={true} duration={2000} className="nav-link-line"></Link>
        </li>
        <li className="nav-link flex items-center justify-between hover:-translate-x-4">
          <Link to="WWD" smooth={true} duration={2000} className="mr-4">
            ABOUT
          </Link>
          <Link to="WWD" smooth={true} duration={2000} className="nav-link-line"></Link>
        </li>
        <li className="nav-link flex items-center justify-between hover:-translate-x-4">
          <Link to="Team" smooth={true} duration={2000} className="mr-4">
            TEAM
          </Link>
          <Link to="Team" smooth={true} duration={2000} className="nav-link-line"></Link >
        </li>
        <li className="nav-link flex items-center justify-between hover:-translate-x-4">
          <Link to="Contact" smooth={true} duration={2000} className="mr-4">
            CONTACT
          </Link>
          <Link to="Contact" smooth={true} duration={2000} className="nav-link-line"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default NewNav;
