import React from 'react';
import '../App.css';

const PortfolioItem = ({ item }) => {
  return (
    <div className='portfolio-item'>
      <h3>{item.name}</h3>
      <img src={item.image} alt='project' />
      <p>{item.description}</p>
    </div>
  );
};

export default PortfolioItem;
