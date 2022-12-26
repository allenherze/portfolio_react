import Link from 'next/link';
import React from 'react';
import CardData from '../pages/api/cards.json';

const Card = () => {
  return CardData.Cards.map((card) => {
    return (
      <>
        {/* <div className='p-10 cursor-pointer'>
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
        </div> */}
        <div className='grid grid-cols-2 p-12 gap-10'>
          <div className='w-auto h-auto '>
            <img src={card.coverImage} alt={card.coverImage} className='rounded-lg' />
          </div>
          <div className='flex flex-col justify-center align-center'>
            <div className='px-6 pt-4 pb-2'>
              <h2 className='font-poppins font-semibold text-4xl'>{card.title}</h2>
            </div>
            <div className='px-6 pb-2 flex flex-col justify-evenly align-center'>
              <span className='font-opensans text-xl py-5 mb-5'>{card.tags}</span>
              <Link href={`/projects/${card.slug}`} key={card.id} class>
                <button className='mt-5 w-2/4 bg-transparent text-purple-700 font-semibold py-4 px-4 border border-purple-500 rounded-full text-xl'>Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default Card;
