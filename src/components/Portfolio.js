import React from 'react';
import PortfolioItem from './Portfolioitem';
import imageOne from '../assets/p.jpg';
import '../App.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: 'Activity Generator',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni accusantium harum suscipit doloremque consequuntur quia? Iusto eaque ea molestiae commodi? Doloremque praesentium suscipit eius quas at quam ducimus nemo.',
      image: imageOne,
    },
    {
      id: 2,
      name: 'name2',
      item: 'item2',
      image: imageOne,
    },
  ];

  return (
    <div className='portfolio'>
      <h2 className='portfolio-header'>Portfolio</h2>
      {projects.map((item) => {
        return <PortfolioItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Portfolio;
