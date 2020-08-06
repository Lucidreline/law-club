import React, { Component } from 'react';
import SectionTitle from '../../section-title/section-title.component';
import CardList from '../../card-list/card-list.component';

class Events extends Component {
  render() {
    return (
      <div>
        <SectionTitle title='Events' />
        <CardList />
      </div>
    );
  }
}

export default Events;
