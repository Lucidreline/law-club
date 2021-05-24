import React from 'react';

import './section-title.styles.scss';

const SectionTitle = ({ title }) => {
  return (
    <section className='section-title'>
      <h2>
        <span>{title}</span>
      </h2>
    </section>
  );
};

export default SectionTitle;
