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
  const ref = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const distance = rect.top;

      if (distance < window.innerHeight * 0.5) {
        element.style.opacity = 1 - (distance / (window.innerHeight * 0.5));
      } else {
        element.style.opacity = 1;
      }
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
          <div>
            <Nav />
            <div ref={ref}>
              <Main />
            </div>
            <MortgageRelief />
            <Team />
            <Contact />
            <Footer />
          </div>
        </div>
      </Router>
    </main>
  );
}

export default App;
