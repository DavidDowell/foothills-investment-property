import React, { useState } from 'react';
import handshakesvg2 from '../../assets/images/other/handshakesvg2.svg';
import cashOffer from '../../assets/other/cash-payment.mp4';
import financing from '../../assets/other/financing.svg';
import handGiving from '../../assets/other/hand-giving-money.svg';
import rent from '../../assets/other/house-for-rent.png';
import moving from '../../assets/other/moving.svg';

const WhatWeDo = () => {
  const [showMortgageRelief, setShowMortgageRelief] = useState(false);
  const [showCashOffer, setShowCashOffer] = useState(false);
  const [showFinancingOptions, setShowFinancingOptions] = useState(false);
  const [showRentalProperties, setShowRentalProperties] = useState(false);
  const [showMovingServices, setShowMovingServices] = useState(false);

  const handleMortgageReliefClick = () => {
    setShowMortgageRelief(!showMortgageRelief);
    if (!showMortgageRelief) {
      document.querySelector('.top-house').classList.add('top-house-active');
    } else {
      document.querySelector('.top-house').classList.remove('top-house-active');
    }
  };

  const handleCashOfferClick = () => {
    setShowCashOffer(!showCashOffer);
    if (!showCashOffer) {
      document
        .querySelector('.top-mid-house')
        .classList.add('top-mid-house-active');
    } else {
      document
        .querySelector('.top-mid-house')
        .classList.remove('top-mid-house-active');
    }
  };

  const handleFinancingOptionsClick = () => {
    setShowFinancingOptions(!showFinancingOptions);
    if (!showFinancingOptions) {
      document.querySelector('.mid-house').classList.add('mid-house-active');
    } else {
      document.querySelector('.mid-house').classList.remove('mid-house-active');
    }
  };

  const handleRentalPropertiesClick = () => {
    setShowRentalProperties(!showRentalProperties);
    if (!showRentalProperties) {
      document
        .querySelector('.low-mid-house')
        .classList.add('low-mid-house-active');
    } else {
      document
        .querySelector('.low-mid-house')
        .classList.remove('low-mid-house-active');
    }
  };

  const handleMovingServicesClick = () => {
    setShowMovingServices(!showMovingServices);
    if (!showMovingServices) {
      document
        .querySelector('.bottom-house')
        .classList.add('bottom-house-active');
    } else {
      document
        .querySelector('.bottom-house')
        .classList.remove('bottom-house-active');
    }
  };

  return (
    <div id="WWD" className="mt-20 reno-container select-none">
      <h1 className="text-left text-6xl p-4">What We Do</h1>
      <div
        className="top-house grayscale hover:grayscale-0"
        onClick={handleMortgageReliefClick}
      >
        <h2 className="text-3xl image-text">Mortgage Relief</h2>
      </div>

      {showMortgageRelief && (
        <div className="text-container mortgage-container">
          <div
            id="MortgageRelief"
            className="grid grid-rows-1 grid-flow-col gap-4"
          >
            <img
              src={handshakesvg2}
              id="handshake"
              alt="handshake"
              className=" max-md:hidden row-start-1 row-span-1 max-lg:row-span-1"
            />
            <h1
              className="text-container-description first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-cyan-500
  first-letter:mr-3 first-letter:float-left mission text-lg lg:text-3xl text-left row-start-1 row-span-1 m-10 grow whitespace-normal"
            >
              We strive to empower and assist individuals and families through
              education, information and relationships. Our team of
              professionals possess the knowledge, honesty and compassion needed
              to protect the homeowner while helping them produce the best
              outcome for themselves and their families. We are dedicated to
              providing customers with the support they need to succeed through
              our innovative investment resources and 20 plus years of
              experience in the industry.
            </h1>
          </div>
        </div>
      )}
      <div
        className="top-mid-house grayscale hover:grayscale-0"
        onClick={handleCashOfferClick}
      >
        <h2 className="text-3xl image-text">Cash Offer</h2>
      </div>

      {showCashOffer && (
        <div className="text-container cash-container">
          <div className="flex justify-center">
            <header className="text-2xl lg:text-4xl flex text-container-header pb-2 my-4">
              Cash Offers Up To $1 Billion!
            </header>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <video autoPlay loop muted>
              <source src={cashOffer} type="video/mp4" />
            </video>
            {/* <img src={handGiving} alt="hello" /> */}
            <p
              className="text-container-description first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-cyan-500
  first-letter:mr-3 first-letter:float-left mission text-2xl md:text-3xl text-left row-start-2 row-span-2 m-10 grow whitespace-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
              risus at ultrices mi tempus imperdiet nulla malesuada
              pellentesque. Nibh nisl condimentum id venenatis a condimentum
              vitae sapien pellentesque. Morbi leo urna molestie at. Enim diam
              vulputate ut pharetra sit. Ipsum dolor sit amet consectetur
              adipiscing.
            </p>
          </div>
        </div>
      )}
      <div
        className="mid-house grayscale hover:grayscale-0"
        onClick={handleFinancingOptionsClick}
      >
        <h2 className="text-3xl image-text">Financing Options</h2>
      </div>

      {showFinancingOptions && (
        <div className="text-container financing-container">
          <div className="flex justify-center">
            <header className="text-2xl lg:text-4xl flex text-container-header pb-2 my-4">
              Financing As Low As $1/mo For Eternity!
            </header>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            {/* <video autoPlay loop muted>
              <source src={cashOffer} type="video/mp4" />
            </video> */}
            <img src={financing} alt="hello" />
            <p
              className="text-container-description first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-cyan-500
  first-letter:mr-3 first-letter:float-left mission text-2xl md:text-3xl text-left row-start-2 row-span-2 m-10 grow whitespace-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
              risus at ultrices mi tempus imperdiet nulla malesuada
              pellentesque. Nibh nisl condimentum id venenatis a condimentum
              vitae sapien pellentesque. Morbi leo urna molestie at. Enim diam
              vulputate ut pharetra sit. Ipsum dolor sit amet consectetur
              adipiscing.
            </p>
          </div>
        </div>
      )}
      <div
        className="low-mid-house grayscale hover:grayscale-0"
        onClick={handleRentalPropertiesClick}
      >
        <h2 className="text-3xl image-text">Rental Properties</h2>
      </div>

      {showRentalProperties && (
        <div className="text-container rental-container">
          <div className="flex justify-center">
            <header className="text-2xl lg:text-4xl flex text-container-header pb-2 my-4">
              Rental Properties As Big As 4 sq ft.
            </header>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            {/* <video autoPlay loop muted>
              <source src={cashOffer} type="video/mp4" />
            </video> */}
            <img src={rent} alt="hello" />
            <p
              className="text-container-description first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-cyan-500
  first-letter:mr-3 first-letter:float-left mission text-2xl md:text-3xl text-left row-start-2 row-span-2 m-10 grow whitespace-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
              risus at ultrices mi tempus imperdiet nulla malesuada
              pellentesque. Nibh nisl condimentum id venenatis a condimentum
              vitae sapien pellentesque. Morbi leo urna molestie at. Enim diam
              vulputate ut pharetra sit. Ipsum dolor sit amet consectetur
              adipiscing.
            </p>
          </div>
        </div>
      )}
      <div
        className="bottom-house grayscale hover:grayscale-0"
        onClick={handleMovingServicesClick}
      >
        <h2 className="text-3xl image-text">Moving Services</h2>
      </div>

      {showMovingServices && (
        <div className="text-container moving-container">
          <div className="flex justify-center">
            <header className="text-2xl lg:text-4xl flex text-container-header pb-2 my-4">
              Keep Up To 20% Of Your Stuff During The Move!
            </header>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            {/* <video autoPlay loop muted>
              <source src={cashOffer} type="video/mp4" />
            </video> */}
            <img src={moving} alt="hello" />
            <p
              className="text-container-description first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-cyan-500
  first-letter:mr-3 first-letter:float-left mission text-2xl md:text-3xl text-left row-start-2 row-span-2 m-10 grow whitespace-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
              risus at ultrices mi tempus imperdiet nulla malesuada
              pellentesque. Nibh nisl condimentum id venenatis a condimentum
              vitae sapien pellentesque. Morbi leo urna molestie at. Enim diam
              vulputate ut pharetra sit. Ipsum dolor sit amet consectetur
              adipiscing.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatWeDo;
