import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
