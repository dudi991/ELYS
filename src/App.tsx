
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Philosophy from './components/Philosophy';
import Ingredients from './components/Ingredients';
import Ritual from './components/Ritual';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-primary">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Philosophy />
      <Ingredients />
      <Ritual />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
