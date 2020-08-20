import React, { Component } from 'react';
import Input from '../../../input/input.component';
import Btn from '../../../btn/btn.component'

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
    e.target.reset()

    // validate data
    // send via sendgrid
    const { name, email, message } = this.state
    const msg = {
      name,
      email,
      message
    }
    console.log('sending: ' + msg.name, msg.email, msg.message)


    this.setState({ name: '', email: '', message: '' })
  }

  render() {
    return (
      <div className='contact-us-form'>
        <form onSubmit={this.handleSubmit}>
          <Input type='text' name='name' placeholder='Name' handleChange={this.handleChange} />
          <Input type='text' name='email' placeholder='Email' handleChange={this.handleChange} />
          <Input type='textArea' name='message' placeholder='Message' handleChange={this.handleChange} />
          <Btn type='submit' color='orange' >
            Send
          </Btn>
        </form>
      </div>
    );
  }
}

export default ContactUsForm;