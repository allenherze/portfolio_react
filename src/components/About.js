import React from 'react';
import { Link, Element } from 'react-scroll';
import { ArrowCircleDownIcon } from 'react-line-awesome';
import { ReactComponent as AboutImage } from '../assets/build.svg';

const About = () => {
  return (
    <Element id='about' name='about'>
      <div className='about'>
        <h3 className='about-header'>About Me</h3>
        <div className='description'>
          <p>Based In Mumbai, MH, India</p>
          <p>A self taught Front End Web developer and UX / UI Designer by profession, guitar player & enthusiast, gamer and also interested finances and investment. If not for coding definitely would have been a musician</p>
          <p>The technologies I use are HTML, CSS, Sass, Javascript and frameworks like Bootstrap and Tailwind CSS. Currently learning React JS. Sometimes I delve into React Native also. </p>
        </div>
      </div>
      <AboutImage className='about-image' />
      <Link to='portfolio' spy={true} smooth={true} duration={700} delay={400} offset={65}>
        <ArrowCircleDownIcon className='about-arrow-icon' />
      </Link>
    </Element>
  );
};

export default About;
