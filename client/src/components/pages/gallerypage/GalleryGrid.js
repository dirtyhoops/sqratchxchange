import React from 'react';
import { Link } from 'react-router-dom';

const GalleryGrid = ({ items }) => {
  return (
    <div className='gallerygrid container'>
      <div className='row'>
        {items.map(item => (
          <div key={item._id} className='col'>
            <Link to={`/gallery/${item._id}`}>
              <div className='gallerygrid__items'>
                <div className='gallerygrid__items__description'>
                  <p className='gallerygrid__items__description--name'>
                    {item.name}
                  </p>
                </div>
                <img
                  className='gallerygrid__items__image'
                  src={item.image}
                  alt='itemimg'
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
