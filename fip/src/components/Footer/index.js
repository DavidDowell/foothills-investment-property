import React from 'react';
import logo from '../../assets/images/logo/FinalOakTree.png';

const Footer = () => {
  return (
    <main
      id="footer"
      className="flex flex-col justify-center items-center text-center"
    >
      <img src={logo} alt="logo" className="footer-logo" />
      <h1>NOBLE OAK SOLUTIONS</h1>
      <a href="tel: 8288381274" className="mb-10">
        828-838-1274
      </a>
    </main>
  );
};

export default Footer;
