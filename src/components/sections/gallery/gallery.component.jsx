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
          caption: 'General body meeting selfie!',
        },
        {
          url:
            'https://shulman.ca/wp-content/uploads/2018/01/changes_to_family_law_ontario.jpg',
          caption: 'A stock placeholder image.',
        },
      ],
      activeImage: {},
    };
  }

  componentDidMount() {
    this.setState({ activeImage: this.state.images[0] });
  }

  nextImage = () => {
    let newIndex = this.getActiveIndex() + 1;
    if (newIndex > this.state.images.length - 1) {
      newIndex = 0;
    }
    this.setState({ activeImage: this.state.images[newIndex] });
  };

  prevImage = () => {
    let newIndex = this.getActiveIndex() - 1;
    if (newIndex < 0) {
      newIndex = this.state.images.length - 1;
    }
    this.setState({ activeImage: this.state.images[newIndex] });
  };

  getActiveIndex = () => {
    return this.state.images.indexOf(this.state.activeImage);
  };

  render() {
    return (
      <div id='gallery'>
        <SectionTitle title='Gallery' />
        <button onClick={this.prevImage}>Previous</button>
        <button onClick={this.nextImage}>Next</button>
        <GalleryList
          activeIndex={this.getActiveIndex()}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default Gallery;
