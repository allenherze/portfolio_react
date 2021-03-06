import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Navbar';
import aboutStyles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <Nav />
        <div className={aboutStyles.aboutWrapper}>
          <section className={aboutStyles.grid}>
            <section>
              <h2>
                About <span className={aboutStyles.accent}>Me</span>
              </h2>
              <p>
                I’m Joshua, a recent postgraduate from the Welingkar Institute of Management and a self-taught UX designer with a background in Banking and Insurance. I also do Front-End Web Development from time to time and know HTML, CSS, JavaScript and React. <br />
                <br /> My interests are Formula 1, PC Gaming and I also play the guitar. While learning web development during the lockdown, I developed an interest in User Experience, and dove head first into the world of UX design. Currently I am taking the Google UX Design course from Coursera.
              </p>
              <a href='' className={aboutStyles.button}>
                Download My Resume
              </a>
            </section>
            <section className={aboutStyles.image}>
              <Image src='/about.svg' width='800%' height='800%' objectFit='contain' />
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
