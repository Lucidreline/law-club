import React, { Component } from 'react';
import Input from '../../../input/input.component';

import './contact-us-form.styles.scss'

class ContactUsForm extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }); // if name = email, then {email: value}, etc. So it can be dynamic

    if (e.target.value.trim() !== '')
      e.target.classList.add('valid')
    else
      e.target.classList.remove('valid')
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // validate data
    // send via sendgrid
    // clear state
  }

  render() {
    return (
      <div className='contact-us-form'>
        <form onSubmit={this.handleSubmit}>
          <Input type='text' name='name' placeholder='Name' handleChange={this.handleChange} />
          <Input type='text' name='email' placeholder='Email' handleChange={this.handleChange} />
          <Input type='textArea' name='message' placeholder='Message' handleChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default ContactUsForm;