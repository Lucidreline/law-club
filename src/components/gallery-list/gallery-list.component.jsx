import React from 'react';

import './gallery-list.styles.scss';
import GalleryImage from '../gallery-image/gallery-image.component';

const GalleryList = ({ images }) => {
  return (
    <div className='gallery-list'>
      {images.map(image => (
        <GalleryImage imageUrl={image.url} caption={image.caption} />
      ))}
    </div>
  );
};

export default GalleryList;
