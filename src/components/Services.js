import React from 'react';
import { Link, Element } from 'react-scroll';
import { ArrowCircleDownIcon } from 'react-line-awesome';
import { ReactComponent as ServiceImage } from '../assets/brainstorming.svg';

const Services = () => {
  return (
    <Element id='services' name='services'>
      <div className='services'>
        <div className='service-content'>
          <h3 className='service-header'>Services Offered</h3>
          <div className='service-description'>
            <p>In This day and age of hyperconnectvity, going digital seems a great step in jumping in. </p>
            <p>Get you business online with a website, you can ask me for design consultation, create a User Experience Design and build from scratch or convert your design into code and deploy. Click on the button below to contact me.</p>
            <button className='btn-contact'>
              <a href='mailto:joshuac6378@gmail.com'>Contact Me</a>
            </button>
          </div>
        </div>
        <ServiceImage className='service-image' />
        <Link to='about' spy={true} smooth={true} duration={700} delay={400}>
          <ArrowCircleDownIcon className='service-arrow-icon' />
        </Link>
      </div>
    </Element>
  );
};

export default Services;
