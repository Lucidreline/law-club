import React from 'react';

import Hero from '../../sections/home-page-sections/hero/hero.component';
import AboutUs from '../../sections/home-page-sections/about-us/about-us.component';
import Events from '../../sections/home-page-sections/events/events.component';
import MeetTheBoard from '../../sections/home-page-sections/meet-the-board/meet-the-board.component';
import Gallery from '../../sections/home-page-sections/gallery/gallery.component';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className='main-container'>
        <AboutUs />
        <Events />
        <MeetTheBoard />
        <Gallery />
      </div>
    </div>
  );
};

export default HomePage;
