import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Edumate = () => {
  return (
    <>
      <Head>
        <title>Edumate Plus | Website Redesign</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <article className='mx-auto flex flex-col justify-center p-20' style={{ maxWidth: '1140px' }}>
        {/* Article Header start */}
        <div className='text-center m-5'>
          <h1 className='font-poppins text-4xl mb-4'>Edumate Plus</h1>
          <span className='font-opensans text-md'>Website Redesign</span>
        </div>
        <img src='/edumate.png' alt='edumate-title' className='h-auto w-full p-10' />
        {/* Article Header End */}

        {/* Article Section Start */}
        <div className='font-opensans'>
          {/* Overview Start */}
          <section className='p-5'>
            <h2 className='text-3xl mb-3 font-poppins'>Overview</h2>
            <p className='text-md mb-4'>Edumate Plus is one of the renowned brands in the ed-tech space, providing real test environments to excel in entrance tests. The brand has a website and an app which caters to the users mainly consisting of students who appear for the entrance test and the parents of the said students.And recently they also started to partner with NGOs to provide services to corporates. The website is the primary source for getting people to sign up to access the mock test and study materials</p>
            <p className='text-md'>My responsibilities as a designer was to redesign the website and the project duration was for 4 weeks while being involved the CEO of the company.</p>
          </section>
          {/* Overview End */}
          <div className='relative flex py-5 items-center'>
            <div className='flex-grow border-t border-gray-400'></div>
          </div>

          <img src='/edumate2.png' alt='edumate-title' className='h-auto w-full p-10' />

          {/* Problems start */}
          <section className='p-5'>
            <h2 className='text-3xl mb-3 font-poppins'>Problems and Goals</h2>
            <p className='text-md mb-4'>The current design looked like if the template was used, also there were confusing call to actions which led to friction to the user creating an account. And the lack of whitespace was not providing a distinct start and end point to a section</p>
            <p className='text-md mb-4'>The user goals were to ensure that new accounts are created with less hassle, and have a website with clear and easy to read sections.</p>
            {/* Problem end */}
          </section>
          <div className='relative flex py-5 items-center'>
            <div className='flex-grow border-t border-gray-400'></div>
          </div>
          {/* {Border} */}

          {/* Design process start */}
          <section className='p-5'>
            <h2 className='text-3xl mb-3 font-poppins'>Design Process</h2>
            <p className='text-md mb-4'>As the users highlighted in their first impressions, the overall feel of the site was too cluttered with lot of unnecessary animations and poorly spaced sections, The website is the primary source for signups from students and corporates which brings in the main revenue for the brand. The general aesthetic of the site which we aimed to achieve was clean and modern, the previous version gave a feeling of clutter, due to so many elements being in the site and distracting the user from the primary task of signing up</p>
          </section>
          <img src='/edumate3.png' alt='edumate-title' className='h-auto w-full p-10' />
          <section className='p-5'>
            <p className='text-md mb-4'>Coming to the part of registering an account, the initial version offered a create account button in the navigation menu, and also there was a Get Started button, but the button was confusing to the user as which action would occur if the button was clicked, turns out it was to sign up. So, in the updated design we ensured that the users have a clear button for signing up, as this is the primary function of the site.</p>
          </section>
          <img src='/edumate4.png' alt='edumate-title' className=' h-auto w-full p-10 rounded-3xl' />
          <section className='p-5'>
            <p className='text-md mb-4'>When scrolling through the website there is a lack of distinction of a start and end point with the sections because of no whitespace. This makes the users a bit lost, because there no clear landmark as to where the section starts or ends, so the revised design ensures that the sections have whitespace and a clear distinction.</p>
          </section>
          {/* Design End */}
          <div className='relative flex py-5 items-center'>
            <div className='flex-grow border-t border-gray-400'></div>
          </div>
          <h2 className='text-3xl mb-3 font-poppins'>Design System</h2>
          <img src='/edumate5.png' alt='edumate-title' className=' h-auto w-full p-10 rounded-3xl' />
          <div className='relative flex py-5 items-center'>
            <div className='flex-grow border-t border-gray-400'></div>
          </div>
          {/* Results Start */}
          <section className='p-5'>
            <h2 className='text-3xl mb-3 font-poppins'>Results</h2>
            <p className='text-md mb-4'>Due to the simplified nature of the actions, the user can easily sign up a test account, which is their main action, which would lead to customer retention and the overall sentiment was positive</p>
          </section>
          {/* Results End */}
        </div>
        <Link href='/'>
          <span className='font-opensans text-center mt-10 text-sm underline'>Back to home</span>
        </Link>
      </article>
      {/* Article End */}
    </>
  );
};

export default Edumate;
