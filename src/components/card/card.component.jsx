import React from 'react';
import { Link } from 'react-router-dom';

import './card.styles.scss';

const Card = ({ data }) => {
  let name;
  if (data.type === 'board member') {
    name = data.firstName;
  } else if (data.type === 'event') {
    name = data.name;
  } else {
    name = '';
  }
  return (
    <div
      className='custom-card'
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <Link to={data.linkUrl}>
        <div className='dark-hover'>
          <div className='card-content'>
            <h4 className='name'>{name}</h4>
            <p className='link'>Click For More Info</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
