import React, { useState } from 'react';
import { Search, Clock, Award, Star, ArrowRight, Check, Sparkles, BookOpen, Layers } from 'lucide-react';
import { categories, coursesData } from '../data/coursesData';

const CourseCatalog = ({ onSelectCourse, onEnrollCourse }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" style={{ padding: '5rem 0 4rem', background: 'var(--light-bg)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <BookOpen size={16} color="#2563eb" />
            <span>Job-Oriented Software Training</span>
          </div>
          <h2 className="section-title">
            Industry Curriculum <span className="gradient-text">Courses</span>
          </h2>
          <p className="section-subtitle">
            Choose from beginner to advanced technology courses crafted by software experts with practical lab projects and placement assistance.
          </p>
        </div>

        {/* Search Bar & Filter Pills Container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {/* Search Bar */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '550px'
          }}>
            <Search size={20} color="#94a3b8" style={{
              position: 'absolute',
              left: '1.25rem',
              top: '50%',
              transform: 'translateY(-50%)'
            }} />
            <input
              type="text"
              placeholder="Search courses (e.g. Java, Python, React, Testing, .NET)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1.25rem 0.85rem 3.2rem',
                borderRadius: 'var(--radius-full)',
                border: '1.5px solid var(--light-border)',
                background: 'var(--light-card)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                boxShadow: 'var(--shadow-sm)',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2563eb'}
              onBlur={(e) => e.target.style.borderColor = 'var(--light-border)'}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem'
          }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    background: isActive ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : 'var(--light-card)',
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    border: isActive ? '1px solid #2563eb' : '1px solid var(--light-border)',
                    boxShadow: isActive ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'var(--shadow-sm)'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem 1.5rem',
            background: 'var(--light-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--light-border)'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No matching courses found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Try adjusting your search keyword or filter category.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="btn btn-secondary"
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="course-card"
                style={{
                  background: 'var(--light-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--light-border)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.75rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative'
                }}
              >
                {/* Top Badge & Rating Row */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(37, 99, 235, 0.1)',
                      color: '#2563eb',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {course.categoryLabel}
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b' }}>
                      <Star size={16} fill="#f59e0b" color="#f59e0b" />
                      <span>{course.rating}</span>
                      <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({course.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    marginBottom: '0.65rem',
                    lineHeight: 1.3
                  }}>
                    {course.title}
                  </h3>

                  {/* Short Description */}
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1.25rem',
                    lineHeight: 1.5
                  }}>
                    {course.shortDesc}
                  </p>

                  {/* Duration & Level Meta */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    padding: '0.75rem 0',
                    borderTop: '1px dashed var(--light-border)',
                    borderBottom: '1px dashed var(--light-border)',
                    marginBottom: '1.25rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={15} color="#2563eb" />
                      <span>{course.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Layers size={15} color="#10b981" />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  {/* Key Highlights Bullet points */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>
                      Key Focus Areas:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {course.keyHighlights.slice(0, 3).map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                          <Check size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  paddingTop: '0.5rem'
                }}>
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="btn btn-secondary"
                    style={{ padding: '0.65rem', fontSize: '0.85rem', width: '100%' }}
                  >
                    View Syllabus
                  </button>

                  <button
                    onClick={() => onEnrollCourse(course)}
                    className="btn btn-primary"
                    style={{ padding: '0.65rem', fontSize: '0.85rem', width: '100%' }}
                  >
                    Enroll Now
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      <style>{`
        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: #2563eb;
        }
      `}</style>
    </section>
  );
};

export default CourseCatalog;
