import React from 'react';

import NavBar from '../../../nav-bar/nav-bar.component';
import AboutCard from '../../../about-card/about-card.component';
import SectionTitle from '../../../section-title/section-title.component';
import ValueCard from '../../../value-card/value-card.component';

const AboutUs = () => {
  const values = [
    {
      text:
        'Pre Law Society will work towards helping students achieve a better knowledge about how the law school application process looks like.',
      background:
        'https://res.cloudinary.com/dglxjd018/image/upload/v1599886345/PreLawSociety/Values/Values_Gavel_ii6ysx.jpg',
    },
    {
      text:
        'Pre Law Society will work towards providing students the information necessary in order for them to make an intelligent choice about the law schools they wish to attend.',
      background:
        'https://res.cloudinary.com/dglxjd018/image/upload/v1599886345/PreLawSociety/Values/Values_Books_ofphkd.jpg',
    },
    {
      text:
        'Pre Law Society will work towards bringing guest speakers in order to give students more insight into the different types of law.',
      background:
        'https://res.cloudinary.com/dglxjd018/image/upload/v1599886345/PreLawSociety/Values/Values_Washington_fe8gst.jpg',
    },
    {
      text:
        'Pre Law Society works towards exposing students to various programs and internships in order to add to their experience for their resume.',
      background:
        'https://res.cloudinary.com/dglxjd018/image/upload/v1599886345/PreLawSociety/Values/Values_Courtroom_tbkboh.jpg',
    },
  ];
  return (
    <div>
      <NavBar />
      {/* eslint-disable-next-line */}
      <h1 style={{ textAlign: 'center' }}>🚧 Under Construction!👷‍♂ 🚧</h1>
      <SectionTitle title='About Us' />

      <AboutCard
        title='Our Purpose'
        paragraphs={[
          'The purposes of this organization are to provide pre-law students with the information they need to make an intelligent choice about law schools, and also to stimulate an interest in law on campus generally. Although many of Pre-Law Society members are planning to attend law school, many others simply have an interest in the law and how it affects all the aspects of their personal, community, and business activities. While many members are business or political science majors, the membership of the Pre-Law Society ecompasses a wide variety of interests and talents.',
        ]}
      />
      <AboutCard
        title='Our Mission'
        paragraphs={[
          'The purposes of this organization are to provide pre-law students with the information they need to make an intelligent choice about law schools, and also to stimulate an interest in law on campus generally. Although many of Pre-Law Society members are planning to attend law school, many others simply have an interest in the law and how it affects all the aspects of their personal, community, and business activities. While many members are business or political science majors, the membership of the Pre-Law Society ecompasses a wide variety of interests and talents.',
        ]}
      />
      <AboutCard
        title='Our Values'
        paragraphs={[
          'Pre Law Society will work towards helping students achieve a better knowledge about how the law school application process looks like.',
          'Pre Law Society will work towards providing students the information necessary in order for them to make an intelligent choice about the law schools they wish to attend.',
          'Pre Law Society will work towards bringing guest speakers in order to give students more insight into the different types of law.',
          'Pre Law Society works towards exposing students to various programs and internships in order to add to their experience for their resume.',
        ]}
      />
      {values.map((value, index) => (
        <ValueCard
          text={value.text}
          index={++index}
          key={index}
          background={value.background}
        />
      ))}
    </div>
  );
};

export default AboutUs;
