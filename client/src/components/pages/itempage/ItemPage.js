import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getItem, getRandomItems } from '../../../actions/gallery';

const ItemPage = ({
  getItem,
  getRandomItems,
  match: {
    params: { id }
  },
  selectedItem,
  randomItems
}) => {
  // @TODO: FIGURE OUT HOW TO RUN loadItems USING useEffect and it only running once. and then after that, change these two useEffect into single one that runs loadItems
  useEffect(() => {
    getItem(id);
  }, [getItem]);

  useEffect(() => {
    getRandomItems();
  }, [getRandomItems]);

  const loadItems = idd => {
    getItem(idd);
    getRandomItems();
  };

  return (
    <>
      {selectedItem ? (
        <div className='itempage container'>
          <div className='itempage__left'>
            <div className='itempage__left__image'>
              <img src={selectedItem.image} />
            </div>
          </div>
          <div className='itempage__right'>
            <h1>{selectedItem.name}</h1>
            <p>{selectedItem.description}</p>
            <p>type: {selectedItem.type}</p>
          </div>
          <div className='itempage__moreproducts'>
            <h3 className='itempage__header'>More Products</h3>
            {randomItems.length > 0
              ? randomItems.map(randomItem => (
                  <Link to={`/gallery/${randomItem._id}`}>
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
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  selectedItem: state.gallery.selectedItem,
  randomItems: state.gallery.randomItems
});

export default connect(mapStateToProps, { getItem, getRandomItems })(ItemPage);

// @TODO:
// 1. have a main container for itempage and then have the { selectedItem ? <></> : null } in there.
