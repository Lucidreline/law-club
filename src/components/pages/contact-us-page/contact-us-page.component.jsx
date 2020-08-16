import React from 'react';

import NavBar from '../../nav-bar/nav-bar.component'

class ContactUsPage extends React.Component {

  componentDidMount() {
    // starts the page off at the top
    window.scrollTo(0, 0);
  }



  render() {
    return (
      <div>
        <NavBar />
        {/* eslint-disable-next-line */}
        <h3>🚧 Under Construction!👷‍♂ 🚧</h3>

      </div>
    );
  }
};

export default ContactUsPage;