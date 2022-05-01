import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../public/menu.svg';
import Close from '../public/close.svg';
import navbar from '../styles/Navbar.module.css';

export default function Navbar() {
  const [height, setHeight] = useState('0');

  const navOpen = () => {
    setHeight('100vh');
  };

  const menuDisplay = {
    height: height,
  };

  const navClose = () => {
    setHeight('0');
  };

  return (
    <nav className={navbar.container}>
      <Link href='/'>
        <div>
          <Image alt='Joshua Coutinho Logo' className={navbar.logo} src='/logo.svg' width={64} height={64} />{' '}
        </div>
      </Link>
      <div className={navbar.icon} onClick={navOpen}>
        <Image src={Menu} />
      </div>
      <div className={navbar.navlinks} style={menuDisplay}>
        <Link href='/about'>
          <p className={navbar.link} onClick={navClose}>
            About
          </p>
        </Link>
        <Link href='/projects'>
          <p className={navbar.link} onClick={navClose}>
            Projects
          </p>
        </Link>
        <p className={navbar.link} onClick={navClose}>
          Contact
        </p>
        <div onClick={navClose} className={navbar.close}>
          <Image src={Close} />
        </div>
      </div>
    </nav>
  );
}
