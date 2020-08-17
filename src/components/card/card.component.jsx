import React from 'react';
import { Link } from 'react-router-dom';

import './card.styles.scss';

const Card = ({ data }) => {
  let name, link;
  if (data.type === 'board member') {
    name = data.firstName;
    link = '/members'
  } else if (data.type === 'event') {
    name = data.name;
    link = '/events'
  } else {
    name = '';
    link = '/'
  }
  return (
    <div
      className='custom-card'
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className='dark-hover'>
        <div className='card-content'>
          <h4 className='name'>{name}</h4>
          <Link classname='link' to={`${link}/${data.id}`}>
            <p className='link-text'>Click For More Info</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
