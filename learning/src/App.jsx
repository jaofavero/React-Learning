import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import HeaderComponents from './components/HeaderComponents.jsx'; 
import DesignPatternsPage from './pages/DesignPatternsPage.jsx'; 
import TestingPage from './pages/TestingPage.jsx';
import HomePage from './pages/HomePage.jsx'; 
import HooksPage from './pages/HooksPage.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <HeaderComponents /> 
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hooks" element={<HooksPage />} />
            <Route path="/design-patterns" element={<DesignPatternsPage />} /> 
            <Route path="/testing" element={<TestingPage />} />  
            <Route path="/Error" element={<ErrorPage />} />        
            <Route path="*" element={<h2 style={{ padding: '20px' }}>Page not Found</h2>} />
          </Routes>

        </main>

        <footer className="app-footer">
          <p>&copy; 2024 Studying React</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;