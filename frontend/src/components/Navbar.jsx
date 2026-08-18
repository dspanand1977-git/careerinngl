import React, { useState } from 'react';
import { Phone, Mail, MapPin, Sun, Moon, Menu, X, GraduationCap, ChevronRight, Clock } from 'lucide-react';
// Logo removed — restoring original textual brand

const Navbar = ({ darkMode, setDarkMode, onOpenEnroll }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Courses', href: '#courses' },
    { name: 'In-Plant Training', href: '#inplant' },
    { name: 'Placements', href: '#placements' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why CareerIn', href: '#why-us' },
    { name: 'Batches', href: '#batches' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky-navbar" style={{ position: 'sticky', top: 0, zIndex: 900 }}>
      {/* Top Info Bar */}
      <div style={{
        background: darkMode ? '#070b14' : '#0f172a',
        color: '#94a3b8',
        fontSize: '0.825rem',
        padding: '0.4rem 0',
        borderBottom: darkMode ? '1px solid #1e293b' : 'none'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="tel:+919498029898" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1' }}>
              <Phone size={14} color="#60a5fa" />
              <span>+91 9498029898</span>
            </a>
            <a href="tel:04652230105" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1' }}>
              <Phone size={14} color="#60a5fa" />
              <span>04652-230105</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1' }}>
              <MapPin size={14} color="#34d399" />
              <span>KP Road,Nagercoil (Above Raymond Showroom)</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1' }}>
              <Clock size={14} color="#fbbf24" />
              <span>Mon - Fri: 9:00 AM - 9:00 PM <small>Sat & Sun: WKND Batch</small></span>
            </div>
            <a href="mailto:enquiry@careerin.co.in" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1' }}>
              <Mail size={14} color="#60a5fa" />
              <span>enquiry@careerin.co.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        background: darkMode ? 'rgba(17, 24, 39, 0.92)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: darkMode ? '1px solid #1f2937' : '1px solid #e2e8f0',
        transition: 'background-color 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.5rem' }}>
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #facc15, #f59e0b)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
              flexShrink: 0
            }}>
              <GraduationCap size={24} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, margin: 0 }}>
              <span style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                letterSpacing: '-0.06em',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1,
                margin: 0,
                color: darkMode ? '#f8fafc' : '#0f172a'
              }}>
                CAREER<span style={{ color: '#facc15' }}>IN</span>
              </span>
              <span style={{
                display: 'block',
                fontSize: '0.57rem',
                fontWeight: 800,
                lineHeight: 1.15,
                marginTop: '3px',
                color: darkMode ? '#cbd5e1' : '#475569',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                Software Training Institute
                <span style={{ display: 'block', marginTop: '1px', letterSpacing: '0.06em' }}>
                  A Part of CKS Solutions
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginLeft: '1rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.02em',
                  color: darkMode ? '#e2e8f0' : '#334155',
                  transition: 'color 0.2s ease',
                  textTransform: 'none'
                }}
                onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                onMouseLeave={(e) => e.target.style.color = darkMode ? '#e2e8f0' : '#334155'}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title="Toggle Theme"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: darkMode ? '#1f2937' : '#f1f5f9',
                color: darkMode ? '#fbbf24' : '#475569',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Enroll CTA */}
            <button
              onClick={() => onOpenEnroll()}
              className="btn btn-primary"
              style={{
                padding: '0.56rem 1rem',
                fontSize: '0.86rem',
                borderRadius: '999px',
                boxShadow: '0 8px 18px rgba(37, 99, 235, 0.18)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                border: 'none'
              }}
            >
              <span>Enroll / Free Demo</span>
              <ChevronRight size={16} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                color: darkMode ? '#f3f4f6' : '#1e293b',
                padding: '0.4rem',
                borderRadius: '6px'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: darkMode ? '#111827' : '#ffffff',
            borderTop: darkMode ? '1px solid #1f2937' : '1px solid #e2e8f0',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '0.5rem 0',
                  fontWeight: 600,
                  color: darkMode ? '#f3f4f6' : '#1e293b',
                  borderBottom: darkMode ? '1px solid #1f2937' : '1px solid #f1f5f9'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Style fix for hiding desktop links on mobile */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
