import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, Play, Pause, Volume2, VolumeX, Eye, EyeOff, 
  CheckCircle2, ShieldCheck, Sparkles, PhoneCall, Award, 
  Laptop, Users, BookOpen, Code, Cpu, GraduationCap, X, Monitor
} from 'lucide-react';
import { statsData } from '../data/placementsData';

const BACKGROUND_VIDEOS = [
  {
    id: 'coding',
    title: 'Full-Stack Coding Lab',
    category: 'Practical Software Training',
    icon: Code,
    url: 'https://cdn.pixabay.com/video/2021/04/12/70884-536480980_large.mp4',
    poster: '',
    description: 'Real-time coding labs for Java, Python, React, Node.js and modern full-stack development.'
  },
  {
    id: 'ai-tech',
    title: 'AI & Data Science',
    category: 'Future Tech Skills',
    icon: Cpu,
    url: 'https://cdn.pixabay.com/video/2019/04/23/23011-332483108_large.mp4',
    poster: '',
    description: 'Explore AI, machine learning, analytics and cloud-based innovation with guided mentorship.'
  },
  {
    id: 'campus',
    title: 'Career Campus Experience',
    category: 'Mentorship & Learning',
    icon: GraduationCap,
    url: 'https://cdn.pixabay.com/video/2020/05/25/40149-424074251_large.mp4',
    poster: '',
    description: 'A focused learning environment with personal guidance, project support and industry-ready coaching.'
  },
  {
    id: 'matrix',
    title: 'Testing & Cyber Skills',
    category: 'Quality & Security',
    icon: Monitor,
    url: 'https://cdn.pixabay.com/video/2016/09/21/5360-183787541_large.mp4',
    poster: '',
    description: 'Build confidence in automation testing, software quality, and security fundamentals for real jobs.'
  }
];

