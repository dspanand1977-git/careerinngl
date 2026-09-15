import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Clock3, GraduationCap, Hand, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import './ContactModern.css';

const campusImage = new URL('../photos/WhatsApp Image 2026-07-30 at 3.06.18 PM.jpeg', import.meta.url).href;

const ContactModern = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.18 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/inquiries/create/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          email: formState.email || '',
          course: 'General Inquiry',
          timing: 'Not specified',
          mode: 'Contact Form',
        }),
      });
      if (!response.ok) throw new Error('Failed to save inquiry');
      setSubmitted(true);
      setFormState({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form save error:', error);
      alert('There was a problem saving your message. Please try again.');
    }
  };

  const updateField = (field) => (event) => setFormState({ ...formState, [field]: event.target.value });

  return (
    <section id="contact" ref={sectionRef} className={`contact-modern ${isVisible ? 'contact-modern-visible' : ''}`}>
      <div className="contact-modern-glow" />
      <div className="container contact-modern-container">
        <header className="contact-modern-header">
          <div className="contact-modern-kicker"><span /> Start a conversation</div>
          <h2>Let’s plan your <em>next chapter.</em></h2>
          <p>Whether you are starting from zero or preparing for your next role, our team is ready to help you choose the right path.</p>
        </header>

        <div className="contact-modern-layout">
          <div className="contact-modern-story">
            <div className="contact-photo-wrap">
              <img src={campusImage} alt="CareerIn students learning together" />
              <div className="contact-photo-caption"><GraduationCap size={19} /><span>Practical learning. Real progress.</span></div>
            </div>
            <div className="english-series-card">
              <div className="english-series-icon"><MessageCircle size={22} /></div>
              <div><span className="english-series-label">Weekly speaking practice</span><h3>Wednesday English Series</h3><p>Build confidence, vocabulary, and workplace communication in a friendly live session.</p></div>
              <span className="english-series-day">WED</span>
            </div>
            <a className="contact-map-link" href="https://maps.google.com/?q=CareerIn+Vadasery+Nagercoil" target="_blank" rel="noreferrer"><MapPin size={17} /> K.P. Road, Near Derik Junction, Nagercoil <span>Open map</span></a>
          </div>

          <div className="contact-modern-form-card">
            <div className="contact-form-heading"><div><span className="contact-form-eyebrow">Fast response</span><h3>Talk to a training advisor</h3></div><span className="contact-live-dot">Online</span></div>
            <p className="contact-form-copy">Share a few details and we will get back to you within two hours.</p>
            {submitted ? (
              <div className="contact-success"><CheckCircle2 size={50} /><h4>Message received.</h4><p>Our coordinator will call you shortly.</p><button type="button" onClick={() => setSubmitted(false)}>Send another message</button></div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-modern-form">
                <label>Your name *<input type="text" required placeholder="e.g. Anitha Kumar" value={formState.name} onChange={updateField('name')} /></label>
                <div className="contact-form-row"><label>Mobile number *<input type="tel" required placeholder="+91 00000 00000" value={formState.phone} onChange={updateField('phone')} /></label><label>Email <input type="email" placeholder="you@example.com" value={formState.email} onChange={updateField('email')} /></label></div>
                <label>How can we help? *<textarea required rows={4} placeholder="Tell us about the course or skill you are exploring..." value={formState.message} onChange={updateField('message')} /></label>
                <button className="contact-submit" type="submit"><Send size={17} /> Send enquiry <span>↗</span></button>
              </form>
            )}
            <div className="contact-direct-links"><a href="tel:+919498029898"><Phone size={16} /> +91 94980 29898</a><a href="https://wa.me/919498029898" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp us</a></div>
          </div>
        </div>
        <div className="contact-hours"><Clock3 size={17} /> Mon–Fri: 9 AM–9 PM <span /> Saturday & Sunday: Weekend batches <Hand className="contact-hand-pointer" size={25} /></div>
      </div>
    </section>
  );
};

export default ContactModern;
