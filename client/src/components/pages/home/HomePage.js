import React from 'react';
import HeaderImage from '../../layout/HeaderImage';
import About from './About';
import Offer from './Offer';

// Add FRAGMENT later and remove the opening DIV

const Home = () => {
  return (
    <div>
      <HeaderImage />
      <About />
      <Offer />
    </div>
  );
};

export default Home;
