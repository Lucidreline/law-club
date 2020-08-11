import React, { Component } from 'react';
import CardList from '../../card-list/card-list.component';
import SectionTitle from '../../section-title/section-title.component';

class MeetTheBoard extends Component {
  constructor() {
    super();
    this.state = {
      members: [
        {
          image:
            'https://res.cloudinary.com/dglxjd018/image/upload/q_50/v1596574094/pls/boardMembers/boardMembers_Adriana_snwgp6.jpg',
        },
        {
          image:
            'https://res.cloudinary.com/dglxjd018/image/upload/q_90/v1596574094/pls/boardMembers/boardMembers_edwin_xcetpe.jpg',
        },
        {
          image:
            'https://res.cloudinary.com/dglxjd018/image/upload/q_30/v1596574096/pls/boardMembers/boardMembers_josue_es0ac5.jpg',
        },
        {
          image:
            'https://res.cloudinary.com/dglxjd018/image/upload/q_30/v1596574108/pls/boardMembers/boardMembers_cynthia_ytjbyc.jpg',
        },
      ],
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
