import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import VantaWaves from './components/Vanta';

function App() {
  return (
    <div>
      <div className="vanta-header">
        <VantaWaves />
        <Header />
      </div>

      <div className="video-section">
        <video autoPlay muted loop className="background-video">
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="content-overlay">
          <About />
          <Projects></Projects>
          <Contact></Contact>
          {/* Add more sections like Projects, Contact here */}
        </div>
      </div>
    </div>
  );
}

export default App;