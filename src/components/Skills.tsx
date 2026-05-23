import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const skillGroups = [
  {
    category: 'Languages',
    color: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'C', level: 75 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    category: 'Web Development',
    color: 'from-teal-400 to-cyan-500',
    skills: [
      { name: 'HTML / CSS', level: 90 },
      { name: 'React / Vite', level: 72 },
      { name: 'Streamlit', level: 75 },
      { name: 'Node.js', level: 60 },
    ],
  },
  {
    category: 'Data & AI/ML',
    color: 'from-blue-400 to-sky-500',
    skills: [
      { name: 'Power BI / DAX', level: 80 },
      { name: 'Pandas / NumPy', level: 82 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'NLP / TF-IDF', level: 70 },
      { name: 'TensorFlow', level: 62 },
    ],
  },
  {
    category: 'Tools & Platforms',
    color: 'from-sky-400 to-blue-600',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'PyPDF2', level: 72 },
      { name: 'OpenCV', level: 65 },
      { name: 'MediaPipe', level: 60 },
    ],
  },
];

const techBadges = [
  'Python', 'Java', 'JavaScript', 'C', 'SQL',
  'HTML5', 'CSS3', 'React', 'Streamlit', 'Node.js',
  'Power BI', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow',
  'NLP', 'OpenCV', 'MediaPipe', 'Git', 'PyPDF2',
];

interface SkillBarProps {
  name: string;
  level: number;
  inView: boolean;
  delay: number;
  gradient: string;
}

function SkillBar({ name, level, inView, delay, gradient }: SkillBarProps) {
  return (
    <div
      className="mb-4"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-15px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="mono text-cyan-400 text-xs">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient} relative`}
          style={{
            width: inView ? `${level}%` : '0%',
            transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay + 200}ms`,
          }}
        >
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white"
            style={{
              boxShadow: '0 0 8px rgba(0, 212, 255, 0.8)',
              opacity: inView ? 1 : 0,
              transition: `opacity 0.3s ease ${delay + 1000}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="skills"
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
          <p className="mono text-cyan-400 text-sm mb-2">// 02. technical skills</p>
          <h2 className="section-title gradient-text">Skills & Expertise</h2>
          <div className="section-line" />
        </div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${gi * 100}ms, transform 0.6s ease ${gi * 100}ms`,
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${group.color}`} />
                <h3 className="text-white font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  inView={inView}
                  delay={gi * 100 + si * 80}
                  gradient={group.color}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div
          className="glass-card rounded-2xl p-8"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.6s ease 0.4s',
          }}
        >
          <h3 className="text-center text-slate-300 font-semibold mb-6 mono text-sm">
            // tech_stack
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techBadges.map((badge, i) => (
              <span
                key={badge}
                className="tech-tag"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'scale(1)' : 'scale(0.8)',
                  transition: `opacity 0.4s ease ${i * 40}ms, transform 0.4s ease ${i * 40}ms`,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { value: '400+', label: 'LeetCode Problems' },
            { value: '9.25', label: 'CGPA' },
            { value: '5★', label: 'HackerRank Java' },
            { value: '10+', label: 'Projects Built' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-5 text-center"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(15px)',
                transition: `opacity 0.5s ease ${0.5 + i * 0.1}s, transform 0.5s ease ${0.5 + i * 0.1}s`,
              }}
            >
              <div className="gradient-text text-3xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
