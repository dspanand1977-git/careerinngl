import { Laptop, Users, Award, ShieldCheck, Clock, MapPin, Sparkles, UserCheck } from 'lucide-react';

const whyImages = Object.fromEntries(
  Object.entries(import.meta.glob('../whyImages/*.svg', { eager: true, import: 'default' }))
    .map(([path, src]) => [path.split('/').pop().replace(/\.svg$/, ''), src])
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: Laptop,
      color: '#2563eb',
      bgColor: '#eff6ff',
      textColor: '#123b72',
      mutedColor: '#315b8f',
      image: whyImages['practical-lab'],
      title: '100% Practical & Lab Oriented',
      desc: 'No boring theory lectures. Learn every concept by writing live code and building projects in our equipped lab.'
    },
    {
      icon: UserCheck,
      color: '#10b981',
      bgColor: '#f0fdf4',
      textColor: '#105c45',
      mutedColor: '#34735d',
      image: whyImages['personal-machine'],
      title: 'Personal Machine & AC Lab',
      desc: 'Equipped air-conditioned classrooms with high-speed workstations. Owning a personal laptop is optional.'
    },
    {
      icon: Users,
      color: '#f59e0b',
      bgColor: '#fff7ed',
      textColor: '#71330b',
      mutedColor: '#87552d',
      image: whyImages['small-batches'],
      title: 'Small Batches & 1-on-1 Attention',
      desc: 'We limit batch sizes so trainers can focus on each student individually, clearing logic doubts immediately.'
    },
    {
      icon: ShieldCheck,
      color: '#7c3aed',
      bgColor: '#f5f3ff',
      textColor: '#452080',
      mutedColor: '#674596',
      image: whyImages['placement-interviews'],
      title: 'Placement & Mock Interviews',
      desc: 'Rigorous preparation including HR mock rounds, technical whiteboard practice, resume building, and job referrals.'
    },
    {
      icon: Clock,
      color: '#06b6d4',
      bgColor: '#ecfeff',
      textColor: '#075a70',
      mutedColor: '#347487',
      image: whyImages['flexible-timings'],
      title: 'Flexible Timings & Batches',
      desc: 'Choice of Morning, Afternoon, Evening & Weekend batches to suit college schedules and working professionals.'
    },
    {
      icon: Award,
      color: '#e11d48',
      bgColor: '#fff1f2',
      textColor: '#76142d',
      mutedColor: '#914357',
      image: whyImages.certification,
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
        <div className="why-grid" style={{
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
                  background: `linear-gradient(115deg, ${item.bgColor} 0%, rgba(255,255,255,0.94) 64%, rgba(255,255,255,0.82) 100%)`,
                  borderRadius: '20px',
                  padding: '1.6rem 1.4rem 1.5rem',
                  border: '1px solid rgba(148, 163, 184, 0.18)',
                  boxShadow: '0 12px 32px rgba(15, 23, 42, 0.05)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: '58%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.2,
                    mixBlendMode: 'multiply',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}
                />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.99) 0%, rgba(255,255,255,0.96) 52%, rgba(255,255,255,0.78) 100%)',
                  pointerEvents: 'none'
                }} />

                <div style={{ position: 'relative', zIndex: 2 }}>
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
                    color: item.textColor,
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '0.92rem',
                    color: item.mutedColor,
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
