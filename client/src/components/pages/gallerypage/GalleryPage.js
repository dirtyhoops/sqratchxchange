import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems, filterItems } from '../../../actions/gallery';

import FilterBar from './FilterBar';
import GalleryGrid from './GalleryGrid';
import GalleryHeader from './GalleryHeader';

// Maybve take the gallerypage div and just add a top margin for the header

const GalleryPage = ({ getItems, items, filterItems }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);

  // @TODO:
  // have a function where it takes a value clicked from the filter bar and then filter the item array.

  return (
    <div className='gallerypage'>
      <GalleryHeader />
      <FilterBar filterItems={filterItems} />
      <GalleryGrid items={items} />
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.gallery.items
});

export default connect(mapStateToProps, {
  getItems,
  filterItems
})(GalleryPage);
