import React from 'react';
import { ArrowCircleDownIcon } from 'react-line-awesome';
import { ReactComponent as HeroImage } from '../assets/illustration.svg';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <div className='container hero'>
        <div className='hero-content'>
          <h1 className='header'>Hello There</h1>
          <div className='content'>
            <span>I Design and</span>
            <span>Develop Websites</span>
            <span>Focusing on </span>
            <span>Responsive UX / UI</span>
          </div>
        </div>
        <HeroImage className='hero-image' />
        <Link to='services' spy={true} smooth={true} duration={700} offset={65} delay={400}>
          <ArrowCircleDownIcon className='arrow-icon' />
        </Link>
      </div>
    </>
  );
};

export default Hero;
