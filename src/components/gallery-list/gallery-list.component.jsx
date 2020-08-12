import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import './gallery-list.styles.scss';
import GalleryImage from '../gallery-image/gallery-image.component';

const GalleryList = ({ images }) => {
  return (
    <div className='gallery-list' data-aos='flip-up'>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index} className='carousel-item'>
            <GalleryImage index={index} imageUrl={image.url} />
            <Carousel.Caption>
              <p className='custom-carousel-caption'>{image.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryList;
