import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Internships', href: '#internships' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(i => i.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-space-grotesk font-bold text-lg gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Pavan<span className="text-slate-400">.</span>dev
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`nav-link ${active === item.href.slice(1) ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/BassiPavan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline py-2 px-4 text-sm"
          >
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-cyan-500/10 mt-2">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`text-left nav-link ${active === item.href.slice(1) ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/BassiPavan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline py-2 px-4 text-sm w-fit"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
