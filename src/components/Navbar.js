import React, { useState } from 'react';
import { ArrowCircleLeftIcon, BarsIcon } from 'react-line-awesome';
import logo from '../logo.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [transform, setTransform] = useState('100%');

  const menuPos = {
    transform: `translateX(${transform})`,
  };

  const showMenu = () => {
    setOpen(!open);
    if (open === true) {
      setTransform('0');
    }
  };

  const closeMenu = () => {
    setOpen(false);
    setTransform('100%');
  };

  return (
    <>
      <nav className='navbar'>
        <div>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <div onClick={showMenu}>
          <BarsIcon className='menu-icon' />
        </div>
      </nav>
      <ul className='navmenu' style={menuPos}>
        <li>
          <ArrowCircleLeftIcon className='arrow-icon' onClick={closeMenu} />
        </li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </>
  );
};

export default Navbar;
