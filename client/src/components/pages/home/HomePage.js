import React from 'react';
import HeaderImage from '../../layout/HeaderImage';
import About from './About';
import Location from './Location';
import Offer from './Offer';

// Add FRAGMENT later and remove the opening DIV

const Home = () => {
  return (
    <div>
      <HeaderImage />
      <About />
      <Offer />
      <Location />
    </div>
  );
};

export default Home;
