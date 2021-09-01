import React from 'react';
import { ReactComponent as HeroImage } from '../assets/illustration.svg';

const Hero = () => {
  return (
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
    </div>
  );
};

export default Hero;
