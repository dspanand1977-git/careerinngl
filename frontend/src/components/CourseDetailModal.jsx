import React from 'react';
import { X, Clock, Layers, Briefcase, BookOpen, CheckCircle, ArrowRight, ShieldAlert } from 'lucide-react';

const CourseDetailModal = ({ course, onClose, onEnroll }) => {
  if (!course) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '750px', padding: '0' }}
      >
        {/* Modal Header Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a, #1e293b)',
          color: 'white',
          padding: '2rem 2rem 1.5rem',
          position: 'relative',
          flexShrink: 0
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease'
            }}
          >
            <X size={20} />
          </button>

          <span style={{
            padding: '0.25rem 0.75rem',
            background: 'rgba(37, 99, 235, 0.4)',
            border: '1px solid rgba(96, 165, 250, 0.5)',
            color: '#93c5fd',
            fontSize: '0.75rem',
            fontWeight: 700,
            borderRadius: 'var(--radius-full)',
            textTransform: 'uppercase'
          }}>
            {course.categoryLabel}
          </span>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '0.65rem', marginBottom: '0.5rem', color: 'white' }}>
            {course.title}
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5 }}>
            {course.shortDesc}
          </p>

          {/* Key Quick Meta */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '1.25rem',
            fontSize: '0.85rem',
            color: '#cbd5e1',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={16} color="#60a5fa" />
              <span>Duration: {course.duration}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Layers size={16} color="#34d399" />
              <span>Level: {course.level}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BookOpen size={16} color="#fbbf24" />
              <span>Format: {course.format}</span>
            </div>
          </div>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem', flex: 1, overflowY: 'auto' }}>
          
          {/* Prerequisites */}
          <div style={{
            padding: '1rem',
            background: 'var(--light-bg)',
            borderRadius: 'var(--radius-md)',
            borderLeft: '4px solid #2563eb'
          }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.25rem', color: '#2563eb' }}>
              Course Prerequisite:
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {course.prerequisites}
            </p>
          </div>

          {/* Job Roles targeted */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={18} color="#2563eb" />
              <span>Career Opportunities & Job Roles</span>
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {course.jobRoles.map((role, idx) => (
                <span key={idx} style={{
                  padding: '0.4rem 0.85rem',
                  background: 'var(--light-bg)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--light-border)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-main)'
                }}>
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Syllabus Modules Breakdown */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={18} color="#2563eb" />
              <span>Complete Curriculum Modules</span>
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {course.syllabus.map((mod, idx) => (
                <div key={idx} style={{
                  padding: '1rem',
                  border: '1px solid var(--light-border)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--light-card)'
                }}>
                  <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {mod.module}
                  </h5>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem 1rem' }}>
                    {mod.topics.map((topic, tIdx) => (
                      <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <CheckCircle size={14} color="#10b981" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div style={{
          padding: '1.25rem 2rem',
          background: 'var(--light-bg)',
          borderTop: '1px solid var(--light-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          flexShrink: 0
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ready to transform your tech career?</div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Batch starting soon.</div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={onClose}
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
            >
              <span>Enroll for {course.title}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailModal;
