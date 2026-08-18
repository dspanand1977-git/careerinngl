import { Laptop, Users, Award, ShieldCheck, Clock, MapPin, Sparkles, UserCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Laptop,
      color: '#2563eb',
      bgColor: '#eff6ff',
      title: '100% Practical & Lab Oriented',
      desc: 'No boring theory lectures. Learn every concept by writing live code and building projects in our equipped lab.'
    },
    {
      icon: UserCheck,
      color: '#10b981',
      bgColor: '#f0fdf4',
      title: 'Personal Machine & AC Lab',
      desc: 'Equipped air-conditioned classrooms with high-speed workstations. Owning a personal laptop is optional.'
    },
    {
      icon: Users,
      color: '#f59e0b',
      bgColor: '#fff7ed',
      title: 'Small Batches & 1-on-1 Attention',
      desc: 'We limit batch sizes so trainers can focus on each student individually, clearing logic doubts immediately.'
    },
    {
      icon: ShieldCheck,
      color: '#7c3aed',
      bgColor: '#f5f3ff',
      title: 'Placement & Mock Interviews',
      desc: 'Rigorous preparation including HR mock rounds, technical whiteboard practice, resume building, and job referrals.'
    },
    {
      icon: Clock,
      color: '#06b6d4',
      bgColor: '#ecfeff',
      title: 'Flexible Timings & Batches',
      desc: 'Choice of Morning, Afternoon, Evening & Weekend batches to suit college schedules and working professionals.'
    },
    {
      icon: Award,
      color: '#e11d48',
      bgColor: '#fff1f2',
      title: 'Recognized Course Certification',
      desc: 'Receive an industry-aligned course completion certificate & internship project proof upon finishing.'
    }
  ];

  return (
    <section id="why-us" style={{
      padding: '5.5rem 0',
      background: 'linear-gradient(180deg, rgba(239,246,255,0.7) 0%, rgba(248,250,252,0.95) 100%)'
    }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{
            background: 'rgba(37,99,235,0.08)',
            border: '1px solid rgba(37,99,235,0.12)',
            color: '#1d4ed8'
          }}>
            <Sparkles size={16} color="#2563eb" />
            <span>Why CareerIn Stands Out</span>
          </div>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Built for Real <span className="gradient-text">Skill Transformation</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '760px', margin: '0 auto' }}>
            We bridge the gap between college education and actual software industry demands with hands-on practice in Nagercoil.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="why-card"
                style={{
                  position: 'relative',
                  background: 'rgba(255,255,255,0.8)',
                  borderRadius: '20px',
                  padding: '1.6rem 1.4rem 1.5rem',
                  border: '1px solid rgba(148, 163, 184, 0.18)',
                  boxShadow: '0 12px 32px rgba(15, 23, 42, 0.05)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.04), rgba(6, 182, 212, 0.02))',
                  pointerEvents: 'none'
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: item.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color,
                    marginBottom: '1.1rem',
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.5)'
                  }}>
                    <IconComp size={25} />
                  </div>

                  <h3 style={{
                    fontSize: '1.12rem',
                    fontWeight: 700,
                    marginBottom: '0.65rem',
                    color: '#0f172a',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '0.92rem',
                    color: '#475569',
                    lineHeight: 1.7,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(37, 99, 235, 0.12);
          border-color: rgba(37, 99, 235, 0.35);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
