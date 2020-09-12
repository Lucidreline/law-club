import React from 'react';

import './events-page.styles.scss';

import NavBar from '../../nav-bar/nav-bar.component';
import EventCard from '../../sections/events-page-sections/event-card/event-card.component';
import events from '../../../data/events.data';

import { dynamicHrefScrollJump } from '../../../utils';

class EventsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      events,
    };
  }

  componentDidMount() {
    // starts the page off at the top
    window.scrollTo(0, 0);
    dynamicHrefScrollJump();
  }

  createEndDate = ({ year, month, day, endTime }) => {
    let date = new Date(year, month - 1, day);
    date.setHours(endTime.hour);
    date.setMinutes(endTime.minute);
    return date;
  };

  render() {
    // creates a list of past and future events
    let pastEvents = [];
    let futureEvents = [];
    const today = new Date();
    this.state.events.forEach((event) => {
      if (today > this.createEndDate(event.date)) {
        pastEvents.push(event);
      } else {
        futureEvents.push(event);
      }
    });

    let noFutureEventsMsg, noPastEventsMsg;
    // if no future events are present then a message will appear on the page
    if (futureEvents.length === 0) {
      noFutureEventsMsg = (
        <div className='no-future-events-msg'>
          <p className='no-event-msg event-msg'>
            There are no future events at the moment.
          </p>
        </div>
      );
    } else {
      noFutureEventsMsg = null;
    }

    // if no past events are present (if client removes all events) then a message will appear on the page
    if (pastEvents.length === 0) {
      noPastEventsMsg = (
        <div className='no-past-events-msg event-msg'>
          <p className='no-event-msg'>There are no past events at the moment</p>
        </div>
      );
    } else {
      noPastEventsMsg = null;
    }

    return (
      <div>
        <NavBar />
        {/* eslint-disable-next-line */}
        <h1 style={{ textAlign: 'center' }}>🚧 Under Construction!👷‍♂ 🚧</h1>
        <h2 className='event-type-title'>Future Events:</h2>
        {noFutureEventsMsg}

        {futureEvents.map((futureEvent, index) => (
          <div data-aos='fade-up' key={index}>
            <EventCard eventPassed={false} event={futureEvent} key={index} />
          </div>
        ))}
        <h2 className='event-type-title'>Past Events:</h2>
        {noPastEventsMsg}
        {pastEvents.map((pastEvent, index) => (
          <div data-aos='fade-up' key={index}>
            <EventCard eventPassed={true} event={pastEvent} key={index} />
          </div>
        ))}
      </div>
    );
  }
}

export default EventsPage;
