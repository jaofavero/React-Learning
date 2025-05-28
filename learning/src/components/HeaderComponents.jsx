import React from 'react';
import { Link } from 'react-router-dom'; 

const HeaderComponents = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hooks">Hooks</Link>
        </li>
        <li>
          <Link to="/design-patterns">Design Patterns</Link> 
        </li>
        <li>
          <Link to="/testing">Testing</Link>            
        </li>
      </ul>
    </nav>
  );
};

export default HeaderComponents;