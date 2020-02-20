import React, { useState } from 'react';

const ItemImages = props => {
  const { images } = props;

  const [mainImage, setMainImage] = useState(images[0]);

  const onChangeImage = e => {
    setMainImage(e);
  };
  return (
    <div className='itempage__left'>
      <div className='itempage__left__image'>
        <img src={mainImage} alt='selected item main image' />
      </div>
      <div className='itempage__left__smallimages'>
        {images.map((image, index) => (
          <div
            key={index}
            className='itempage__left__smallimages__box'
            onClick={() => onChangeImage(image)}
          >
            <img src={image} alt='all product images' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemImages;
