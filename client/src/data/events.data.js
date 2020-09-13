// use in case you don't have the torolink for the event
import linksAndContactInfo from './linksAndContactInfo.data';

const events = [
  {
    id: '0',
    type: 'event',
    name: 'Latinos Changing America',
    image:
      'https://res.cloudinary.com/dglxjd018/image/upload/v1597698418/PreLawSociety/Events/Events_Latinos_Changing_America_o5vapd.jpg',
    description:
      'Bacon ipsum dolor amet rump pork belly filet mignon corned beef turducken kevin jowl pig sirloin short loin shank.',
    date: {
      year: 2020,
      month: 3,
      day: 5,
      startTime: {
        hour: 19,
        minute: 0,
      },
      endTime: {
        hour: 21,
        minute: 0,
      },
    },
    location: 'LSU Ballroom B',
    toroLink: linksAndContactInfo.toroLink,
  },
  {
    id: '1',
    type: 'event',
    name: 'Immigration Speaking Event',
    image:
      'https://res.cloudinary.com/dglxjd018/image/upload/v1597698416/PreLawSociety/Events/Events_Immigration_Speaking_Event_yn8ewu.jpg',
    description:
      'Bacon ipsum dolor amet rump pork belly filet mignon corned beef turducken kevin jowl pig sirloin short loin shank.',
    date: {
      year: 2019,
      month: 11,
      day: 21,
      startTime: {
        hour: 19,
        minute: 0,
      },
      endTime: {
        hour: 21,
        minute: 0,
      },
    },
    location: '1910 Cafe',
    toroLink: linksAndContactInfo.toroLink,
  },
];

export default events;
