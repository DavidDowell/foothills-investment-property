import './App.css';
import './components/Nav';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Router>
        <div className="App">
          <div>
            <Nav />
            <Home />
            <h1>Welcome to our Real Estate Company!</h1>
          </div>
        </div>
      </Router>
    </main>
  );
}

export default App;
