import React from 'react';
import jump from 'jump.js'

import './board-members-page.styles.scss'

import boardMembers from '../../../data/board-members.data'

import NavBar from '../../nav-bar/nav-bar.component';
import SectionTitle from '../../section-title/section-title.component'
import BoardMemberCard from '../../sections/board-members-page-section/board-member-card/board-member-card'
class BoardMembersPage extends React.Component {
  constructor() {
    super()

    this.state = {
      boardMembers
    }
  }
  render() {

    return (
      <div>
        <NavBar />
        <div className='main-container'>
          <SectionTitle title='Meet The Board' />
          {this.state.boardMembers.map((boardMember, index) => (
            <BoardMemberCard boardMember={boardMember} index={index} key={index} />
          ))}
        </div>
      </div>
    );
  }
};

export default BoardMembersPage;
