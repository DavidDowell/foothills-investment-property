import React from 'react';

const Main = () => {
  return (
    <div className="flex">
      <section className="main-left flex flex-col justify-between">
        <div className="main-company-name">
          <h1 className="font-bold text-6xl mb-4">NOBLE OAK</h1>
          <h2 className="font-bold text-5xl">SOLUTIONS</h2>
        </div>
        <div className="main-buttons">
          <div>
            <button className="main-button font-bold text-xl">
              Enter Your Information
            </button>
          </div>
          <button className="main-button font-bold text-xl">
            Receive Help
          </button>
        </div>
      </section>
      <section className="main-right mx-12">
        <div className="main-right-image"></div>
      </section>
    </div>
  );
};

export default Main;
