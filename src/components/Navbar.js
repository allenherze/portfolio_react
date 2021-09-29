import React, { useState } from 'react';
import { ArrowCircleLeftIcon, BarsIcon } from 'react-line-awesome';
import logo from '../logo.svg';
import { Link } from 'react-scroll';

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
    <div className='navbar-wrapper'>
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
        <li>
          <Link to='about' spy={true} smooth={true} duration={700} delay={400} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to='portfolio' spy={true} smooth={true} duration={700} delay={400} onClick={closeMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to='services' spy={true} smooth={true} duration={700} delay={400} onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to='contact' spy={true} smooth={true} duration={700} delay={400} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
