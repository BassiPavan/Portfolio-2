import { useRef } from 'react';
import { GraduationCap, MapPin, Mail, Phone, Code, Brain, Trophy, Leaf } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const education = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'Vardhaman College of Engineering',
    period: 'Aug 2023 – May 2027 (Expected)',
    score: 'CGPA: 9.32',
  },
  {
    degree: 'Intermediate – MPC',
    institution: 'SR Junior College',
    period: 'Sep 2021 – Jun 2023',
    score: '98.2%',
  },
  {
    degree: '10th Grade (SSC)',
    institution: 'ZPSS Wadoor',
    period: 'Graduated May 2020',
    score: 'CGPA: 9.8',
  },
];

const activities = [
  { icon: Code, label: 'Competitive Coding', desc: 'Regular participant on LeetCode, CodeChef' },
  { icon: Brain, label: 'AI Exploration', desc: 'Implemented TensorFlow models for personal projects' },
  { icon: Trophy, label: 'Hackathons', desc: 'ATF 2025 Stage 2 Candidate' },
  { icon: Leaf, label: 'Volunteering', desc: 'Tech workshops & NSS tree-planting drives' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-6"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="mono text-cyan-400 text-sm mb-2">// 01. about me</p>
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="section-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            <div className="glass-card rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Who am I?
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm <span className="text-cyan-400 font-semibold">Pavan Bassi</span>, a passionate B.Tech IT
                student at Vardhaman College of Engineering, Hyderabad. With a strong academic record and a
                hunger for building meaningful technology, I focus on full-stack development, data science,
                and AI/ML.
              </p>
              <p className="text-slate-400 leading-relaxed">
                As an Ex-Intern at AICTE (with Shell India & Edunet Foundation), I've worked on real-world
                AI and data analytics projects. I hold a 5-star rating in Java on HackerRank and have solved
                400+ problems on LeetCode, reflecting my strong DSA fundamentals.
              </p>
            </div>

            {/* Contact info */}
            <div className="glass-card rounded-2xl p-6 mb-6">
              <h3 className="text-base font-semibold text-slate-300 mb-4 mono">contact_info</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: Mail, label: 'bassipavan2020@gmail.com', href: 'mailto:bassipavan2020@gmail.com' },
                  { icon: Phone, label: '+91 8919465019', href: 'tel:+918919465019' },
                  { icon: MapPin, label: 'Hyderabad, Telangana, India', href: null },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-cyan-400" />
                    </div>
                    {href ? (
                      <a href={href} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">{label}</a>
                    ) : (
                      <span className="text-slate-400 text-sm">{label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CGPA Update */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-base font-semibold text-slate-300 mb-3 mono">academic_update</h3>
              <p className="text-slate-400 text-sm">Current CGPA: <span className="text-cyan-400 font-semibold">9.25</span></p>
            </div>
          </div>

          {/* Right: Education + Activities */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap size={18} className="text-cyan-400" />
                <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Education
                </h3>
              </div>

              <div className="relative pl-10">
                <div className="timeline-line" />
                <div className="flex flex-col gap-6">
                  {education.map((edu, i) => (
                    <div key={i} className="relative glass-card rounded-xl p-5">
                      <div className="timeline-dot" />
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">{edu.degree}</h4>
                          <p className="text-slate-400 text-xs mb-1">{edu.institution}</p>
                          <p className="text-slate-500 text-xs mono">{edu.period}</p>
                        </div>
                        <span className="tech-tag flex-shrink-0">{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Activities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {activities.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="glass-card rounded-xl p-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-3">
                      <Icon size={16} className="text-cyan-400" />
                    </div>
                    <h4 className="text-white text-sm font-semibold mb-1">{label}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
