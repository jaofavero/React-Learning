import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page-content">
      <h1>Studying Cases</h1>
      <p>Home page</p>

      <section className="info-section">
        <h2>Learning React</h2>
        <p>
          Just a simple site to check up how things work.
        </p>
        
        <Link to="/hooks" className="info-card-link">
          <div className="info-card-content">
            <h3>Hooks Page</h3>
            <p>Exploring hooks from React</p>
          </div>
        </Link>
        
        <Link to="/design-patterns" className="info-card-link">
          <div className="info-card-content">
            <h3>Design Patterns Page</h3>
            <p>Exploring design patterns from React</p>
          </div>
        </Link>
        
        <Link to="/testing" className="info-card-link">
          <div className="info-card-content">
            <h3>Testing Page</h3>
            <p>Exploring testing from React</p>
          </div>
        </Link>
        
        <div className="info-card-content">
          <h3>More to come...</h3>
          <p>Stay tuned for more updates!</p>
        </div>

      </section> 
    </div>
  );
}

export default HomePage;