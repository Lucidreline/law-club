import React from 'react';

import Btn from '../../../btn/btn.component'

import './event-card.styles.scss'

const EventCard = ({ event }) => {
  const { id, name, image } = event;

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
        Bacon ipsum dolor amet rump pork belly filet mignon corned beef turducken kevin jowl pig sirloin short loin shank. Andouille alcatra chicken ham hock, kevin salami leberkas. Rump salami kielbasa, pork chop burgdoggen picanha chicken leberkas pastrami short ribs ball tip cupim shoulder ham hock.
      </p>
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