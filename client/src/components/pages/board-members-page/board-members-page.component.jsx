import React from 'react';

import './board-members-page.styles.scss'

import boardMembers from '../../../data/board-members.data'

import NavBar from '../../nav-bar/nav-bar.component';
import SectionTitle from '../../section-title/section-title.component'
import BoardMemberCard from '../../sections/board-members-page-sections/board-member-card/board-member-card'

import { dynamicHrefScrollJump } from '../../../utils'

class BoardMembersPage extends React.Component {
  constructor() {
    super()

    this.state = {
      boardMembers
    }
  }

  componentDidMount() {
    // starts the page off at the top
    window.scrollTo(0, 0);
    dynamicHrefScrollJump();
  }

  render() {
    return (
      <div className='board-members-page'>
        <NavBar />
        <div className='main-container'>
          <SectionTitle title='Meet The Board' />
          {this.state.boardMembers.map((boardMember, index) => (
            <div data-aos='fade-up'>

              <BoardMemberCard boardMember={boardMember} index={index} key={index} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default BoardMembersPage;
