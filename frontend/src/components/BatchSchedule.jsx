import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Sparkles } from 'lucide-react';
import { upcomingBatches } from '../data/placementsData';

const BatchSchedule = ({ onOpenEnroll }) => {
  return (
    <section id="batches" style={{ padding: '5rem 0', background: 'var(--light-bg)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Calendar size={16} color="#2563eb" />
            <span>Admissions & Schedules</span>
          </div>
          <h2 className="section-title">
            Upcoming <span className="gradient-text">Batch Schedule</span>
          </h2>
          <p className="section-subtitle">
            Reserve your seat early for upcoming software batches in Nagercoil. Morning, Evening & Weekend timings available.
          </p>
        </div>

        {/* Batches Grid */}
        <div className="batch-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {upcomingBatches.map((batch, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--light-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                border: '1px solid var(--light-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    background: '#eff6ff',
                    color: '#2563eb',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    {batch.mode}
                  </span>

                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: '#dc2626',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}>
                    <Users size={14} />
                    <span>{batch.seatsLeft} Seats Left</span>
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {batch.course}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} color="#2563eb" />
                    <span>Starts: <strong style={{ color: 'var(--text-main)' }}>{batch.startDate}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={16} color="#10b981" />
                    <span>{batch.timeSlot}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenEnroll(`Batch Reservation: ${batch.course} (${batch.timeSlot})`)}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.65rem', fontSize: '0.875rem' }}
              >
                <span>Reserve Seat</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BatchSchedule;
