import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import './components/Nav';
import Main from './components/Main';
import NewNav from './components/NewNav';
import Footer from './components/Footer';
import MortgageRelief from './components/MortgageRelief';
import Team from './components/Team';
import Contact from './components/Contact';
import WhatWeDo from './components/WWD';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const whatWeDoEl = document.getElementById('WWD');
      const whatWeDoHeight = whatWeDoEl.offsetHeight;
      const whatWeDoPosition = whatWeDoEl.offsetTop;
      const distanceFromTop =
        ((scrollPosition - whatWeDoPosition) / whatWeDoHeight) * 100;
      setShowNav(distanceFromTop >= -35); // Show the nav when user scrolls past 20% of the height of WhatWeDo
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <Router>
        <Main />
        {showNav && <NewNav />}
        <WhatWeDo id="WWD" />
        {/* <MortgageRelief /> */}
        <Team />
        <Contact />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
