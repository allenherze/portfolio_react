import React from 'react';
import { FacebookIcon, InstagramIcon, DribbbleIcon, LinkedinIcon, GithubIcon } from 'react-line-awesome';
import '../App.css';

const Footer = () => {
  return (
    <div className='footer'>
      <span>Follow me on social media</span>
      <div className='social'>
        <a href='https://www.facebook.com/allenherze' target='_blank' rel='noopener noreferrer'>
          <FacebookIcon />
        </a>
        <a href='https://www.instagram.com/joshuacoutinho/' target='_blank' rel='noopener noreferrer'>
          <InstagramIcon />
        </a>
        <a href='https://dribbble.com/allenherze' target='_blank' rel='noopener noreferrer'>
          <DribbbleIcon />
        </a>
        <a href='https://www.linkedin.com/in/joshua-coutinho-353277143/' target='_blank' rel='noopener noreferrer'>
          <LinkedinIcon />
        </a>
        <a href='https://github.com/allenherze' target='_blank' rel='noopener noreferrer'>
          <GithubIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
