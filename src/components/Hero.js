import React from 'react';
import { ArrowCircleDownIcon } from 'react-line-awesome';

const Hero = () => {
  return (
    <div className='container hero'>
      <h1 className='header'>Hello There</h1>
      <div className='content'>
        <span>I Design and</span>
        <span>Develop Websites</span>
        <span>Focusing on </span>
        <span>Responsive UX / UI</span>
      </div>
      <ArrowCircleDownIcon className='arrow-down' />
    </div>
  );
};

export default Hero;
