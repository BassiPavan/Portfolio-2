import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-10 px-6 border-t border-cyan-500/10" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Pavan Bassi
            </span>
          </button>

          {/* Credits */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with
            <Heart size={13} className="text-cyan-400 fill-cyan-400" />
            by Pavan Bassi &copy; {new Date().getFullYear()}
          </p>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { icon: Github, href: 'https://github.com/BassiPavan' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/bassi-pavan-1021992aa/' },
              { icon: Mail, href: 'mailto:bassipavan2020@gmail.com' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg glass border border-cyan-500/15 flex items-center justify-center hover:border-cyan-400/40 transition-all duration-300"
              >
                <Icon size={15} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
