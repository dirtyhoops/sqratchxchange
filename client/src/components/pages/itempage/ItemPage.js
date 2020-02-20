import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  getItem,
  getRandomItems,
  filterItems,
  resetSelectedItem
} from '../../../actions/gallery';

import ItemPageHeader from './ItemPageHeader';
import ItemBar from './ItemBar';
import ItemImages from './ItemImages';
import ItemInfo from './ItemInfo';
import MoreProducts from './MoreProducts';

const ItemPage = ({
  getItem,
  getRandomItems,
  resetSelectedItem,
  filterItems,
  match: {
    params: { id }
  },
  gallery: { selectedItem, randomItems }
}) => {
  const loadItems = id => {
    resetSelectedItem();
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
          <ItemImages selectedItem={selectedItem} />
          <ItemInfo selectedItem={selectedItem} />

          <MoreProducts randomItems={randomItems} loadItems={loadItems} />
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  gallery: state.gallery
  // selectedItem: state.gallery.selectedItem,
  // randomItems: state.gallery.randomItems
});

export default connect(mapStateToProps, {
  getItem,
  getRandomItems,
  filterItems,
  resetSelectedItem
})(ItemPage);

// @TODO:
// 1. have a main container for itempage and then have the { selectedItem ? <></> : null } in there.
