import { Laptop, GraduationCap, Award, FileCode, CheckCircle, ArrowRight, Clock, Users } from 'lucide-react';

const InplantTraining = ({ onOpenEnroll }) => {
  return (
    <section id="inplant" style={{ padding: '5rem 0', background: 'radial-gradient(ellipse at 50% 100%, rgba(37, 99, 235, 0.06), transparent)' }}>
      <div className="container">
        
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '3.5rem 2.5rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(15, 23, 42, 0.25)'
        }}>
          {/* Subtle Background Art */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15), transparent 70%)',
            borderRadius: '50%'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }} className="ipt-grid">

            {/* Left Content */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 1rem',
                background: 'rgba(37, 99, 235, 0.3)',
                border: '1px solid rgba(96, 165, 250, 0.4)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.825rem',
                fontWeight: 700,
                color: '#93c5fd',
                marginBottom: '1.25rem',
                textTransform: 'uppercase'
              }}>
                <GraduationCap size={16} />
                <span>Special Program for College Students</span>
              </div>

              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.25rem', color: 'white' }}>
                In-Plant Training (IPT) & Internship Guidance
              </h2>

              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Designed specifically for Engineering (BE/B.Tech), Science (BSc CS/IT), and Computer Applications (BCA/MCA) students in Nagercoil & Kanyakumari district to gain real-world industrial exposure.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.25rem' }}>
                {[
                  { title: 'Live Project Assistance', desc: 'Hands-on major/minor project work' },
                  { title: 'ISO Verification Certificate', desc: 'Valid industrial training certificate' },
                  { title: 'Flexible Duration', desc: '3 Days / 5 Days / 10 Days / 1 Month' },
                  { title: 'Expert Tech Guidance', desc: 'Work with active software devs' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#60a5fa', marginBottom: '0.2rem' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenEnroll('In-Plant Training / Internship Inquiry')}
                className="btn btn-accent"
                style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
              >
                <span>Register for In-Plant Training</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right Card Illustration */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.75rem' }}>
                IPT & Internship Modules Covered
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { domain: 'Full Stack Web Development', tech: 'React, Node.js, Python Django / Java' },
                  { domain: 'Android & Mobile App Dev', tech: 'Java, Kotlin & Flutter Basics' },
                  { domain: 'Software QA & Testing', tech: 'Manual Testing & Selenium Intro' },
                  { domain: 'Cyber Security & Networking', tech: 'Ethical Hacking & Network Fundamentals' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(37, 99, 235, 0.3)',
                      color: '#60a5fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <FileCode size={16} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#f8fafc' }}>{item.domain}</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.tech}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '1.75rem',
                padding: '1rem',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-md)',
                color: '#6ee7b7',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <CheckCircle size={18} style={{ flexShrink: 0 }} />
                <span>Certificate recognized for college academic submission & portfolio.</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .ipt-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default InplantTraining;
