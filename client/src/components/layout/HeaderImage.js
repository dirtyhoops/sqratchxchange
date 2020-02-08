import React from 'react';

const HeaderImage = () => {
  return (
    <header className='header'>
      <div className='header__shadow'>aa</div>
      <div className='header__container'>
        <div className='header__container__content'>
          <p className='header__container__content--text1'>sqratch xchange</p>
          <p className='header__container__content--text2'>
            neighborhood vintage thrift shop
          </p>
          <a className='header__container__content--btn' href='/gallery'>
            Check Our Gallery
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderImage;
