import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Global background layers */}
      <ParticleBackground />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      {/* Section separators as subtle gradient lines */}
      <div className="fixed inset-0 pointer-events-none grid-overlay" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <div className="section-sep" />
        <About />
        <div className="section-sep" />
        <Skills />
        <div className="section-sep" />
        <Projects />
        <div className="section-sep" />
        <Internships />
        <div className="section-sep" />
        <Certifications />
        <div className="section-sep" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
