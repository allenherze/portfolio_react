import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
    </div>
  );
}

export default App;
