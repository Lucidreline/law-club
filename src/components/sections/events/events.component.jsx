import React, { Component } from 'react';
import SectionTitle from '../../section-title/section-title.component';
import CardList from '../../card-list/card-list.component';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          image:
            'https://res.cloudinary.com/dglxjd018/image/upload/q_10/v1596574107/pls/events/events_event_latinos_gjmqhy.png',
        },
        {
          image:
            'https://res.cloudinary.com/dglxjd018/image/upload/q_10/v1596574096/pls/events/events_event_immigration_ltyaxo.png',
        },
      ],
    };
  }
  render() {
    return (
      <section id='events'>
        <SectionTitle title='Events' />
        <CardList cards={this.state.events} />
      </section>
    );
  }
}

export default Events;
