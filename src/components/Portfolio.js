import React from 'react';
import PortfolioItem from './Portfolioitem';
import { Element } from 'react-scroll';
import imageOne from '../assets/projects/activity.png';
import imageTwo from '../assets/projects/quote.png';
import imageThree from '../assets/projects/quiz.png';
import '../App.css';

const Portfolio = () => {
  const projects = [
    {
      id: 3,
      name: 'Activity Generator',
      description: 'Are you feeling bored, then have fun with this activity generator. Click on the red button to get the activity and do some cool stuff. ',
      image: imageOne,
      button: ['View Github', 'Visit The Site'],
      buttonLink: ['https://github.com/allenherze/random_activity', 'https://facebook.com'],
    },
    {
      id: 4,
      name: 'Random Quote Generator',
      description: 'A website where you can get a random quote from an array and share it to Facebook and Twitter, also it has Dark mode integrated',
      image: imageTwo,
      button: ['View Github', 'Visit The Site'],
      buttonLink: ['https://github.com/allenherze/random_quote_generator', 'https://serene-knuth-84ef18.netlify.app/'],
    },
    {
      id: 5,
      name: 'Quiz Time',
      description: 'A single page app where you can answer questions for fun. The questions and the answers are being retrieved from the Open Trivia Database API',
      image: imageThree,
      button: ['View Github', 'Visit The Site'],
      buttonLink: ['https://github.com/allenherze/basic_quiz', 'https://angry-meitner-965739.netlify.app'],
    },
  ];

  return (
    <Element id='portfolio' name='portfolio'>
      <div className='portfolio'>
        <h2 className='portfolio-header'>Portfolio</h2>
        {projects.map((item) => {
          return <PortfolioItem key={item.id} item={item} />;
        })}
      </div>
    </Element>
  );
};

export default Portfolio;
