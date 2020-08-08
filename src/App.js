import React from 'react';
import './App.css';

// sections
import Hero from './components/sections/hero/hero.component';
import Events from './components/sections/events/events.component';
import MeetTheBoard from './components/sections/meet-the-board/meet-the-board.component';
import Gallery from './components/sections/gallery/gallery.component';

function App() {
  return (
    <div className='App'>
      <Hero />
      <div id='container'>
        <Events />
        <MeetTheBoard />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
