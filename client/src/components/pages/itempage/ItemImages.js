import React, { useState } from 'react';

const ItemImages = props => {
  const { selectedItem } = props;

  const [mainImage, setMainImage] = useState(selectedItem.image[0]);

  const onChangeImage = e => {
    setMainImage(e);
  };

  return (
    <div className='itempage__left'>
      <div className='itempage__left__image'>
        <img src={mainImage} alt='selected item main image' />
      </div>
      <div className='itempage__left__smallimages'>
        {selectedItem.image.map((image, index) => (
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
