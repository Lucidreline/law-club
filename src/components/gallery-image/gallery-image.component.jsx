import React from 'react';

import './gallery-image.styles.scss';

const GalleryImage = ({ imageUrl, caption }) => {
  return (
    <div
      className='gallery-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='caption'>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default GalleryImage;
