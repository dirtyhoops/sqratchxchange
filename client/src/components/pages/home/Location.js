import React from 'react';

const Location = () => {
  return (
    <section className='section-location'>
      <div className='location__topshape'></div>
      <div className='location container'>
        <h2 className='heading-primary'>come visit us</h2>
        <div className='location__container'>
          <div className='location__map'>
            <iframe
              width='100%'
              height='100%'
              id='gmap_canvas'
              src='https://maps.google.com/maps?q=1271%2010th%20St%20suite%20a%2C%20Monterey%2C%20CA%2093940&t=&z=15&ie=UTF8&iwloc=&output=embed'
              frameborder='0'
              scrolling='no'
              marginheight='0'
              marginwidth='0'
            ></iframe>
          </div>
          <div className='location__info location__info--leftalign'>
            <p className='text--location'>Contact Us:</p>
            <p className='text--location'>(831)718-8131</p>
          </div>
          <div className='location__info location__info--centeralign'>
            <p className='text--location'>
              1271 10th Street Suite A, Monterey, California 93940
            </p>
          </div>
          <div className='location__info location__info--rightalign'>
            <p className='text--location'>Monday - Saturday: 11AM - 6PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
