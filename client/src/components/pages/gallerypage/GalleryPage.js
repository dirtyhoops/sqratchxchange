import React from 'react';
import FilterBar from './FilterBar';
import GalleryGrid from './GalleryGrid';
import GalleryHeader from './GalleryHeader';

// Maybve take the gallerypage div and just add a top margin for the header

const GalleryPage = () => {
  return (
    <div className='gallerypage'>
      <GalleryHeader />
      <FilterBar />
      <GalleryGrid />
    </div>
  );
};

export default GalleryPage;
