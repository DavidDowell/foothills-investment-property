import './App.css';
import './components/Nav';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import MortgageRelief from './components/MortgageRelief';
import Team from './components/Team';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef, useEffect } from 'react';

function App() {
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    function handleScroll() {
      // const scrollTop =
      //   window.pageYOffset || document.documentElement.scrollTop;
      const scrollY = window.scrollY;
      const maxOpacity = 1;
      const minOpacity = 0; // Set to 0 to start fading out from the top

      refs.forEach(ref => {
        if (ref.current) {
          const elementTop = ref.current.offsetTop;
          const elementHeight = ref.current.offsetHeight;
          const relativePosition = scrollY - elementTop;
          const opacity = Math.max(
            minOpacity,
            maxOpacity - (relativePosition / (elementHeight)) * maxOpacity);
          ref.current.style.opacity = opacity;
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <Router>
        <div className="App">
          <Nav />
          <div ref={refs[0]}>
            <Main />
          </div>
          <div ref={refs[1]}>
            <MortgageRelief />
          </div>
          <div>
            <Team />
          </div>
          <div ref={refs[3]}>
            <Contact />
          </div>
          <Footer />
        </div>
      </Router>
    </main>
  );
}

export default App;
