import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems } from '../../../actions/gallery';

import FilterBar from './FilterBar';
import GalleryGrid from './GalleryGrid';
import GalleryHeader from './GalleryHeader';

// Maybve take the gallerypage div and just add a top margin for the header

const GalleryPage = ({ getItems, items }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <div className='gallerypage'>
      <GalleryHeader />
      <FilterBar />
      <GalleryGrid items={items} />
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.gallery.items
});

export default connect(mapStateToProps, {
  getItems
})(GalleryPage);