const Hero = ({ onOpenEnroll }) => {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCampusVideoOpen, setIsCampusVideoOpen] = useState(false);
  const videoRef = useRef(null);

  const currentVideo = BACKGROUND_VIDEOS[activeVideoIdx];

  // Handle play/pause toggle
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log('Autoplay prevented:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle mute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Switch video background
  const handleSelectVideo = (idx) => {
    setActiveVideoIdx(idx);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(err => console.log('Video play error:', err));
    }
  };

  return (
    <section id="hero" style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '4rem 0 3.5rem',
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>

      {/* Background Educational Video Layer */}
      {isVideoVisible && (
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden'
        }}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            poster={currentVideo.poster || undefined}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.92) contrast(1.08) saturate(1.15)',
              opacity: 1,
              background: '#020817',
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <source src={currentVideo.url} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      )}

      {/* Cinematic Glass Overlay for Contrast & Text Readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: isVideoVisible 
          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.52) 0%, rgba(15, 23, 42, 0.35) 45%, rgba(9, 14, 24, 0.6) 100%)'
          : 'radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08) 0%, rgba(6, 182, 212, 0.03) 50%, transparent 100%)',
        backdropFilter: isVideoVisible ? 'blur(2px)' : 'none',
        WebkitBackdropFilter: isVideoVisible ? 'blur(2px)' : 'none',
        transition: 'all 0.5s ease'
      }} />

      {/* Fallback Animated Gradient Glow Blobs */}
      {!isVideoVisible && (
        <>
          <div style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(6, 182, 212, 0) 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, rgba(239, 68, 68, 0) 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1
          }} />
        </>
      )}

      {/* Main Container Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Floating Video Selector Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          gap: '0.75rem',
          marginBottom: '2rem',
          background: isVideoVisible ? 'rgba(15, 23, 42, 0.65)' : 'rgba(255, 255, 255, 0.7)',
          padding: '0.6rem 1.25rem',
          borderRadius: 'var(--radius-full)',
          border: isVideoVisible ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid var(--light-border)',
          backdropFilter: 'blur(12px)',
          boxShadow: 'var(--shadow-md)',
          overflow: 'hidden'
        }}>
          {/* Active Video Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 10px #10b981'
            }} className="animate-pulse-glow" />
            <span style={{
              fontSize: '0.825rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: isVideoVisible ? '#60a5fa' : '#2563eb'
            }}>
              Live Educational Video Backdrop
            </span>
          </div>

          {/* Theme Video Selector Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'nowrap', overflow: 'hidden' }}>
            {BACKGROUND_VIDEOS.map((vid, idx) => {
              const IconComp = vid.icon;
              const isActive = activeVideoIdx === idx;
              return (
                <button
                  key={vid.id}
                  onClick={() => handleSelectVideo(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    transition: 'all 0.25s ease',
                    background: isActive
                      ? (isVideoVisible ? 'linear-gradient(135deg, #2563eb, #06b6d4)' : '#2563eb')
                      : (isVideoVisible ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'),
                    color: isActive ? '#ffffff' : (isVideoVisible ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-muted)'),
                    border: isActive ? 'none' : (isVideoVisible ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent')
                  }}
                >
                  <IconComp size={14} />
                  <span>{vid.title}</span>
                </button>
              );
            })}
          </div>

          {/* Video Control Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
            <button
              onClick={togglePlay}
              title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: isVideoVisible ? 'rgba(255, 255, 255, 0.15)' : 'var(--light-bg)',
                color: isVideoVisible ? '#ffffff' : 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            </button>

            <button
              onClick={toggleMute}
              title={isMuted ? 'Unmute Video Audio' : 'Mute Video Audio'}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: isVideoVisible ? 'rgba(255, 255, 255, 0.15)' : 'var(--light-bg)',
                color: isVideoVisible ? '#ffffff' : 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            <button
              onClick={() => setIsVideoVisible(!isVideoVisible)}
              title={isVideoVisible ? 'Hide Video Backdrop' : 'Show Video Backdrop'}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: isVideoVisible ? 'rgba(255, 255, 255, 0.15)' : 'var(--light-bg)',
                color: isVideoVisible ? '#ffffff' : 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              {isVideoVisible ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        {/* Hero Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column Text & Call-To-Action */}
          <div>
            {/* Top Badge */}
            <div 
              className="section-tag animate-pulse-glow" 
              style={{ 
                marginBottom: '1.25rem',
                color: isVideoVisible ? '#93c5fd' : undefined,
                background: isVideoVisible ? 'rgba(37, 99, 235, 0.3)' : undefined,
                border: isVideoVisible ? '1px solid rgba(147, 197, 253, 0.3)' : undefined
              }}
            >
              <Sparkles size={16} color={isVideoVisible ? '#93c5fd' : '#2563eb'} />
              <span>Nagercoil's #1 Practical Software Training Institute</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: '3.1rem',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-1px',
              color: isVideoVisible ? '#ffffff' : 'var(--text-main)'
            }}>
              Accelerate Your IT Career with <span className="gradient-text" style={{ textShadow: isVideoVisible ? '0 0 20px rgba(6, 182, 212, 0.4)' : 'none' }}>Hands-On Software</span> Training & Placement
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize: '1.1rem',
              color: isVideoVisible ? '#e2e8f0' : 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '620px',
              lineHeight: 1.6
            }}>
              Master Java, Python, .NET, Full Stack Development, React, Software Testing & Digital Marketing with industry mentors. Get 100% practical lab experience, in-plant training, and dedicated placement assistance.
            </p>

            {/* Highlights Checklist Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem 1.5rem',
              marginBottom: '2.25rem'
            }}>
              {[
                '100% Practical Lab Training',
                'Air-Conditioned Lab Facility',
                'No Personal Laptop Required',
                '1-on-1 Industry Mentorship',
                'In-Plant & Internship Certificate',
                '100% Placement & Mock Interviews'
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  fontSize: '0.95rem', 
                  fontWeight: 500,
                  color: isVideoVisible ? '#f8fafc' : 'var(--text-main)'
                }}>
                  <CheckCircle2 size={18} color="#10b981" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenEnroll()}
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
              >
                <span>Book Free Demo Class</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => setIsCampusVideoOpen(true)}
                className="btn"
                style={{
                  padding: '0.85rem 1.5rem',
                  fontSize: '1rem',
                  background: isVideoVisible ? 'rgba(255, 255, 255, 0.15)' : 'var(--light-card)',
                  color: isVideoVisible ? '#ffffff' : 'var(--primary)',
                  border: isVideoVisible ? '1px solid rgba(255, 255, 255, 0.3)' : '1.5px solid var(--primary)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <Play size={18} fill={isVideoVisible ? '#ffffff' : 'var(--primary)'} />
                <span>Watch Campus Video</span>
              </button>

              <a
                href="tel:+919498029898"
                className="btn btn-accent"
                style={{ padding: '0.85rem 1.25rem', fontSize: '0.95rem' }}
              >
                <PhoneCall size={18} />
                <span>Call Now</span>
              </a>
            </div>

          </div>

          {/* Right Column Feature Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-panel" style={{
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              boxShadow: 'var(--shadow-lg)',
              border: isVideoVisible ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid var(--light-border)',
              background: isVideoVisible ? 'rgba(15, 23, 42, 0.75)' : undefined,
              color: isVideoVisible ? '#ffffff' : undefined,
              position: 'relative',
              zIndex: 2
            }}>
              {/* Highlight Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(37, 99, 235, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60a5fa'
                  }}>
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: isVideoVisible ? '#ffffff' : 'var(--text-main)' }}>CareerIn Institute</h3>
                    <p style={{ fontSize: '0.8rem', color: isVideoVisible ? '#94a3b8' : 'var(--text-muted)' }}> Nagercoil</p>
                  </div>
                </div>

                <span style={{
                  padding: '0.3rem 0.75rem',
                  background: '#dcfce7',
                  color: '#15803d',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  Admissions Open
                </span>
              </div>

              {/* Training Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  padding: '1rem',
                  background: isVideoVisible ? 'rgba(255, 255, 255, 0.05)' : 'var(--light-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: isVideoVisible ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid var(--light-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                    <Laptop size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: isVideoVisible ? '#ffffff' : 'var(--text-main)' }}>Hands-On Project Labs</h4>
                    <p style={{ fontSize: '0.825rem', color: isVideoVisible ? '#cbd5e1' : 'var(--text-muted)' }}>Equipped AC lab with high-speed Internet</p>
                  </div>
                </div>

                <div style={{
                  padding: '1rem',
                  background: isVideoVisible ? 'rgba(255, 255, 255, 0.05)' : 'var(--light-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: isVideoVisible ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid var(--light-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: isVideoVisible ? '#ffffff' : 'var(--text-main)' }}>In-Plant Training & Internships</h4>
                    <p style={{ fontSize: '0.825rem', color: isVideoVisible ? '#cbd5e1' : 'var(--text-muted)' }}>Special curriculum for BE, B.Tech, BCA & BSc</p>
                  </div>
                </div>

                <div style={{
                  padding: '1rem',
                  background: isVideoVisible ? 'rgba(255, 255, 255, 0.05)' : 'var(--light-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: isVideoVisible ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid var(--light-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c' }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: isVideoVisible ? '#ffffff' : 'var(--text-main)' }}>100% Placement Assistance</h4>
                    <p style={{ fontSize: '0.825rem', color: isVideoVisible ? '#cbd5e1' : 'var(--text-muted)' }}>Mock interviews, resume crafting & referral</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Footer in Card */}
              <div style={{
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: 'white',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Need Course Guidance?</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Talk to Course Counselor</div>
                </div>
                <button
                  onClick={() => onOpenEnroll('Counseling Request')}
                  style={{
                    background: 'white',
                    color: '#2563eb',
                    fontWeight: 700,
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem'
                  }}
                >
                  Request Call
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Counter Bar */}
        <div style={{
          marginTop: '3.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem'
        }} className="stats-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="glass-panel" style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center',
              border: isVideoVisible ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid var(--light-border)',
              background: isVideoVisible ? 'rgba(15, 23, 42, 0.65)' : undefined,
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.2s ease'
            }}>
              <div style={{
                fontSize: '2.25rem',
                fontWeight: 800,
                color: isVideoVisible ? '#60a5fa' : '#2563eb',
                fontFamily: 'var(--font-heading)',
                marginBottom: '0.25rem'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: isVideoVisible ? '#cbd5e1' : 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Educational Video Preview Modal */}
      {isVideoModalOpen && (
        <div className="modal-overlay" style={{ zIndex: 2000 }} onClick={() => setIsVideoModalOpen(false)}>
          <div 
            className="modal-card" 
            style={{ maxWidth: '850px', background: '#090d16', color: '#ffffff', overflow: 'hidden' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700 }}>
                  CareerIn Institute - Practical Training Experience
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  {currentVideo.description}
                </p>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Player Box */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#000' }}>
              <video
                controls
                autoPlay
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              >
                <source src={currentVideo.url} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            {/* Modal Footer Video Selector */}
            <div style={{ padding: '1.25rem 1.5rem', background: '#0f172a' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.75rem' }}>
                Select Video Experience:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                {BACKGROUND_VIDEOS.map((vid, idx) => (
                  <div
                    key={vid.id}
                    onClick={() => handleSelectVideo(idx)}
                    style={{
                      padding: '0.6rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      background: activeVideoIdx === idx ? 'rgba(37, 99, 235, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                      border: activeVideoIdx === idx ? '1px solid #2563eb' : '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>{vid.title}</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{vid.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Campus Video Modal */}
      {isCampusVideoOpen && (
        <div className="modal-overlay" style={{ zIndex: 2000 }} onClick={() => setIsCampusVideoOpen(false)}>
          <div 
            className="modal-card" 
            style={{ maxWidth: '900px', background: '#090d16', color: '#ffffff', overflow: 'hidden' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700 }}>
                  AI & Full Stack Program
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Learn practical AI and full-stack development from industry experts
                </p>
              </div>
              <button
                onClick={() => setIsCampusVideoOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: 'none'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Player Box */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#000' }}>
              <video
                controls
                autoPlay
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              >
                <source src="/AI-FullStack-Program-1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 576px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          h1 { font-size: 2.2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

