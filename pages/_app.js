import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <motion.main
          key={router.route}
          initial='pageInitial'
          animate='pageAnimate'
          exit='pageExit'
          variants={{
            pageInitial: {
              opacity: 0,
              x: 0,
              y: 0,
              transition: 0.01,
            },
            pageAnimate: {
              opacity: 1,
              x: 0,
              y: 0,
              transition: 0.01,
            },
            pageExit: {
              opacity: 0,
              x: 0,
              y: 0,
              transition: 0.01,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
