import React from 'react';

import item1 from '../../../img/items/sx_item1.jpg';
import item2 from '../../../img/items/sx_item2.jpg';
import item3 from '../../../img/items/sx_item3.jpg';

const GalleryGrid = () => {
  return (
    <div className='gallerygrid container'>
      <div className='row'>
        <div className='col'>
          <div className='gallerygrid__items'>
            <div className='gallerygrid__items__description'>
              <h1>GUCCI MANEEEEEEEEEE</h1>
            </div>
            <img className='gallerygrid__items__image' src={item1} />
          </div>
        </div>
        <div className='col'>
          <div className='gallerygrid__items'>
            <img className='gallerygrid__items__image' src={item2} />
          </div>
        </div>
        <div className='col'>
          <div className='gallerygrid__items'>
            <img className='gallerygrid__items__image' src={item3} />
          </div>
        </div>
        <div className='col'>
          <div className='gallerygrid__items'>
            <img className='gallerygrid__items__image' src={item1} />
          </div>
        </div>
        <div className='col'>
          <div className='gallerygrid__items'>
            <img className='gallerygrid__items__image' src={item2} />
          </div>
        </div>
        <div className='col'>
          <div className='gallerygrid__items'>
            <img className='gallerygrid__items__image' src={item3} />
          </div>
        </div>
        <div className='col'>
          <div className='gallerygrid__items'>
            <img className='gallerygrid__items__image' src={item1} />
          </div>
        </div>
        <div className='col'>
          <div className='gallerygrid__items'>
            <img className='gallerygrid__items__image' src={item2} />
          </div>
        </div>
        <div className='col'>
          <div className='gallerygrid__items'>
            <img className='gallerygrid__items__image' src={item3} />
          </div>
        </div>
        <div className='col'>
          <div className='gallerygrid__items'>
            <img className='gallerygrid__items__image' src={item1} />
          </div>
        </div>
        <div className='col'>
          <div className='gallerygrid__items'>
            <img className='gallerygrid__items__image' src={item2} />
          </div>
        </div>
        <div className='col'>
          <div className='gallerygrid__items'>
            <img className='gallerygrid__items__image' src={item3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
