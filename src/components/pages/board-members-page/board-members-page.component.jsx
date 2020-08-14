import React from 'react';
import NavBar from '../../nav-bar/nav-bar.component';

import BoardMemberCard from '../../sections/board-members-page-section/board-member-card/board-member-card'
import boardMembers from '../../../data/board-members.data'
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
          {this.state.boardMembers.map((boardMember, index) => (
            <BoardMemberCard boardMember={boardMember} index={index} key={index} />
          ))}
        </div>
      </div>
    );
  }
};

export default BoardMembersPage;
