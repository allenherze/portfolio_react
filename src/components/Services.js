import React from 'react';
import { Element } from 'react-scroll';

const Services = () => {
  return (
    <Element id='services' name='services'>
      <div className='services'>
        <h3 className='service-header'>Services Offered</h3>
        <div className='service-description'>
          <p>In This day and age of hyperconnectvity, going digital seems a great step in jumping in. </p>
          <p>Get you business online with a website, you can ask me for design consultation, create a User Experience Design and build from scratch or convert your design into code and deploy. Click on the button below to contact me.</p>
          <button className='btn-contact'>Contact Me</button>
        </div>
      </div>
    </Element>
  );
};

export default Services;
