import { Award, Star, Quote, Building2, TrendingUp, CheckCircle } from 'lucide-react';
import { placementsList, hiringCompanies } from '../data/placementsData';

const Placements = () => {
  return (
    <section id="placements" style={{ padding: '5rem 0', background: 'radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.04), transparent)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Award size={16} color="#2563eb" />
            <span>Success Stories & Alumni</span>
          </div>
          <h2 className="section-title">
            Our Placed <span className="gradient-text">Students</span>
          </h2>
          <p className="section-subtitle">
            See how our practical training helped students secure software development, QA engineering, and web positions in top IT companies.
          </p>
        </div>

        {/* Hiring Partners Bar */}
        <div style={{
          background: 'var(--light-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem 2rem',
          border: '1px solid var(--light-border)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '3.5rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px', marginBottom: '1.25rem' }}>
            Top Companies Hiring CareerIn Alumni
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem 2.5rem'
          }}>
            {hiringCompanies.map((company, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                opacity: 0.85
              }}>
                <Building2 size={20} color="#2563eb" />
                <span>{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {placementsList.map((item, idx) => (
            <div
              key={idx}
              className="placement-card"
              style={{
                background: 'var(--light-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid var(--light-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <Quote
                size={36}
                color="rgba(37, 99, 235, 0.12)"
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
              />

              <div>
                {/* Rating */}
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: '#f59e0b' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                {/* Quote Text */}
                <p style={{
                  fontSize: '0.925rem',
                  color: 'var(--text-main)',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  "{item.quote}"
                </p>
              </div>

              {/* Student Profile Row */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px dashed var(--light-border)'
              }}>
                <img
                  src={item.avatar}
                  alt={item.name}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #2563eb'
                  }}
                />

                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: '#2563eb', fontWeight: 600 }}>
                    {item.role} @ {item.company}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Course: {item.course}
                  </div>
                </div>

                <div style={{
                  padding: '0.35rem 0.65rem',
                  background: '#dcfce7',
                  color: '#166534',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {item.package}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .placement-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
      `}</style>
    </section>
  );
};

export default Placements;
