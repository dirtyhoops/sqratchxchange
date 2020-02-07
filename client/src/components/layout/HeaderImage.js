import React from 'react';

const HeaderImage = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <p className='header__content--text1'>sqratch xchange</p>
        <p className='header__content--text2'>
          neighborhood vintage thrift shop
        </p>
        <a className='header__content--btn' href='/gallery'>
          Check Our Gallery
        </a>
      </div>
    </header>
  );
};

export default HeaderImage;
