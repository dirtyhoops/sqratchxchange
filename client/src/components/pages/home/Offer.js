import React, { useRef } from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';

const Offer = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
  });

  const fadeIn = element => {
    gsap.to(element, 0.5, {
      opacity: 1,
      y: -70,
      ease: 'power4.out',
      stagger: {
        amount: 0.3
      }
    });
  };

  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out'
    });
  };

  intersection && intersection.intersectionRatio < 0.8
    ? // Not reached
      fadeOut('.fadeIn')
    : fadeIn('.fadeIn'); // Reached so animate

  return (
    <section className='section-offer' ref={sectionRef}>
      <div className='offer__topshape'></div>
      <div className='offer container'>
        <h2 className='heading-primary fadeIn animation-position'>
          what we offer
        </h2>

        {/* WILL DELETE THIS LATER OR TRANSFER IT TO OFFER SECTION */}
        <div className='offer__box'>
          <div className='offer__box__grid fadeIn animation-position'>
            <img src='https://c7.uihere.com/icons/520/869/191/lightning-consignment-46011b924036852cc22a27d1fc706d86.png' />
            <p className='text--offer'>we consign</p>
          </div>
          <div className='offer__box__grid fadeIn animation-position'>
            <img src='https://www.salvationarmycarolinas.org/assets/components/phpthumbof/cache/iconsHanger.389d8252fd8f7b0a637f135159f4b242.png' />
            <p className='text--offer'>vintage clothing and nostalgia items</p>
          </div>
          <div className='offer__box__grid fadeIn animation-position'>
            <img src='https://i.ya-webdesign.com/images/free-shipping-icon-png-17.png' />
            <p className='text--offer'>we ship items</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
