import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const internships = [
  {
    role: 'Spring Boot Development Intern',
    company: 'Infosys',
    program: 'Infosys Internship Program',
    period: 'Present',
    location: 'Remote',
    duration: 'On-going',
    color: 'from-sky-400 to-cyan-500',
    accentColor: 'text-sky-400',
    borderColor: 'border-sky-500/20',
    bgColor: 'bg-sky-500/5',
    achievements: [
      'Developing full-stack Spring Boot applications with RESTful API architecture and microservices design patterns.',
      'Implemented Hand Gesture Volume Control project using OpenCV and MediaPipe for real-time hand gesture recognition via webcam.',
      'Detecting hand gestures in real-time using 21-point hand landmark detection to control system volume dynamically.',
      'Working with modern Java frameworks, database integration, and cloud-based deployment strategies.',
    ],
    skills: ['Spring Boot', 'Java', 'REST APIs', 'OpenCV', 'MediaPipe', 'Computer Vision', 'Python'],
    certificate: 'Spring Boot Development',
  },
  {
    role: 'Virtual Intern – Artificial Intelligence & Data Analytics',
    company: 'AICTE (with Shell India & Edunet Foundation)',
    program: 'Skills4Future Program',
    period: 'Dec 2024 – Jan 2025',
    location: 'Remote',
    duration: '4 Weeks',
    color: 'from-cyan-400 to-blue-500',
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    bgColor: 'bg-cyan-500/5',
    achievements: [
      'Completed intensive 4-week virtual internship under the Skills4Future program focused on AI and data analytics for sustainable development.',
      'Developed predictive models and created data visualizations to analyze environmental datasets and propose green-tech solutions.',
      'Gained insights into ethical AI practices and real-world applications through expert-led sessions and collaborative learning.',
      'Built end-to-end ML pipelines integrating data preprocessing, feature engineering, and model evaluation.',
    ],
    skills: ['Python', 'Machine Learning', 'Data Visualization', 'Power BI', 'Pandas', 'Scikit-learn'],
    certificate: 'AI & Data Analytics Internship Certificate',
  },
  {
    role: 'Data Analytics Job Simulation',
    company: 'Deloitte Australia',
    program: 'Virtual Job Simulation – Forage',
    period: '2024',
    location: 'Virtual',
    duration: '2 Weeks',
    color: 'from-blue-400 to-sky-500',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/5',
    achievements: [
      'Completed Deloitte Australia virtual data analytics simulation via Forage platform.',
      'Analyzed business datasets and created compelling visualizations to present findings.',
      'Developed practical skills in data interpretation and business intelligence reporting.',
    ],
    skills: ['Data Analytics', 'Excel', 'Visualization', 'Business Intelligence'],
    certificate: 'Deloitte Data Analytics Simulation Certificate',
  },
  {
    role: 'Data Science Job Simulation',
    company: 'British Airways',
    program: 'Virtual Job Simulation – Forage',
    period: '2024',
    location: 'Virtual',
    duration: '2 Weeks',
    color: 'from-teal-400 to-cyan-500',
    accentColor: 'text-teal-400',
    borderColor: 'border-teal-500/20',
    bgColor: 'bg-teal-500/5',
    achievements: [
      'Completed British Airways virtual data science simulation focusing on customer sentiment analysis.',
      'Applied NLP techniques to analyze airline customer reviews and extract insights.',
      'Presented data-driven recommendations to improve customer experience.',
    ],
    skills: ['Python', 'NLP', 'Sentiment Analysis', 'Data Science', 'Pandas'],
    certificate: 'British Airways Data Science Simulation Certificate',
  },
];

export default function Internships() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="internships"
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
          <p className="mono text-cyan-400 text-sm mb-2">// 04. experience</p>
          <h2 className="section-title gradient-text">Internships</h2>
          <div className="section-line" />
        </div>

        <div className="flex flex-col gap-8">
          {internships.map((intern, i) => (
            <div
              key={intern.company + i}
              className="glass-card rounded-2xl overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(25px)',
                transition: `opacity 0.6s ease ${i * 150}ms, transform 0.6s ease ${i * 150}ms`,
              }}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${intern.color}`} />

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Company icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${intern.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Briefcase size={24} className="text-white" />
                  </div>

                  <div className="flex-1">
                    {/* Role & company */}
                    <div className="flex flex-wrap items-start gap-3 mb-2">
                      <div>
                        <h3
                          className="text-white font-bold text-lg"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {intern.role}
                        </h3>
                        <p className={`${intern.accentColor} font-semibold text-sm`}>{intern.company}</p>
                        <p className="text-slate-500 text-xs mono mt-0.5">{intern.program}</p>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-5">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <Calendar size={13} className={intern.accentColor} />
                        {intern.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <MapPin size={13} className={intern.accentColor} />
                        {intern.location}
                      </div>
                      <span className={`tech-tag ${intern.accentColor} text-xs`}>{intern.duration}</span>
                    </div>

                    {/* Achievements */}
                    <div className={`rounded-xl p-4 mb-5 ${intern.bgColor} border ${intern.borderColor}`}>
                      <h4 className="text-slate-300 text-xs font-semibold mono mb-3">// key_achievements</h4>
                      <ul className="flex flex-col gap-2.5">
                        {intern.achievements.map((ach, ai) => (
                          <li key={ai} className="flex items-start gap-2.5">
                            <CheckCircle size={14} className={`${intern.accentColor} flex-shrink-0 mt-0.5`} />
                            <span className="text-slate-400 text-sm leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {intern.skills.map(skill => (
                        <span key={skill} className="tech-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
