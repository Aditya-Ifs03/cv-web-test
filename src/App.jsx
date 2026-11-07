import DotGridBackground from './components/layout/DotGridBackground';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <DotGridBackground />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Home />
      </main>
      <Footer />
    </>
  );
}
