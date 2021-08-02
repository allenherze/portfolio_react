import React from 'react';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element id='about' name='about'>
      <div className='about'>
        <h3 className='about-header'>About Me</h3>
        <div className='description'>
          <p>Based In Mumbai, MH, India</p>
          <p>A self taught Front End web developer by profession, guitar player & enthusiast, gamer and also interested finances and investment. If not for coding definitely would have been a musician</p>
          <p>The technologies I use are HTML, CSS, Sass, Javascript and frameworks like Bootstrap and Tailwind CSS. Currently learning React JS. Sometimes I delve into React Native also. </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
