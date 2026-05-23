import { useRef } from 'react';
import { Award, Calendar, ExternalLink, Shield, Cloud, Code, Network, BarChart3, Plane, Book, Trophy } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const certifications = [
  {
    title: 'Programming in Java',
    issuer: 'NPTEL Online Certification',
    date: 'Jul-Oct 2024',
    desc: 'Elite certification with 73% score (25/25 Assignments, 47.75/75 Proctored). 12-week course covering OOP, data structures, and advanced Java concepts from IIT Kharagpur.',
    icon: Code,
    color: 'from-red-400 to-orange-500',
    accentColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    skills: ['Java', 'OOP', 'Data Structures', 'Advanced Programming'],
    badge: 'NPTEL Elite',
  },
  {
    title: 'The Joy of Computing Using Python',
    issuer: 'NPTEL Online Certification',
    date: 'Jul-Oct 2024',
    desc: 'Elite certification with 82% score (25/25 Assignments, 57/75 Proctored). Comprehensive Python course from IIT Madras covering computational thinking and problem-solving.',
    icon: Code,
    color: 'from-yellow-400 to-orange-500',
    accentColor: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    skills: ['Python', 'Computational Thinking', 'Problem Solving', 'Programming Logic'],
    badge: 'NPTEL Elite',
  },
  {
    title: 'Problem Solving through Programming in C',
    issuer: 'NPTEL Online Certification',
    date: 'Jan-Apr 2024',
    desc: 'NPTEL certification with 49% consolidated score from 12-week course. Covers fundamental problem-solving approaches, C programming concepts, and algorithm design.',
    icon: Code,
    color: 'from-blue-400 to-indigo-500',
    accentColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: ['C Programming', 'Algorithm Design', 'Problem Solving', 'DSA Fundamentals'],
    badge: 'NPTEL',
  },
  {
    title: 'Generative AI',
    issuer: 'Google Cloud',
    date: 'Oct 2024',
    desc: '45-hour course with 24 skill badges covering Large Language Models (LLMs), AI fundamentals, and generative AI applications on Google Cloud.',
    icon: Cloud,
    color: 'from-blue-400 to-cyan-500',
    accentColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: ['LLMs', 'Generative AI', 'Google Cloud', 'AI Fundamentals'],
    badge: 'Google Cloud',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Zscaler',
    date: 'Aug 2024 – 2026',
    desc: 'Comprehensive cybersecurity certification covering threat analysis, encryption techniques, network security protocols, and zero-trust architecture principles.',
    icon: Shield,
    color: 'from-cyan-400 to-teal-500',
    accentColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    skills: ['Threat Analysis', 'Encryption', 'Network Security', 'Zero Trust'],
    badge: 'Zscaler',
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Jul 2024',
    desc: 'Foundational Python programming certification covering problem-solving approaches, best practices, data structures, and object-oriented programming concepts.',
    icon: Code,
    color: 'from-teal-400 to-sky-500',
    accentColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/20',
    skills: ['Python', 'OOP', 'Data Structures', 'Problem Solving'],
    badge: 'Cisco',
  },
  {
    title: 'Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'Apr 2025',
    desc: 'Network fundamentals certification covering configuration and security of small networks using routing protocols, switching technologies, and IP addressing schemes.',
    icon: Network,
    color: 'from-sky-400 to-blue-500',
    accentColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/20',
    skills: ['Routing', 'Switching', 'IP Addressing', 'Network Security'],
    badge: 'Cisco',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia',
    date: '2024',
    desc: 'Virtual job simulation covering real-world data analytics workflows, business intelligence reporting, and data-driven decision making as practiced at Deloitte.',
    icon: BarChart3,
    color: 'from-blue-500 to-sky-400',
    accentColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: ['Data Analytics', 'Business Intelligence', 'Reporting', 'Excel'],
    badge: 'Forage',
  },
  {
    title: 'Data Science Job Simulation',
    issuer: 'British Airways',
    date: '2024',
    desc: 'Virtual data science simulation focused on customer sentiment analysis, NLP-based text processing, and presenting actionable business insights from unstructured data.',
    icon: Plane,
    color: 'from-cyan-500 to-blue-400',
    accentColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    skills: ['NLP', 'Sentiment Analysis', 'Python', 'Data Science'],
    badge: 'Forage',
  },
  {
    title: 'Learning Excel: Data Analysis',
    issuer: 'LinkedIn Learning',
    date: 'Feb 2025',
    desc: 'Completed comprehensive Excel data analysis course (3 hours 16 minutes). Covers advanced data analysis techniques, pivot tables, charts, and business intelligence using Microsoft Excel.',
    icon: BarChart3,
    color: 'from-teal-400 to-green-500',
    accentColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/20',
    skills: ['Excel', 'Data Analysis', 'Business Intelligence', 'Data Visualization'],
    badge: 'LinkedIn Learning',
  },
  {
    title: 'Weekly Coding Challenge - Rank 677',
    issuer: 'Unstop',
    date: '2024',
    desc: 'Certificate of Excellence for achieving 677th rank in Challenge 22 of Weekly Coding Challenge organized by Unstop. Demonstrates competitive programming skills and algorithmic problem-solving.',
    icon: Trophy,
    color: 'from-purple-400 to-pink-500',
    accentColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    skills: ['Competitive Programming', 'Algorithms', 'Data Structures', 'Problem Solving'],
    badge: 'Unstop',
  },
  {
    title: 'Web Development Fundamentals',
    issuer: 'Cisco / Networking Academy',
    date: '2024',
    desc: 'Comprehensive web development fundamentals covering HTML5, CSS3, JavaScript, and modern responsive design principles for building production-ready websites.',
    icon: Code,
    color: 'from-teal-500 to-cyan-400',
    accentColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/20',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    badge: 'Cisco',
  },
  {
    title: 'ATF 2025 Candidate',
    issuer: 'ATF (Asia Tech Forum)',
    date: '2025',
    desc: 'Achieved Stage 2 Candidate status at Asia Tech Forum 2025, competing in technical challenges covering AI, software engineering, and innovation.',
    icon: Award,
    color: 'from-sky-500 to-teal-400',
    accentColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/20',
    skills: ['AI', 'Innovation', 'Technical Challenges', 'Competition'],
    badge: 'ATF 2025',
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="certifications"
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
          <p className="mono text-cyan-400 text-sm mb-2">// 05. credentials</p>
          <h2 className="section-title gradient-text">Certifications</h2>
          <div className="section-line" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="glass-card rounded-2xl overflow-hidden group cursor-default"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${i * 60}ms, transform 0.6s ease ${i * 60}ms`,
                }}
              >
                {/* Top accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${cert.color}`} />

                <div className="p-5">
                  {/* Icon & badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${cert.bgColor} border ${cert.borderColor} flex items-center justify-center`}>
                      <Icon size={20} className={cert.accentColor} />
                    </div>
                    <span className={`text-xs font-medium mono px-2 py-1 rounded-full ${cert.bgColor} border ${cert.borderColor} ${cert.accentColor}`}>
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white font-bold text-sm mb-1 leading-snug"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {cert.title}
                  </h3>
                  <p className={`${cert.accentColor} text-xs font-medium mb-2`}>{cert.issuer}</p>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <Calendar size={11} className="text-slate-500" />
                    <span className="text-slate-500 text-xs mono">{cert.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                    {cert.desc}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 3).map(skill => (
                      <span key={skill} className="tech-tag text-xs py-0.5">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Hover footer */}
                <div className="px-5 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-px w-full ${cert.bgColor} mb-3`} />
                  <button className={`flex items-center gap-1.5 ${cert.accentColor} text-xs font-medium hover:underline`}>
                    <ExternalLink size={11} />
                    View Certificate
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
