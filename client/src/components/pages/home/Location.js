import React from 'react';

const Location = () => {
  return (
    <section className='section-location'>
      <div className='location__topshape'></div>
      <div className='location container'>
        <h2 className='heading-primary'>come visit us</h2>
        <div className='location__container'>
          <div className='location__map'></div>
          {/* <div className='location__info'> */}
          <div className='location__info'>
            <p>left info</p>
          </div>
          <div className='location__info'>
            <p>right info</p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Location;
