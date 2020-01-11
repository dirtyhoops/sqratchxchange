import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItem } from '../../../actions/gallery';

const ItemPage = ({
  getItem,
  match: {
    params: { id }
  },
  selectedItem
}) => {
  useEffect(() => {
    getItem(id);
  }, [getItem]);

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
          </div>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  selectedItem: state.gallery.selectedItem
});

export default connect(mapStateToProps, { getItem })(ItemPage);

// @TODO:
// 1. have a main container for itempage and then have the { selectedItem ? <></> : null } in there.
