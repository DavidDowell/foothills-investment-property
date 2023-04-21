import React from 'react';

import handshakesvg2 from '../../assets/images/other/handshakesvg2.svg';
const MortgageRelief = () => {
  return (
    <div
      id="MortgageRelief"
      className="lg:grid grid-rows-3 grid-flow-col gap-4 flex flex-col justify-center"
    >
      <img
        src={handshakesvg2}
        id="handshake"
        alt="handshake"
        className="row-start-2 row-span-2"
      />
      <h1
        className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-cyan-500
  first-letter:mr-3 first-letter:float-left mission text-2xl md:text-4xl text-left row-start-2 row-span-2 m-20 grow tracking-widest"
      >
        We strive to empower and assist individuals and families through
        education, information and relationships. Our team of professionals
        possess the knowledge, honesty and compassion needed to protect the
        homeowner while helping them produce the best outcome for themselves and
        their families.We are dedicated to providing customers with the support
        they need to succeed through our innovative investment resources and 20
        plus years of experience in the industry.
      </h1>
    </div>
  );
};

export default MortgageRelief;
