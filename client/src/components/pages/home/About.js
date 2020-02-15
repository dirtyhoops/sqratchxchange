import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { TweenMax } from 'gsap';

const About = () => {
  const sectionRef = useRef(null);

  // const intersection = useIntersection(sectionRef, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.5
  // });

  // const fadeIn = element => {
  //   gsap.to(element, 0.5, {
  //     opacity: 1,
  //     y: -70,
  //     ease: 'power4.out',
  //     stagger: {
  //       amount: 0.1
  //     }
  //   });
  // };

  // const fadeOut = element => {
  //   gsap.to(element, 1, {
  //     opacity: 0,
  //     y: -20,
  //     ease: 'power4.out'
  //   });
  // };

  // intersection && intersection.intersectionRatio < 0.5
  //   ? // Not reached
  //     fadeOut('.fadeIn1')
  //   : fadeIn('.fadeIn1'); // Reached so animate

  return (
    <section className='section-about' ref={sectionRef}>
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
