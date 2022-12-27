import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='m-auto w-full z-10 ease-in duration-300'>
      <div className='m-auto max-w-[1240px]  flex justify-between items-center p-4 '>
        <Link href='/'>
          <h2 className='font-kalam mr-auto text-2xl mt-2'>Joshua Coutinho</h2>
        </Link>
        <ul className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/#about'>About Me</Link>
          </li>
          <li className='p-4'>
            <a href='https://www.behance.net/allenherze' target='_blank' rel='noopener noreferrer'>
              Behance
            </a>
          </li>
          <li className='p-4'>
            <a href='https://dribbble.com/allenherze' target='_blank' rel='noopener noreferrer'>
              Dribbble
            </a>
          </li>
          <li className='p-4'>
            <a href='https://github.com/allenherze' target='_blank' rel='noopener noreferrer'>
              Github
            </a>
          </li>
        </ul>

        {/* {Mobile button} */}
        <div className='block sm:hidden z-10' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* {Mobile menu} */}
        <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center bg-gray-700 ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center bg-gray-700 ease-in duration-300'}>
          <ul>
            <li className='p-4 text-2xl'>
              <Link href='/#about'>About Me</Link>
            </li>
            <li className='p-4 text-2xl'>
              <Link href='/#about'>Behance</Link>
            </li>
            <li className='p-4 text-2xl'>
              <Link href='/#about'>Dribbble</Link>
            </li>
            <li className='p-4 text-2xl'>
              <Link href='/#about'>Coding</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
