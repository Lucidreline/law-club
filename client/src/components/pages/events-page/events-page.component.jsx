import React from 'react';

import NavBar from '../../nav-bar/nav-bar.component'
import EventCard from '../../sections/events-page-sections/event-card/event-card.component'

import events from '../../../data/events.data'

class EventsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      events
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        {/* eslint-disable-next-line */}
        <h1 style={{ textAlign: 'center' }} >🚧 Under Construction!👷‍♂ 🚧</h1>
        {events.map((currentEvent, index) => (
          <EventCard event={currentEvent} key={index} />
        ))}
      </div>
    );
  }
}




export default EventsPage;