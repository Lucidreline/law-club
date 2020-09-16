// use in case you don't have the torolink for the event
import linksAndContactInfo from './linksAndContactInfo.data';

const events = [
  {
    id: '1',
    type: 'event',
    name: 'Expungment Clinic',
    image:
      'https://res.cloudinary.com/dglxjd018/image/upload/v1600234643/PreLawSociety/Events/Expungment_Clinic_qsvtoo.jpg',
    description:
      'Scholars United and Pre-Law Society hosted a free expungement clinic to help people who have felony or misdemeanor records on file. With the help of Attorney Eric Garcia, many CSUDH Students received adequate legal advice in order to get their criminal record cleaned. In addition, those with felonies received the legal assistance they needed in order to have their felony reclassified under Prop 47. Both Pre Law Society and Scholars United believe that students deserve a second chance at receiving the proper education they are working so hard for without their rough past affecting them.',
    date: {
      year: 2019,
      month: 11,
      day: 23,
      startTime: {
        hour: 13,
        minute: 30,
      },
      endTime: {
        hour: 15,
        minute: 30,
      },
    },
    location: 'SAC 3165',
    toroLink: linksAndContactInfo.toroLink,
  },
  {
    id: '1',
    type: 'event',
    name: 'Immigration Event',
    image:
      'https://res.cloudinary.com/dglxjd018/image/upload/v1600235331/PreLawSociety/Events/Immigration_Flyer_scc3vu.png',
    description:
      "Pre Law Society was honored to have hosted a panel with Attorney Sabrina Rivera, CSUDH Alumni and Supervising Attorney for Central American Resource Center- Los Angeles (CARECEN-LA). During this event, Attorney Sabrina Rivera discussed recent immigration policies and how our current administration has affected immigration policies. She also discussed what the Immigration Law field consists of and what it takes to be an Immigration Lawyer. She graduated from Loyola Law School where she received the Dean's Service Award and interned at Public Counsel's Immigrants' Rights Project. She is also an alumni of our very own CSUDH. During this panel, not only did students get to learn from Attorney Sabrina Rivera, but were also given the opportunity to network with various prosperous pre law students and attorneys.",
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
    toroLink: 'https://torolink.csudh.edu/event/5089506',
  },
];

export default events;
