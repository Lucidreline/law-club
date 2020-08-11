import React, { Component } from 'react';

import SectionTitle from '../../section-title/section-title.component';
import GalleryList from '../../gallery-list/gallery-list.component';

import './gallery.styles.scss';
import images from '../../../data/gallery-images.data';
class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      images,
    };
  }

  render() {
    return (
      <div id='gallery'>
        <SectionTitle title='Gallery' />
        <GalleryList images={this.state.images} />
      </div>
    );
  }
}

export default Gallery;
