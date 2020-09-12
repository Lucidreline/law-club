import React from 'react';

import NavBar from '../../../nav-bar/nav-bar.component';
import AboutCard from '../../../about-card/about-card.component';
import SectionTitle from '../../../section-title/section-title.component';

const AboutUs = () => {
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
    </div>
  );
};

export default AboutUs;
