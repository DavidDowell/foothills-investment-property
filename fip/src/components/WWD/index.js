import React from 'react';

const WhatWeDo = () => {
  return (
    <div className='mt-20 reno-container'>
        <h1 className='text-left text-6xl p-4'>What We Do</h1>
        <div className="top-house grayscale hover:grayscale-0">
            <h2 className='text-3xl image-text'>Mortgage Relief</h2>
        </div>
        <div className='top-mid-house grayscale hover:grayscale-0'>
            <h2 className='text-3xl image-text'>Cash Offer</h2>
        </div>
        <div className='mid-house grayscale hover:grayscale-0' >
            <h2 className='text-3xl image-text'>Financing Options</h2>
        </div>
        <div className='low-mid-house grayscale hover:grayscale-0' >
            <h2 className='text-3xl image-text'>Rental Properties</h2>
        </div>
        <div className='bottom-house grayscale hover:grayscale-0' >
            <h2 className='text-3xl image-text'>Moving Services</h2>
        </div>
    </div>
  );
};

export default WhatWeDo;
