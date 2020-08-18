import React from 'react';

import './input.styles.scss'

const Input = ({ name, placeholder, handleChange }) => {
  return (
    <div className='custom-input'>
      <input onChange={handleChange} autoComplete='off' type='text' name={name} required />
      <label for={name}  >
        <span >{placeholder}</span>
      </label>
    </div>
  );
};

export default Input;