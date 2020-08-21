import React from 'react';

import './btn.styles.scss';

const Btn = ({ children, ...otherProps }) => {

  return (
    <div className='btn-container'>
      <button {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default Btn;
