import React from 'react';

import Btn from '../../../btn/btn.component';

import './event-card.styles.scss';
import { stringifyTime, stringifyDate } from './time.utils';

const EventCard = ({ event, eventPassed }) => {
  const { id, name, description, image, date, location, toroLink } = event;

  let linkBtn;

  if (eventPassed) {
    linkBtn = (
      <a
        rel='noopener noreferrer'
        target='_blank'
        href={'https://torolink.csudh.edu/organization/pre-lawsociety'}
        className='event-toro-link text-decoration-none'
      >
        <Btn>Toro Link!</Btn>
      </a>
    );
  } else {
    console.log('here');
    linkBtn = (
      <a
        rel='noopener noreferrer'
        target='_blank'
        href={toroLink}
        className='event-toro-link text-decoration-none'
      >
        <Btn>Sign Up!</Btn>
      </a>
    );
  }

  const photoSide = (
    <div className='photo-side'>
      <div className='photo' style={{ backgroundImage: `url(${image})` }}></div>
      <div className='shifted-border'></div>
    </div>
  );

  const descriptionSide = (
    <div className='description-side'>
      <h2 className='event-name'>{name}</h2>
      <p className='description'>{description}</p>
      <div className='info'>
        <p className='date'>{stringifyDate(date)}</p>
        <p className='time'>{`${stringifyTime(
          date.startTime
        )} - ${stringifyTime(date.endTime)}`}</p>
        <p className='location'>{location}</p>
      </div>
      {linkBtn}
    </div>
  );

  const cardContent = (
    <div className='card-content'>
      {photoSide}
      {descriptionSide}
    </div>
  );

  return (
    <div className='event-card' id={`id-${id}`}>
      {cardContent}
    </div>
  );
};

export default EventCard;
