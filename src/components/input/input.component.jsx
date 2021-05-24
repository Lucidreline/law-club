import React from 'react';

import './input.styles.scss'

const Input = ({ name, placeholder, handleChange, type }) => {
  const customTextInput =
    <div className='custom-text-input'>
      <input onChange={handleChange} autoComplete='off' type='text' name={name} />
      <label htmlFor={name}  >
        <span >{placeholder}</span>
      </label>
    </div>

  const customTextArea =
    <div className='custom-text-area'>
      <textarea onChange={handleChange} name={name}></textarea>
      <label htmlFor={name}  >
        <span >{placeholder}</span>
      </label>
    </div>

  let customInput;

  if (type === 'text') {
    customInput = customTextInput
  }
  else if (type === 'textArea') {
    customInput = customTextArea
  }
  else {
    customInput = <h3>Invalid Input Type</h3>
  }


  return (
    customInput
  );
};

export default Input;