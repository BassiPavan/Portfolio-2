import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
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
          <p className="mono text-cyan-400 text-sm mb-2">// 06. get in touch</p>
          <h2 className="section-title gradient-text">Contact Me</h2>
          <div className="section-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-25px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Let's Build Something{' '}
              <span className="gradient-text">Together</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm currently open to internship opportunities, freelance projects, and full-time roles.
              Whether you have a project in mind or just want to connect, feel free to reach out — I'll get
              back to you within 24 hours.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'bassipavan2020@gmail.com', href: 'mailto:bassipavan2020@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 8919465019', href: 'tel:+918919465019' },
                { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center border border-cyan-500/20 flex-shrink-0">
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mono mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                        {value}
                      </a>
                    ) : (
                      <span className="text-slate-300 text-sm font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-slate-500 text-xs mono mb-4">// follow_me</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/BassiPavan', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/bassi-pavan-1021992aa/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:bassipavan2020@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    title={label}
                    className="group w-11 h-11 rounded-xl glass border border-cyan-500/15 flex items-center justify-center hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Icon size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div className="mt-8 glass-card rounded-xl p-4 flex items-center gap-3">
              <div className="relative w-3 h-3 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-teal-400" />
                <div className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-50" />
              </div>
              <p className="text-slate-300 text-sm">
                <span className="text-teal-400 font-semibold">Available</span> for internships, projects & full-time roles
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(25px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-teal-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Message Sent!
                  </h4>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-xs mono mb-2">name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs mono mb-2">email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs mono mb-2">subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can I help?"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs mono mb-2">message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
