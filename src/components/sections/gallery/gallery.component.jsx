import React, { Component } from 'react';

import SectionTitle from '../../section-title/section-title.component';
import GalleryList from '../../gallery-list/gallery-list.component';

import './gallery.styles.scss';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          url:
            'https://res.cloudinary.com/dglxjd018/image/upload/q_auto:eco/v1596869345/pls/gallery/gallery_groupPicture_voez71.png',
          caption: 'General body meeting group selfie!',
        },
        {
          url:
            'https://res.cloudinary.com/dglxjd018/image/upload/v1597029227/pls/gallery/workingOnBoard2_sagdyg.jpg',
          caption: 'Working on our bulletin board on campus!',
        },
        {
          url:
            'https://res.cloudinary.com/dglxjd018/image/upload/v1597029940/pls/gallery/workingOnBoard1_hf38t8.jpg',
          caption: 'Group photo in front of our bulletin board!',
        },
      ],
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
