import React from 'react';

import './gallery-image.styles.scss';

const GalleryImage = ({ imageUrl, caption, index }) => {
  let captionSection;
  caption.trim() !== ''
    ? (captionSection = (
        <div className='caption'>
          <p>{caption}</p>
        </div>
      ))
    : (captionSection = null);
  return (
    <div
      className='gallery-image'
      id={`image-${index}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {captionSection}
    </div>
  );
};

export default GalleryImage;
