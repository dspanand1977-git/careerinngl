import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, ChevronUp, Heart } from 'lucide-react';
// Logo removed — restoring original Footer brand

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: darkMode ? '#070b14' : '#0f172a',
      color: '#94a3b8',
      padding: '4rem 0 2rem',
      borderTop: '1px solid #1e293b'
    }}>
      <div className="container">
        
        {/* Top Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
          gap: '2.5rem',
          marginBottom: '3.5rem'
        }} className="footer-grid">

          {/* Col 1: Brand & Intro */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg,  #facc15, #f59e0b)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <GraduationCap size={22} />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', fontFamily: 'var(--font-heading)' }}>
                CAREER<span style={{ color: '#facc15' }}>IN</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem', color: '#94a3b8' }}>
              Nagercoil's leading practical software training institute specializing in Java, Python, .NET Full Stack Development, Software Testing (QA), Web/Mobile Apps & Digital Marketing.
            </p>

            <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
              © {new Date().getFullYear()} CareerIn. All rights reserved.
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <a href="#hero" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>Home</a>
              <a href="#courses" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>Software Courses</a>
              <a href="#inplant" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>In-Plant Training (IPT)</a>
              <a href="#placements" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>Placement Records</a>
              <a href="#why-us" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>Why Choose Us</a>
              <a href="#batches" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>Upcoming Batches</a>
              <a href="#contact" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>Campus Location</a>
            </div>
          </div>

          {/* Col 3: Popular Courses */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
              Top Courses
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <a href="#courses" style={{ color: '#cbd5e1' }}>Java Full Stack Dev</a>
              <a href="#courses" style={{ color: '#cbd5e1' }}>Python & Django Web</a>
              <a href="#courses" style={{ color: '#cbd5e1' }}>.NET Full Stack (C#)</a>
              <a href="#courses" style={{ color: '#cbd5e1' }}>React JS Modern Web</a>
              <a href="#courses" style={{ color: '#cbd5e1' }}>Software Testing (QA)</a>
              <a href="#courses" style={{ color: '#cbd5e1' }}>Digital Marketing & SEO</a>
              <a href="#courses" style={{ color: '#cbd5e1' }}>Tally Prime & GST</a>
            </div>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
              Campus Office
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', color: '#cbd5e1' }}>
                <MapPin size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>3rd Floor, K.P. Road, Nagercoil – 629001 (Above Raymond Showroom)</span>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', color: '#cbd5e1' }}>
                <Phone size={18} color="#34d399" style={{ flexShrink: 0 }} />
                <div>
                  <a href="tel:+919498029898" style={{ color: 'white', display: 'block', fontWeight: 600 }}>+91 9498029898</a>
                  <span>04652-230105</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', color: '#cbd5e1' }}>
                <Mail size={18} color="#fbbf24" style={{ flexShrink: 0 }} />
                <a href="mailto:info@careerin.co.in" style={{ color: '#cbd5e1' }}>info@careerin.co.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll top */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid #1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem'
        }}>
          <div>
            Crafted for <strong style={{ color: 'white' }}>CareerIn Nagercoil</strong> | Empowers Tech Aspirants Across Tamil Nadu
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: '#1e293b',
              color: 'white',
              borderRadius: 'var(--radius-full)',
              padding: '0.5rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              transition: 'background 0.2s ease'
            }}
          >
            <span>Back to Top</span>
            <ChevronUp size={16} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 576px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
