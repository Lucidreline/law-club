import React from 'react';
import jump from 'jump.js'

import './board-members-page.styles.scss'

import boardMembers from '../../../data/board-members.data'

import NavBar from '../../nav-bar/nav-bar.component';
import SectionTitle from '../../section-title/section-title.component'
import BoardMemberCard from '../../sections/board-members-page-sections/board-member-card/board-member-card'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class BoardMembersPage extends React.Component {
  constructor() {
    super()

    this.state = {
      boardMembers
    }
  }

  handleScrollJump = () => {
    const splitUrl = window.location.href.split('/')
    if (splitUrl.length > 4) {
      //href contains a url
      jump(`#id-${splitUrl[4]}`, {
        offset: -120,
        duration: 2000
      })
    }
  }

  componentDidMount() {
    // starts the page off at the top
    window.scrollTo(0, 0);
    this.handleScrollJump()

  }
  render() {

    return (
      <div>
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
