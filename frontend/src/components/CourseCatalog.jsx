import React, { useState } from 'react';
import { Search, Clock, Award, Star, ArrowRight, Check, Sparkles, BookOpen, Layers } from 'lucide-react';
import { categories, coursesData } from '../data/coursesData';

const courseCarouselImages = Object.entries(import.meta.glob('../courseImages/*.svg', {
  eager: true,
  import: 'default'
})).map(([path, src]) => {
  const filename = path.split('/').pop().replace(/\.[^.]+$/, '');
  const title = filename.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
  const searchTerms = {
    'software-development': 'full stack',
    'programming-languages': 'programming',
    'data-science': 'python',
    'microsoft-office': 'tally',
    'cloud-devops': 'full stack',
    'cybersecurity-ai': 'testing',
    'dot-net': '.NET',
    'mern-stack': 'react',
    'mean-stack': 'react',
    'mssql': 'sql server',
    'oracle': 'java',
    'excel': 'tally',
    'word': 'tally',
    'powerpoint': 'digital marketing'
  };

  return { src, title, searchTerm: searchTerms[filename] || title };
});

const courseCardThemes = [
  { background: 'linear-gradient(145deg, #eff6ff, #dbeafe)', border: '#93c5fd', text: '#172554', muted: '#31558a', accent: '#2563eb' },
  { background: 'linear-gradient(145deg, #ecfeff, #cffafe)', border: '#67e8f9', text: '#164e63', muted: '#27677a', accent: '#0891b2' },
  { background: 'linear-gradient(145deg, #f5f3ff, #e9d5ff)', border: '#c4b5fd', text: '#3b0764', muted: '#68418a', accent: '#7c3aed' },
  { background: 'linear-gradient(145deg, #f0fdf4, #dcfce7)', border: '#86efac', text: '#14532d', muted: '#397052', accent: '#16a34a' },
  { background: 'linear-gradient(145deg, #fff7ed, #fed7aa)', border: '#fdba74', text: '#431407', muted: '#8a4b2d', accent: '#ea580c' },
  { background: 'linear-gradient(145deg, #fefce8, #fef3c7)', border: '#fcd34d', text: '#451a03', muted: '#80632a', accent: '#d97706' },
  { background: 'linear-gradient(145deg, #fff1f2, #ffe4e6)', border: '#fda4af', text: '#4c0519', muted: '#8b3a50', accent: '#e11d48' },
  { background: 'linear-gradient(145deg, #f0fdfa, #ccfbf1)', border: '#5eead4', text: '#134e4a', muted: '#32736d', accent: '#0f766e' }
];

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

  const handleCarouselSearch = (searchTerm) => {
    setActiveCategory('all');
    setSearchQuery(searchTerm);
    requestAnimationFrame(() => {
      document.querySelector('#course-search')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

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

          <div className="course-image-carousel" aria-label="CareerIn software training highlights">
            <div className="course-image-carousel__track">
              {[...courseCarouselImages, ...courseCarouselImages].map((image, index) => (
                <button
                  type="button"
                  className="course-image-carousel__item"
                  key={`${image.src}-${index}`}
                  onClick={() => handleCarouselSearch(image.searchTerm)}
                  aria-label={`Search courses for ${image.title}`}
                >
                  <img src={image.src} alt="" loading={index < courseCarouselImages.length ? 'eager' : 'lazy'} />
                  <span>{image.title}</span>
                </button>
              ))}
            </div>
          </div>
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
          <div id="course-search" className="course-grid" style={{
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
            {filteredCourses.map((course, index) => {
              const theme = courseCardThemes[index % courseCardThemes.length];

              return (
              <div
                key={course.id}
                className="course-card"
                style={{
                  background: theme.background,
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${theme.border}`,
                  color: theme.text,
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
                      background: `${theme.accent}18`,
                      color: theme.accent,
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
                    lineHeight: 1.3,
                    color: theme.text
                  }}>
                    {course.title}
                  </h3>

                  {/* Short Description */}
                  <p style={{
                    fontSize: '0.9rem',
                    color: theme.muted,
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
                    color: theme.muted
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
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: theme.muted, marginBottom: '0.5rem', letterSpacing: '0.5px' }}>
                      Key Focus Areas:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {course.keyHighlights.slice(0, 3).map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                          <Check size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span style={{ color: theme.text }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="course-card-actions" style={{
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
              );
            })}
          </div>
        )}

      </div>

      <style>{`
        .course-image-carousel {
          width: 100vw;
          max-width: 1240px;
          margin: 2rem auto 0;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
        }

        .course-image-carousel__track {
          display: flex;
          width: max-content;
          gap: 1rem;
          animation: courseCarouselScroll 32s linear infinite;
        }

        .course-image-carousel:hover .course-image-carousel__track,
        .course-image-carousel:focus-within .course-image-carousel__track {
          animation-play-state: paused;
        }

        .course-image-carousel__item {
          position: relative;
          width: 220px;
          height: 132px;
          flex: 0 0 220px;
          padding: 0;
          overflow: hidden;
          border: 1px solid rgba(37, 99, 235, 0.16);
          border-radius: 12px;
          background: #dbeafe;
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.1);
          cursor: pointer;
          text-align: left;
          animation: courseImageReveal 700ms cubic-bezier(0.2, 0.75, 0.3, 1) both;
          transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
        }

        .course-image-carousel__item:nth-child(2n) { animation-delay: 80ms; }
        .course-image-carousel__item:nth-child(3n) { animation-delay: 160ms; }
        .course-image-carousel__item:nth-child(4n) { animation-delay: 240ms; }

        .course-image-carousel__item::after {
          position: absolute;
          inset: 45% 0 0;
          background: linear-gradient(transparent, rgba(15, 23, 42, 0.78));
          content: '';
        }

        .course-image-carousel__item img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 300ms ease;
        }

        .course-image-carousel__item:hover img {
          transform: scale(1.06);
        }

        .course-image-carousel__item:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(37, 99, 235, 0.5);
          box-shadow: 0 14px 28px rgba(15, 23, 42, 0.16);
        }

        .course-image-carousel__item span {
          position: absolute;
          right: 0.75rem;
          bottom: 0.65rem;
          left: 0.75rem;
          z-index: 1;
          overflow: hidden;
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        @keyframes courseCarouselScroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.5rem)); }
        }

        @keyframes courseImageReveal {
          from { opacity: 0; transform: translateY(18px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 576px) {
          .course-image-carousel {
            margin-top: 1.5rem;
          }

          .course-image-carousel__item {
            width: 180px;
            height: 108px;
            flex-basis: 180px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .course-image-carousel__track {
            animation: none;
          }

          .course-image-carousel__item {
            animation: none;
            transition: none;
          }
        }

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
