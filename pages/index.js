import Head from 'next/head';
import Nav from '../components/Navbar';
import Social from '../components/Social';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';
import About from '../components/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Nav />
        <div className={styles.hero}>
          <h1 className={styles.header}>
            <span className={styles.accent}>Joshua</span> Coutinho
          </h1>
          <span className={styles.description}>UX designer who is passionate in creating digital products </span>
        </div>
        <div className={styles.social}>
          <Social />
        </div>
        <svg width='16' height='21' viewBox='0 0 16 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L15.0711 14.3431C15.4616 13.9526 15.4616 13.3195 15.0711 12.9289C14.6805 12.5384 14.0474 12.5384 13.6569 12.9289L8 18.5858L2.34315 12.9289C1.95262 12.5384 1.31946 12.5384 0.928932 12.9289C0.538407 13.3195 0.538407 13.9526 0.928932 14.3431L7.29289 20.7071ZM7 -4.37114e-08L7 20L9 20L9 4.37114e-08L7 -4.37114e-08Z' fill='#FA4B00' />
        </svg>
      </main>
      <About />
    </div>
  );
}
