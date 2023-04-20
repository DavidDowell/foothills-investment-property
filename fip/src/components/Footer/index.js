import React from 'react';

const Footer = () => {
  return (
    <main id="footer" className="flex flex-col justify-center">
      <h1>NOBLE OAK SOLUTIONS</h1>
      <h2>828-838-1274</h2>
      <div className="mt-12 flex flex-col">
        <h3 className="mb-4">This Website Was Created By:</h3>
        <div className="flex justify-center">
          <a target="blank" href="https://github.com/DavidDowell">
            <h3 className="mx-4">
              David Dowell <i class="fa-brands fa-github mx-2"></i>
            </h3>
          </a>
          <i class="fa-solid fa-circle"></i>
          <a target="blank" href="https://github.com/ScarElite">
            <h3 className="mx-4">
              Mitchell Armstrong <i class="fa-brands fa-github mx-2"></i>
            </h3>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Footer;
