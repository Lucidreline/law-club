import React from 'react';

import './contact-us-page.styles.scss'

import NavBar from '../../nav-bar/nav-bar.component'
import ContactUsForm from '../../sections/contact-page-sections/contact-us-form/contact-us-form.component'

class ContactUsPage extends React.Component {

  componentDidMount() {
    // starts the page off at the top
    window.scrollTo(0, 0);
  }



  render() {
    return (
      <div className='contact-us-page'>
        <NavBar />
        {/* eslint-disable-next-line */}
        <h1 style={{ textAlign: 'center' }} >🚧 Under Construction!👷‍♂ 🚧</h1>
        <div className="form-container">
          <ContactUsForm />
        </div>
      </div>
    );
  }
};

export default ContactUsPage;