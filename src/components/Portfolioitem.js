import React from 'react';
import '../App.css';

const PortfolioItem = ({ item }) => {
  return (
    <div className='portfolio-item'>
      <h3>{item.name}</h3>
      <div className='portfolio-image'>
        <img src={item.image} alt='project' />
      </div>
      <p>{item.description}</p>
      <div className='buttons'>
        <a href={item.buttonLink?.[0]} target='_blank' className='btn' rel='noopener noreferrer'>
          {item.button?.[0]}
        </a>
        {item.button?.[1] === '' ? (
          ''
        ) : (
          <a href={item.buttonLink?.[1]} target='_blank' className='btn' rel='noopener noreferrer'>
            {item.button?.[1]}
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
