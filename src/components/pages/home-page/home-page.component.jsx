import React from 'react';

import Hero from '../../sections/home-page-sections/hero/hero.component';
import Events from '../../sections/home-page-sections/events/events.component';
import MeetTheBoard from '../../sections/home-page-sections/meet-the-board/meet-the-board.component';
import Gallery from '../../sections/home-page-sections/gallery/gallery.component';
import ContactUs from '../../sections/home-page-sections/contact-us/contact-us.component';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className='main-container'>
        <Events />
        <MeetTheBoard />
        <Gallery />
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;
