import React, { Component } from 'react';

import SectionTitle from '../../section-title/section-title.component';
import CardList from '../../card-list/card-list.component';

import events from '../../../data/events.data';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events,
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
