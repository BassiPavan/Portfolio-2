import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: 'CampusTrack',
    subtitle: 'Full-Stack Coding Leaderboard Platform',
    desc: 'A comprehensive full-stack platform that aggregates coding profiles from LeetCode, CodeChef, and HackerRank. Features real-time leaderboards, performance analytics, and competitive rankings for college students.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API', 'Leaderboard'],
    category: 'Full-Stack',
    github: 'https://github.com/BassiPavan',
    featured: true,
  },
  {
    title: 'Hand Gesture Volume Control',
    subtitle: 'OpenCV & MediaPipe – Infosys Project',
    desc: 'Advanced real-time hand gesture recognition system that detects hand gestures via webcam and controls system volume dynamically. Utilizes MediaPipe for 21-point hand landmark detection and OpenCV for image processing. Finger distance tracking algorithm adjusts volume levels based on gesture proximity.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'Gesture Recognition', 'Real-time Processing'],
    category: 'AI/ML',
    github: 'https://github.com/BassiPavan',
    featured: true,
  },
  {
    title: 'Travel Agency Web App',
    subtitle: 'Full-Stack Travel Booking Platform',
    desc: 'Fully responsive travel booking application for flights, hotels, and holiday packages. Features interactive maps, dynamic destination listings, user authentication, and a sleek UI/UX design.',
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['HTML', 'CSS', 'JavaScript', 'Maps API', 'Responsive'],
    category: 'Web',
    github: 'https://github.com/BassiPavan',
    featured: true,
  },
  {
    title: 'Smart House Management System',
    subtitle: 'Arduino + GSM Module',
    desc: 'IoT-based smart home automation system using Arduino microcontroller and GSM module. Enables remote control of home appliances via SMS commands and real-time sensor monitoring.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Arduino', 'GSM', 'IoT', 'C++', 'Embedded'],
    category: 'IoT',
    github: 'https://github.com/BassiPavan',
    featured: true,
  },
  {
    title: 'AI Resume Screening System',
    subtitle: 'NLP-Powered Recruitment Tool',
    desc: 'Automated resume shortlisting system using NLP and Scikit-learn. Extracts key skills and matches candidate profiles with job descriptions using TF-IDF vectorization and cosine similarity.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF', 'Streamlit'],
    category: 'AI/ML',
    github: 'https://github.com/BassiPavan',
    featured: false,
  },
  {
    title: 'Student Result Analysis System',
    subtitle: 'Python + Power BI Dashboard',
    desc: 'Comprehensive result analysis platform for educational institutions. Visualizes student performance trends, subject-wise analytics, and pass-fail ratios using Power BI dashboards.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'Power BI', 'DAX', 'Pandas', 'Analytics'],
    category: 'Data',
    github: 'https://github.com/BassiPavan',
    featured: false,
  },
  {
    title: 'Real-time Weather Dashboard',
    subtitle: 'OpenWeatherMap API Integration',
    desc: 'Real-time weather dashboard showing current weather, 7-day forecasts, humidity, and temperature charts. Built with responsive design and robust error handling using the OpenWeatherMap API.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['JavaScript', 'HTML', 'CSS', 'API', 'Charts'],
    category: 'Web',
    github: 'https://github.com/BassiPavan',
    featured: false,
  },
  {
    title: 'ATM Simulation Website',
    subtitle: 'Frontend Banking Interface',
    desc: 'Responsive ATM simulation website mimicking real-world ATM operations. Features include account login, balance checks, deposits, withdrawals, and complete transaction history management.',
    image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'UI/UX'],
    category: 'Web',
    github: 'https://github.com/BassiPavan',
    featured: false,
  },
];

const categories = ['All', 'Full-Stack', 'AI/ML', 'Web', 'IoT', 'Data'];

const categoryColors: Record<string, string> = {
  'Full-Stack': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  'AI/ML': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  'Web': 'text-teal-400 bg-teal-500/10 border-teal-500/20',
  'IoT': 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  'Data': 'text-slate-300 bg-slate-500/10 border-slate-500/20',
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-6"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="mono text-cyan-400 text-sm mb-2">// 03. my work</p>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <div className="section-line" />
        </div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.6s ease 0.1s',
          }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setShowAll(false); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/20'
                  : 'glass text-slate-400 border-slate-700/50 hover:text-cyan-400 hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(25px)',
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="project-img-overlay" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm mono ${categoryColors[project.category] || 'text-slate-300 bg-slate-500/10 border-slate-500/20'}`}>
                    {project.category}
                  </span>
                </div>

                {/* Hover actions */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                  >
                    <Github size={14} className="text-white" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                  >
                    <ExternalLink size={14} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-cyan-400 text-xs mono mb-3">{project.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-tag text-xs">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-3 border-t border-slate-700/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-medium"
                  >
                    <Github size={13} />
                    Source Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-medium ml-auto"
                  >
                    View Project
                    <ChevronRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        {filtered.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
            >
              {showAll ? 'Show Less' : `Show All ${filtered.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
