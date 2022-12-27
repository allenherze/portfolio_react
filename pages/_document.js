import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link href='https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Open+Sans&family=Poppins&display=swap' rel='stylesheet' />
          <meta name='description' content='Welcome to my UX design website. I am a UX designer passionate in creating user-friendly and intuitive designs for websites and mobile apps.' />
          <meta name='keywords' content='ux design, user experience design, web design, mobile app design' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='canonical' href='https://www.joshuacoutinho.com' />
          <meta property='og:title' content='My UX Design Website' />
          <meta property='og:description' content='Welcome to my UX design website. I am a UX designer passionate in creating user-friendly and intuitive designs for websites and mobile apps.' />
          <meta property='og:image' content='/images/ux-design-thumbnail.jpg' />
          <meta property='og:url' content='https://www.joshuacoutinho.com' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='My UX Design Website' />
          <meta name='twitter:description' content='Welcome to my UX design website. I am a UX designer passionate in creating user-friendly and intuitive designs for websites and mobile apps.' />
          <meta name='twitter:image' content='/images/ux-design-thumbnail.jpg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
