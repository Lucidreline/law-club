import React from 'react';

import './contact-us-page.styles.scss';

import NavBar from '../../nav-bar/nav-bar.component';
import ContactUsForm from '../../sections/contact-page-sections/contact-us-form/contact-us-form.component';
import SectionTitle from '../../section-title/section-title.component';

class ContactUsPage extends React.Component {
  componentDidMount() {
    // starts the page off at the top
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='contact-us-page'>
        <NavBar />
        <div className='margin-container'>
          <SectionTitle title='Contact Us' />
        </div>
        <div className='icon hammer'></div>
        <div className='icon scale'></div>
        <div className='icon book'></div>
        <div className='form-container'>
          <ContactUsForm />
        </div>
      </div>
    );
  }
}

export default ContactUsPage;
