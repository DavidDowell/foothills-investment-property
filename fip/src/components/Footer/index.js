import React from 'react';
import logo from '../../assets/images/logo/FinalOakTree.png';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col justify-center items-center text-center"
    >
      <img src={logo} alt="Noble Oak Solutions Logo" className="footer-logo" />
      <h1>NOBLE OAK SOLUTIONS</h1>
      <a href="tel:8288381274" className="mb-10">
        828-838-1274
      </a>
    </footer>
  );
};

export default Footer;
