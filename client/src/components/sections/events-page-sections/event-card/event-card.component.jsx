import React from 'react';

import Btn from '../../../btn/btn.component'

import './event-card.styles.scss'
import { stringifyTime, stringifyDate, createEndDate } from './time.utils'

const EventCard = ({ event }) => {
  const { id, name, image, date, location } = event;


  const photoSide =
    <div className="photo-side">
      <div className="photo" style={{ backgroundImage: `url(${image})` }}>
      </div>
      <div className="shifted-border"></div>
    </div>

  const descriptionSide =
    <div className="description-side">
      <h2 className="event-name">{name}</h2>
      <p className="description">
        Bacon ipsum dolor amet rump pork belly filet mignon corned beef turducken kevin jowl pig sirloin short loin shank.
      </p>
      <div className="info">
        <p className="date">{stringifyDate(date)}</p>
        <p className="time">{`${stringifyTime(date.startTime)} - ${stringifyTime(date.endTime)}`}</p>
        <p className="location">{location}</p>
      </div>
      <a href="" className="event-toro-link text-decoration-none">
        <Btn>Sign Up!</Btn>
      </a>
    </div>

  const cardContent =
    <div className="card-content">
      {photoSide}
      {descriptionSide}
    </div>

  return (
    <div className='event-card' id={`id-${id}`}>
      {cardContent}
    </div>
  );
};

export default EventCard;