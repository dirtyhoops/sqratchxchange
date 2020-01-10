import React from 'react';

const GalleryGrid = ({ items }) => {
  return (
    <div className='gallerygrid container'>
      <div className='row'>
        {items.map(item => (
          <div key={item._id} className='col'>
            <div className='gallerygrid__items'>
              <div className='gallerygrid__items__description'>
                <h1>{item.name}</h1>
              </div>
              <img className='gallerygrid__items__image' src={item.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
