import React, { Component } from 'react';

import CardList from '../../card-list/card-list.component';
import SectionTitle from '../../section-title/section-title.component';

import members from '../../../data/board-members.data';

class MeetTheBoard extends Component {
  constructor() {
    super();
    this.state = {
      members,
    };
  }
  render() {
    return (
      <section id='meet-the-board'>
        <SectionTitle title='Meet the Board' />
        <CardList cards={this.state.members} />
      </section>
    );
  }
}

export default MeetTheBoard;
