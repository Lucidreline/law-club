import React, { Component } from 'react';

import CardList from '../../../card-list/card-list.component';
import SectionTitle from '../../../section-title/section-title.component';

import boardMembers from '../../../../data/board-members.data';

class MeetTheBoard extends Component {
  constructor() {
    super();
    this.state = {
      boardMembers,
    };
  }
  render() {
    return (
      <section id='meet-the-board'>
        <SectionTitle title='Meet the Board' />
        <CardList cards={this.state.boardMembers} />
      </section>
    );
  }
}

export default MeetTheBoard;
