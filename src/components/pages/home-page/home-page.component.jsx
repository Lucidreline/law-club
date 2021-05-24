import React from 'react';

import './home-page.styles.scss';

import Hero from '../../sections/home-page-sections/hero/hero.component';
import AboutUs from '../../sections/home-page-sections/about-us/about-us.component';
import Events from '../../sections/home-page-sections/events/events.component';
import MeetTheBoard from '../../sections/home-page-sections/meet-the-board/meet-the-board.component';

const HomePage = () => {
  return (
    <div id='home-page'>
      <Hero />
      <div className='main-container'>
        <AboutUs />
        <MeetTheBoard />
        <Events />
      </div>
    </div>
  );
};

export default HomePage;
