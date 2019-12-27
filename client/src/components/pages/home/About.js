import React from 'react';

const About = () => {
  return (
    <section className='section-about'>
      <div className='about container'>
        <div className='about__container'>
          <div className='about__container--left'>
            <div className='about__images'></div>
            <div className='about__images__border'>
              <div className='about__images1'></div>
            </div>
          </div>
          <div className='about__container--right'>
            <h2 className='about__text--heading'>About Sqratch Xchange</h2>
            <p className='about__text--sub'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur voluptas cupiditate aliquid nesciunt earum! Mollitia
              voluptatem consequatur doloremque quae doloribus eum provident,
              dolorum sapiente sint cumque quod aliquid dolores totam!
            </p>
            <p className='about__text--sub'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur voluptas cupiditate aliquid nesciunt earum! Mollitia
              voluptatem consequatur doloremque quae doloribus eum provident,
              dolorum sapiente sint cumque quod aliquid dolores totam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
