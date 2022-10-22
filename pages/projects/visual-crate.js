import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Visual = () => {
  return (
    <>
      <Head>
        <title>Visual Crate | Website Design </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <article className='mx-auto flex flex-col justify-center p-20' style={{ maxWidth: '1140px' }}>
        {/* Article Header start */}
        <div className='text-center m-5'>
          <h1 className='font-poppins text-3xl mb-4'>Visual Crate</h1>
          <span className='font-opensans text-md'>Website Design and Development</span>
        </div>
        <img src='/visual.png' alt='edumate-title' className='h-auto w-full p-10' />
        {/* Article Header End */}

        {/* Article Section Start */}
        <div className='font-opensans'>
          {/* Overview Start */}
          <section className='p-5'>
            <h2 className='text-2xl mb-3 font-poppins'>Overview</h2>
            <p className='text-md mb-4'>Visual crate is one of the upcoming studios who provide services in video editing, photo editing, visual effects, and animation work. They are inspired by nature and they prominently feature street work in their image stills. They needed a portfolio to display their work, instead of going with a cookie cutter design they went with their custom site. </p>
            <p className='text-md'>My role in the project was a UI designer and then I developed the website with Next JS, with Cloudinary as backend for uploading the images. </p>
          </section>
          {/* Overview End */}

          <img src='/visual2.png' alt='edumate-title' className='h-auto w-full p-10' />

          {/* Problems start */}
          <section className='p-5'>
            <h2 className='text-2xl mb-3 font-poppins'>Goals</h2>
            <p className='text-md mb-4'>The goal of the business was to have their own platform other than Instagram or Facebook pages to have their photos displayed, and also a website would be the perfect place to expand into other services.</p>
            {/* Problem end */}
          </section>

          {/* Design process start */}
          <section className='p-5'>
            <h2 className='text-2xl mb-3 font-poppins'>Design Process</h2>
            <p className='text-md mb-4'>Since this was a new project from scratch, to get a base line idea of the project, firstly I examined the web templates which are available on the website builders, such as Wix, Wordpress, Webflow etc. And most of the standard templates follow the same layout of a portfolio, which starts with a hero landing section, greeting the user and then as the user scrolls down then you get to the about section and the gallery / works section. </p>
          </section>
          <img src='/visual3.png' alt='edumate-title' className='h-auto w-full p-10' />
          <section className='p-5'>
            <p className='text-md mb-4'>Instead of going the traditional route, it was decided that after scrolling down from the landing section, it would be better to display their recent works, and shifting the about section and the gallery to their own separate pages. With this design, a new user who is visiting their website can view their recent photos, and get a feel for what kind of work they do. Like a taster, at a restaurant. </p>
          </section>
          <img src='/visual4.png' alt='edumate-title' className=' h-auto w-full p-10 rounded-3xl' />
          <section className='p-5'>
            <p className='text-md mb-4'>The landing page was first designed to have a minimal clean look with a geometric background, but then it was decided that we will use a background which will provide more depth, and also it will be beneficial as the parallax scrolling effect would be implemented in the desktop viewpoint.</p>
          </section>
          {/* Design End */}

          {/* Results Start */}
          <section className='p-5'>
            <h2 className='text-2xl mb-3 font-poppins'>Results</h2>
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

export default Visual;
