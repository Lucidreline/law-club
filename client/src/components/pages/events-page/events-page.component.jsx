import React from 'react';

import NavBar from '../../nav-bar/nav-bar.component'
import EventCard from '../../sections/events-page-sections/event-card/event-card.component'

import events from '../../../data/events.data'

import { dynamicHrefScrollJump } from '../../../utils'

class EventsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      events,
    }
  }

  componentDidMount() {
    // starts the page off at the top
    window.scrollTo(0, 0);
    dynamicHrefScrollJump();
  }

  render() {
    // creates a list of past and future events
    let pastEvents = [];
    let futureEvents = [];
    this.state.events.forEach(event => {
      if (event.alreadyPast) {
        pastEvents.push(event)
      }
      else {
        futureEvents.push(event)
      }
    })


    let noFutureEventsMsg, noPastEventsMsg;
    // if no future events are present then a message will appear on the page
    if (futureEvents.length === 0) {
      noFutureEventsMsg =
        <div className="no-future-events-msg">
          <h3 className="no-event-msg">There are no future events at the moment.</h3>
        </div>
    }
    else {
      noFutureEventsMsg = null;
    }

    // if no past events are present (if client removes all events) then a message will appear on the page
    if (pastEvents.length === 0) {
      noPastEventsMsg =
        <div className="no-past-events-msg">
          <h3 className="no-event-msg">There are no past events at the moment</h3>
        </div>
    }
    else {
      noPastEventsMsg = null;
    }


    return (
      <div>
        <NavBar />
        {/* eslint-disable-next-line */}
        <h1 style={{ textAlign: 'center' }} >🚧 Under Construction!👷‍♂ 🚧</h1>
        <h2>Future Events:</h2>
        {noFutureEventsMsg}

        {futureEvents.map((futureEvent, index) => (
          <div data-aos='fade-up' key={index}>
            <EventCard event={futureEvent} key={index} />
          </div>
        ))}
        <h2>Past Events:</h2>
        {noPastEventsMsg}
        {pastEvents.map((pastEvent, index) => (
          <div data-aos='fade-up' key={index}>
            <EventCard event={pastEvent} key={index} />
          </div>
        ))}
      </div>
    );
  }
}




export default EventsPage;