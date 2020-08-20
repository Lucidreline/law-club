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
    const { name, email, message } = this.state

    // validate data


    // send via sendgrid

    this.sendEmail(name, email, message)


    // clear form
    this.clearForm(e)

  }

  clearForm = (form) => {
    this.setState({ name: '', email: '', message: '' })
    form.target.reset()
    document.querySelectorAll('.contact-us-form form input').forEach(input => {
      input.classList.remove('valid')
    })
    document.querySelectorAll('.contact-us-form form textarea').forEach(input => {
      input.classList.remove('valid')
    })
  }

  sendEmail = (_name, _email, _message) => {

    // const email = {
    //   to: 'ma52castaneda@gmail.com',
    //   from: 'ma52castaneda@gmail.com',
    //   subject: 'Website Message',
    //   text: `
    //   From: ${_name}\n
    //   Email: ${_email}\n
    //   Message: ${_message}\n
    //   `
    // }

    // send this as a post request to back ends
  }



  render() {
    return (
      <div className='contact-us-form'>
        <form onSubmit={this.handleSubmit}>
          <h2 className='form-title'>Send us an Email!</h2>
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