import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, MessageCircle, GraduationCap } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/inquiries/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          phone: formState.phone,
          email: formState.email || '',
          message: formState.message,
          course: 'General Inquiry',
          timing: 'Not specified',
          mode: 'Contact Form'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to save inquiry');
      }

      setSubmitted(true);
      setFormState({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form save error:', error);
      alert('There was a problem saving your message. Please try again.');
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 0', background: 'radial-gradient(ellipse at 50% 100%, rgba(37, 99, 235, 0.05), transparent)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <MapPin size={16} color="#2563eb" />
            <span>Visit Us in Nagercoil</span>
          </div>
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span> with Us
          </h2>
          <p className="section-subtitle">
            Have questions about our course syllabus, lab facilities, batch timings, or fee structure? Reach out or visit our campus today.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }} className="contact-grid">

          {/* Left: Contact Info & Address Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Location Address Box */}
            <div className="glass-panel" style={{
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              border: '1px solid var(--light-border)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <MapPin size={22} color="#2563eb" />
                <span>Institute Campus Address</span>
              </h3>

              <div style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.9rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg,  #facc15, #f59e0b)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
                  }}>
                    <GraduationCap size={22} />
                  </div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
                    CAREER<span style={{ color: '#facc15' }}>IN</span>
                  </span>
                </div>
                K.P. Road, Near Derik Junction,<br />
                Nagercoil – 629001,<br />
                Kanyakumari District, Tamil Nadu.<br />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>(Landmark: Above the Raymond Showroom)</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://maps.google.com/?q=CareerIn+Vadasery+Nagercoil"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                >
                  Open in Google Maps
                </a>

                <a
                  href="https://wa.me/919498029898?text=Hello%20CareerIn,%20I%20want%20to%20know%20more%20about%20your%20software%20courses."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Direct Phone & Email Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="contact-sub-cards">
              <div style={{
                background: 'var(--light-card)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                border: '1px solid var(--light-border)'
              }}>
                <Phone size={20} color="#2563eb" style={{ marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Phone Numbers</div>
                <a href="tel:+919498029898" style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  +91 9498029898
                </a>
                <a href="tel:04652230105" style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  04652-230105
                </a>
              </div>

              <div style={{
                background: 'var(--light-card)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                border: '1px solid var(--light-border)'
              }}>
                <Clock size={20} color="#10b981" style={{ marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Working Hours</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  Mon - Fri: 9 AM - 9 PM
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <small>Saturday &  Sunday: WKND Batch</small>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Quick Direct Contact Form */}
          <div style={{
            background: 'var(--light-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.25rem',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Send Us a Direct Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Fill in your details below and our training coordinator will get back to you within 2 hours.
            </p>

            {submitted ? (
              <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
                <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent Successfully!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We have received your message and will call you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '1.25rem', fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--light-border)',
                      background: 'var(--light-bg)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Your contact number"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--light-border)',
                      background: 'var(--light-bg)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Message / Course Query
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what course or training topic you want to learn..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--light-border)',
                      background: 'var(--light-bg)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem', fontSize: '0.95rem' }}>
                  <Send size={16} />
                  <span>Submit Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 576px) {
          .contact-sub-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
