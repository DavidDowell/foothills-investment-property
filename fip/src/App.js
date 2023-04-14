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
    function handleScroll(index) {
      return () => {
        const element = refs[index].current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = rect.top;

          if (distance < window.innerHeight * 0.5) {
            element.style.opacity = 1.2 + (distance / (window.innerHeight * 0.5));
          } else {
            element.style.opacity = 1;
          }
        }
      };
    }

    refs.forEach((ref, index) => {
      window.addEventListener('scroll', handleScroll(index));
    });

    return () => {
      refs.forEach((ref, index) => {
        window.removeEventListener('scroll', handleScroll(index));
      });
    };
  }, []);
  
  return (
    <main>
      <Router>
        <div className="App">
          <div>
            <Nav />
            <div ref={refs[0]}>
              <Main />
            </div>
            <div ref={refs[1]}>
              <MortgageRelief />
            </div>
            <div ref={refs[2]}>
              <Team />
            </div>
            <div ref={refs[3]}>
              <Contact />
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </main>
  );
}

export default App;
