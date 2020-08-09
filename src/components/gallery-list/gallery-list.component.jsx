import React from 'react';

import './gallery-list.styles.scss';
import GalleryImage from '../gallery-image/gallery-image.component';

const GalleryList = ({ images, activeIndex }) => {
  return (
    <div className={`gallery-list active-image-${activeIndex}`}>
      <div
        className='gallery-list-container '
        style={{
          transform: `translateX(-${activeIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, index) => (
          <GalleryImage
            index={index}
            key={index}
            imageUrl={image.url}
            caption={image.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryList;
