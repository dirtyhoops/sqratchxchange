import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getItem, getRandomItems, filterItems } from '../../../actions/gallery';

import ItemPageHeader from './ItemPageHeader';
import ItemBar from './ItemBar';

const ItemPage = ({
  getItem,
  getRandomItems,
  filterItems,
  match: {
    params: { id }
  },
  selectedItem,
  randomItems
}) => {
  const loadItems = id => {
    getItem(id);
    getRandomItems();
  };

  useEffect(() => {
    loadItems(id);
  }, []);

  return (
    <>
      <ItemPageHeader />
      <ItemBar filterItems={filterItems} />
      {selectedItem ? (
        <div className='itempage container'>
          <div className='itempage__left'>
            <div className='itempage__left__image'>
              <img src={selectedItem.image} alt='selected item main image' />
            </div>
            <div className='itempage__left__smallimages'>
              <div className='itempage__left__smallimages__box'></div>
            </div>
          </div>
          <div className='itempage__right'>
            <p className='itempage__text__name'>{selectedItem.name}</p>
            <p className='itempage__text__description'>
              Description: {selectedItem.description}
            </p>

            {/* THIS IS GOING TO BE THE FORM TO ASK ABOUT THE ITEM, ITS GONNA BE A TOGGLED FORM */}
            <div className='itempage__form'>
              <form>
                <label>YOUR EMAIL:</label>
                <input type='text'></input>
                <br></br>
                <label>YOUR QUESTION:</label>
                <input type='textarea'></input>
                <br></br>
                <button className='itempage__button'>ask about the item</button>
              </form>
            </div>
          </div>
          <div className='itempage__moreproducts'>
            <h3 className='heading-secondary'>More Products</h3>
            <div className='itempage__moreproducts__container'>
              {randomItems.length > 0
                ? randomItems.map((randomItem, index) => (
                    <Link key={index} to={`/gallery/${randomItem._id}`}>
                      <div
                        className='itempage__moreproducts__box'
                        onClick={() => loadItems(`${randomItem._id}`)}
                      >
                        <img src={randomItem.image} alt='productsimg' />
                      </div>
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  selectedItem: state.gallery.selectedItem,
  randomItems: state.gallery.randomItems
});

export default connect(mapStateToProps, {
  getItem,
  getRandomItems,
  filterItems
})(ItemPage);

// @TODO:
// 1. have a main container for itempage and then have the { selectedItem ? <></> : null } in there.
