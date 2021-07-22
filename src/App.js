import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Portfolio/>
    </div>
  );
}

export default App;
