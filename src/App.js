import React from 'react';
import './App.css';

// sections
import Hero from './components/sections/hero/hero.component';
import Events from './components/sections/events/events.component';

function App() {
  return (
    <div className='App'>
      <Hero />
      <div id='container'>
        <Events />
      </div>
    </div>
  );
}

export default App;
