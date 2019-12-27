import React from 'react';

const Offer = () => {
  return (
    <section className='section-offer'>
      <div className='offer__topshape'></div>
      <div className='offer container'>
        <h2 className='heading-primary'>what we offer</h2>
        <div className='offer__container'>
          {/* CHANGE THIS TO REACT WHERE IT LOOPS THROUGH ITEMS SO I DONT HAVE TO DO A LOT OF DIVS MANUALLY */}
          <div className='offer__grids'></div>
          <div className='offer__grids'></div>
          <div className='offer__grids'></div>
          <div className='offer__grids'></div>
          <div className='offer__grids'></div>
          <div className='offer__grids'></div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
