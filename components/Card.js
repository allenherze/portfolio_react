import Link from 'next/link';
import React from 'react';
import CardData from '../pages/api/cards.json';

const Card = () => {
  return CardData.Cards.map((card) => {
    return (
      <Link href={`/projects/${card.slug}`} key={card.id}>
        <div className='p-10'>
          <div className='max-w-sm md:max-w-lg rounded overflow-hidden shadow-lg bg-white text-gray-700'>
            <div>
              <img src={card.coverImage} alt='edumateplus' />
              <div className='text-center text-blue-900'>
                <div className='px-6 pt-4 pb-2'>
                  <h2 className='font-poppins font-bold text-2xl'>{card.title}</h2>
                </div>
                <div className='px-6 pb-2'>
                  <span className='font-poppins text-sm'>{card.tags}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
};

export default Card;
