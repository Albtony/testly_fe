import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HelloPage from './pages/HelloPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul className="App-nav">
              <li className="App-nav-item">
                <Link to="/hello-fe" className="App-link">
                  Hello Backend
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="App-main">
          <div className="page-content">
            <Routes>
              <Route path="/hello-fe" element={<HelloPage />} /> {/* Define the route for HelloPage */}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;