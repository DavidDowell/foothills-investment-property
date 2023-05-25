import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo/FinalOakTree.png';

const NewNav = () => {
  return (
    <nav id="Nav" className="flex">
      <ul className="flex flex-col nav-links">
        <img src={logo} alt="Company Logo for Noble Oak Solutions" />
        <Link
          to="Main"
          smooth={true}
          duration={2000}
          className="nav-link hover:-translate-x-4"
        >
          <li className="flex">
            {/* <div className="nav-link-line"></div> */}
            <h1 className="ml-4 nav-link-text">Home</h1>
          </li>
        </Link>
        <Link
          to="WWD"
          smooth={true}
          duration={2000}
          className="nav-link hover:-translate-x-4"
        >
          <li className="flex items-center justify-between">
            {/* <div className="nav-link-line"></div> */}
            <h1 className="ml-4 nav-link-text">About</h1>
          </li>
        </Link>
        <Link
          to="Team"
          smooth={true}
          duration={2000}
          className="nav-link hover:-translate-x-4"
        >
          <li className="flex items-center justify-between">
            {/* <div className="nav-link-line"></div> */}
            <h1 className="ml-4 nav-link-text">Team</h1>
          </li>
        </Link>
        <Link
          to="Contact"
          smooth={true}
          duration={2000}
          className="nav-link hover:-translate-x-4"
        >
          <li className="flex items-center justify-between">
            {/* <div className="nav-link-line"></div> */}
            <h1 className="ml-4 nav-link-text">Contact</h1>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NewNav;
