import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Download, ArrowDown, Terminal } from 'lucide-react';

const roles = [
  'Full-Stack Developer',
  'Data Science Enthusiast',
  'AI/ML Engineer',
  'Problem Solver',
  '400+ LeetCode Problems',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!isDeleting && charIndex < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 70);
    } else if (!isDeleting && charIndex === current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(r => (r + 1) % roles.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background radial glow */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" style={{ zIndex: 1 }} />

      <div
        className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {/* Left content */}
        <div>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="mono text-xs text-cyan-400 font-medium">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="block text-2xl text-slate-400 font-normal mb-2 mono">Hello, I'm</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Pavan{' '}
              <span className="gradient-text">Bassi</span>
            </span>
          </h1>

          {/* Typing animation */}
          <div className="flex items-center gap-2 mb-6 h-10">
            <Terminal size={18} className="text-cyan-400 flex-shrink-0" />
            <span className="mono text-xl md:text-2xl text-cyan-300 font-medium">
              {displayText}
              <span className="animate-blink text-cyan-400">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
            B.Tech IT student at Vardhaman College of Engineering with a{' '}
            <span className="text-cyan-400 font-semibold">9.25 CGPA</span>. Passionate about building
            intelligent systems, full-stack web applications, and solving complex algorithmic problems.
            Ex-Intern @ AICTE & Infosys | 5★ Java on HackerRank.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>View My Work</span>
            </button>
            <a
              href="https://www.linkedin.com/in/bassi-pavan-1021992aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <span className="text-slate-500 text-sm mono">// connect with me</span>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/BassiPavan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-lg glass border-glow hover:border-cyan-400/40 transition-all duration-300"
              >
                <Github size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/bassi-pavan-1021992aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-lg glass border-glow hover:border-cyan-400/40 transition-all duration-300"
              >
                <Linkedin size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Avatar/Code card */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            {/* Outer ring */}
            <div
              className="absolute inset-0 rounded-full border border-cyan-500/20"
              style={{
                width: '420px',
                height: '420px',
                animation: 'rotate-slow 20s linear infinite',
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-lg" style={{ boxShadow: '0 0 10px #00d4ff' }} />
            </div>

            {/* Inner ring */}
            <div
              className="absolute rounded-full border border-blue-500/15"
              style={{
                width: '340px',
                height: '340px',
                top: '40px',
                left: '40px',
                animation: 'rotate-slow 15s linear infinite reverse',
              }}
            >
              <div className="absolute bottom-0 right-8 w-2 h-2 rounded-full bg-blue-400" style={{ boxShadow: '0 0 8px #0066ff' }} />
            </div>

            {/* Avatar area */}
            <div
              className="relative glass-card rounded-full flex items-center justify-center animate-float"
              style={{
                width: '280px',
                height: '280px',
                margin: '70px',
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/30">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Pavan Bassi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-900/30 to-transparent" />
              </div>
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute glass-card rounded-xl px-4 py-3 text-center"
              style={{ top: '20px', right: '-20px' }}
            >
              <div className="gradient-text font-bold text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>9.25</div>
              <div className="text-slate-400 text-xs mt-1">CGPA</div>
            </div>

            <div
              className="absolute glass-card rounded-xl px-4 py-3 text-center"
              style={{ bottom: '40px', left: '-20px' }}
            >
              <div className="gradient-text font-bold text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>400+</div>
              <div className="text-slate-400 text-xs mt-1">LeetCode</div>
            </div>

            <div
              className="absolute glass-card rounded-xl px-4 py-3 text-center"
              style={{ bottom: '20px', right: '-30px' }}
            >
              <div className="gradient-text font-bold text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>5★</div>
              <div className="text-slate-400 text-xs mt-1">HackerRank Java</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors group"
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        <span className="mono text-xs">scroll down</span>
        <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
      </button>
    </section>
  );
}
