import React from 'react';

const Footer = () => {
  return (
    <footer className='p-4 mx-auto flex flex-col justify-center md:items-center w-full object-bottom'>
      <span className='inline-block'>Copyright @2022 Joshua Coutinho</span>
      <div className='block grid grid-cols-4 gap-7 mt-2 '>
        <a href='https://www.behance.net/allenherze' target='_blank' rel='noopener noreferrer'>
          <img src='/social/behance.svg' alt='' />
        </a>
        <a href='https://dribbble.com/allenherze' target='_blank' rel='noopener noreferrer'>
          <img src='/social/dribbble.svg' alt='' />
        </a>
        <a href='https://www.linkedin.com/in/joshuacoutinho/' target='_blank' rel='noopener noreferrer'>
          <img src='/social/linkedin.svg' alt='' />
        </a>
        <a href='https://github.com/allenherze' target='_blank' rel='noopener noreferrer'>
          <img src='/social/github.svg' alt='' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
