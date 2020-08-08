import React, { Component } from 'react';

import SectionTitle from '../../section-title/section-title.component';
import GalleryList from '../../gallery-list/gallery-list.component';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          url:
            'https://res.cloudinary.com/dglxjd018/image/upload/q_auto:eco/v1596869345/pls/gallery/gallery_groupPicture_voez71.png',
          caption: 'General body meeting selfie!',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <SectionTitle title='Gallery' />
        <GalleryList images={this.state.images} />
      </div>
    );
  }
}

export default Gallery;
