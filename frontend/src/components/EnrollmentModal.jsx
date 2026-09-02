import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, User, Clock, BookOpen } from 'lucide-react';
import { coursesData } from '../data/coursesData';

const EnrollmentModal = ({ isOpen, onClose, initialCourse, initialSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: initialCourse ? initialCourse.title : 'Java Full Stack Development',
    timing: 'Morning Batch (9:30 AM - 11:30 AM)',
    mode: 'Free Demo Class Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const modalTitle = (() => {
    if (initialSubject) {
      const subject = initialSubject.trim();

      if (/scholarship/i.test(subject)) return 'Apply Scholarship';
      if (/free demo|demo class|book free demo/i.test(subject)) return 'Book Free Demo';
      if (/general admission/i.test(subject)) return 'General Admission Inquiry';
      if (/counseling/i.test(subject)) return 'Counseling Request';
      if (/batch reservation/i.test(subject)) return 'Reserve a Batch';
      if (/in-plant|internship|training/i.test(subject)) return 'In-Plant Training Inquiry';
      if (/course registration/i.test(subject)) return initialCourse ? `Enroll for ${initialCourse.title}` : 'Course Registration';

      return subject;
    }

    if (initialCourse) return `Enroll for ${initialCourse.title}`;
    return 'Enroll / Book Free Demo';
  })();

  useEffect(() => {
    if (initialCourse) {
      setFormData(prev => ({ ...prev, course: initialCourse.title }));
    } else if (initialSubject) {
      setFormData(prev => ({ ...prev, message: initialSubject }));
    }
  }, [initialCourse, initialSubject]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/inquiries/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || '',
          message: formData.message || '',
          course: formData.course,
          timing: formData.timing,
          mode: formData.mode
        })
      });

      if (!response.ok) {
        throw new Error('Failed to save enrollment');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Enrollment form save error:', error);
      alert('There was a problem saving your enrollment request. Please try again.');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '470px',
          width: 'min(92vw, 470px)',
          padding: '0',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          boxShadow: '0 25px 60px rgba(79, 70, 229, 0.28)',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)'
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #f97316 0%, #f43f5e 20%, #8b5cf6 55%, #2563eb 100%)',
          color: 'white',
          padding: '1.4rem 1.25rem 1.2rem',
          position: 'relative',
          flexShrink: 0,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '999px',
            padding: '0.4rem 0.8rem',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}>
            Limited Seats
          </div>

          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <X size={16} />
          </button>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'white', margin: '0.9rem 0 0.25rem' }}>
            {submitted ? 'Application Received!' : modalTitle}
          </h3>
          <p style={{ fontSize: '0.78rem', opacity: 0.92, margin: 0 }}>
            CareerIn Software Training Institute, Nagercoil
          </p>
        </div>

        {/* Content */}
        {submitted ? (
          <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: '#dcfce7',
              color: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <CheckCircle2 size={42} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Thank You, {formData.name}!
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Your inquiry for <strong>{formData.course}</strong> has been successfully received. Our course counselor will contact you shortly at <strong>{formData.phone}</strong>.
            </p>

            <div style={{
              padding: '1rem',
              background: 'var(--light-bg)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem'
            }}>
              Need urgent response? Call us directly at <a href="tel:+919498029898" style={{ color: '#2563eb', fontWeight: 700 }}>+91 9498029898</a> or visit our center in Nagercoil.
            </div>

            <button onClick={handleReset} className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: '1.4rem 1.2rem 1.3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Full Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.4rem', color: '#334155' }}>
                Full Name *
              </label>
              <div style={{ position: 'relative' }}>
                <User size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.72rem 0.9rem 0.72rem 2.5rem',
                    borderRadius: '12px',
                    border: '1px solid #dbeafe',
                    background: '#f8fbff',
                    color: '#0f172a',
                    fontSize: '0.88rem',
                    outline: 'none',
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.08)'
                  }}
                />
              </div>
            </div>

            {/* Phone & Email Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }} className="form-row-2">
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.4rem', color: '#334155' }}>
                  Phone / WhatsApp *
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.72rem 0.9rem 0.72rem 2.5rem',
                      borderRadius: '12px',
                      border: '1px solid #dbeafe',
                      background: '#f8fbff',
                      color: '#0f172a',
                      fontSize: '0.88rem',
                      outline: 'none',
                      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.08)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.4rem', color: '#334155' }}>
                  Email Address
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.72rem 0.9rem 0.72rem 2.5rem',
                      borderRadius: '12px',
                      border: '1px solid #dbeafe',
                      background: '#f8fbff',
                      color: '#0f172a',
                      fontSize: '0.88rem',
                      outline: 'none',
                      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.08)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Course Dropdown */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.4rem', color: '#334155' }}>
                Course of Interest *
              </label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.72rem 0.9rem',
                  borderRadius: '12px',
                  border: '1px solid #dbeafe',
                  background: '#f8fbff',
                  color: '#0f172a',
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.08)'
                }}
              >
                {coursesData.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title} ({c.duration})
                  </option>
                ))}
                <option value="In-Plant Training / Internship">In-Plant Training (IPT) / Internship</option>
                <option value="Custom Tech Coaching">Custom Tech Coaching</option>
              </select>
            </div>

            {/* Timing Preference */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.4rem', color: '#334155' }}>
                Preferred Batch Slot
              </label>
              <select
                value={formData.timing}
                onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.72rem 0.9rem',
                  borderRadius: '12px',
                  border: '1px solid #dbeafe',
                  background: '#f8fbff',
                  color: '#0f172a',
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.08)'
                }}
              >
                <option value="Morning Batch (9:30 AM - 11:30 AM)">Morning Batch (9:30 AM - 11:30 AM)</option>
                <option value="Afternoon Batch (2:00 PM - 4:00 PM)">Afternoon Batch (2:00 PM - 4:00 PM)</option>
                <option value="Evening Batch (5:30 PM - 7:30 PM)">Evening Batch (5:30 PM - 7:30 PM)</option>
                <option value="Weekend Batch (Sat & Sun)">Weekend Batch (Sat & Sun)</option>
              </select>
            </div>

            {/* Note / Message */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.4rem', color: '#334155' }}>
                Additional Message / Question
              </label>
              <textarea
                rows={3}
                placeholder="Specify any questions about fees, syllabus, or college batch requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.72rem 0.9rem',
                  borderRadius: '12px',
                  border: '1px solid #dbeafe',
                  background: '#f8fbff',
                  color: '#0f172a',
                  fontSize: '0.88rem',
                  outline: 'none',
                  resize: 'vertical',
                  boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.08)'
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.9rem 1rem',
                marginTop: '0.1rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6)',
                border: 'none',
                boxShadow: '0 12px 24px rgba(168, 85, 247, 0.28)'
              }}
            >
              <Send size={18} />
              <span>Submit Registration Request</span>
            </button>

          </form>
        )}

      </div>

      <style>{`
        @media (max-width: 576px) {
          .form-row-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default EnrollmentModal;
