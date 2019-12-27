import React from 'react';

const About = () => {
  return (
    <section className='section-about'>
      <div className='about container'>
        <div className='about__container'>
          <div className='about__container--left'>
            <div className='about__image--3'></div>
            <div className='about__image--4'></div>
            <div className='about__image--1'></div>
            <div className='about__image--2__border'>
              <div className='about__image--2'></div>
            </div>
          </div>
          <div className='about__container--right'>
            <div className='about__text'>
              <h2 className='heading-primary'>About Sqratch Xchange</h2>
              <p className='text--about'>
                Sqratch Xchange was established September 1, 2019 by Allen
                Ganaden and Abrena Ganaden. We are Monterey's neighborhood
                premier vintage boutique founded on the principle of bringing
                our customers the best possible deals on new and vintage
                streetwear from the 80s to the 200s. We want you to look good at
                an affordable price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
