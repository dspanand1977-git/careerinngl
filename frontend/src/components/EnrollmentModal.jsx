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
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px', padding: '0' }}>
        
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
          color: 'white',
          padding: '1.75rem 2rem',
          position: 'relative',
          flexShrink: 0
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>
            {submitted ? 'Application Received!' : 'Enroll / Book Free Demo'}
          </h3>
          <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>
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
          <form onSubmit={handleSubmit} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Full Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                Full Name *
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} color="#94a3b8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--light-border)',
                    background: 'var(--light-bg)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Phone & Email Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                  Phone / WhatsApp *
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone size={18} color="#94a3b8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.75rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--light-border)',
                      background: 'var(--light-bg)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                  Email Address
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} color="#94a3b8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.75rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--light-border)',
                      background: 'var(--light-bg)',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Course Dropdown */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                Course of Interest *
              </label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
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
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                Preferred Batch Slot
              </label>
              <select
                value={formData.timing}
                onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
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
              >
                <option value="Morning Batch (9:30 AM - 11:30 AM)">Morning Batch (9:30 AM - 11:30 AM)</option>
                <option value="Afternoon Batch (2:00 PM - 4:00 PM)">Afternoon Batch (2:00 PM - 4:00 PM)</option>
                <option value="Evening Batch (5:30 PM - 7:30 PM)">Evening Batch (5:30 PM - 7:30 PM)</option>
                <option value="Weekend Batch (Sat & Sun)">Weekend Batch (Sat & Sun)</option>
              </select>
            </div>

            {/* Note / Message */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                Additional Message / Question
              </label>
              <textarea
                rows={3}
                placeholder="Specify any questions about fees, syllabus, or college batch requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem', fontSize: '1rem' }}
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
