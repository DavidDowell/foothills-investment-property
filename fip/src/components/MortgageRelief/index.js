import React from "react";
import bullets from "../../assets/images/other/fip-points.png";
import bullets2 from "../../assets/images/other/fip-points-2.png"
const MortgageRelief = () => {
  return (
    <div id="MortgageRelief" className="md:grid grid-cols-3 flex flex-col">
      <img src={bullets} id="bullets" alt="bullets" className="hidden md:block ml-5 mt-20"/>
      <img src={bullets2} id="bullets2" alt="bullets2" className="md:hidden ml-5 mt-20"/>
      <h1 className="mission text-2xl text-left col-span-2 col-start-2 m-20">
        Our mission at Noble Oak Solutions is to empower individuals and
        families to achieve financial freedom through real estate investing. We
        strive to creatively assist our customers in achieving their goals,
        whether it be paying off outstanding home debt, purchasing additional
        properties from landlords, or acquiring and renting spaces to
        homeowners. We believe that real estate is one of the most powerful
        tools for creating wealth and building a secure financial future, and we
        are dedicated to providing our customers with the resources and support
        they need to succeed. Through our innovative investment strategies, we
        aim to make real estate investing accessible to everyone, regardless of
        their financial situation or experience level. At Noble Oak Solutions,
        we are committed to helping our customers achieve their dreams and build
        a brighter future for themselves and their families.
      </h1>
    </div>
  );
};

export default MortgageRelief;
