import React from 'react';

const Offer = () => {
  return (
    <section className='section-offer'>
      <div className='offer__topshape'></div>
      <div className='offer container'>
        <h2 className='heading-primary'>what we offer</h2>

        {/* WILL DELETE THIS LATER OR TRANSFER IT TO OFFER SECTION */}
        <div className='offer__box'>
          <div className='offer__box__grid'>
            <img src='https://www.ittybittyboutique.org/wp-content/uploads/2018/07/itty-bitty-boutique-web-consign-steps-icon-get-paid.png' />
            <p className='text--offer'>we consign</p>
          </div>
          <div className='offer__box__grid'>
            <img src='https://herewegrowagain.com/wp-content/uploads/2015/11/icon-consign.png' />
            <p className='text--offer'>vintage clothing</p>
          </div>
          <div className='offer__box__grid'>
            <img src='https://cdn1.iconfinder.com/data/icons/characters-90s-and-now/1080/Character_Outline_Oktoberfest_00005_guy_90s_Kopie__-512.png' />
            <p className='text--offer'>80s 90s nostalgia items</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
