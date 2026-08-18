import React, { useState } from 'react';
import { X, Image as ImageIcon, Video } from 'lucide-react';

const Gallery = ({ darkMode, onClose }) => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photoImports = import.meta.glob('../photos/*.{jpeg,jpg,png,webp}', {
    eager: true,
    import: 'default',
  });

  const videoImports = import.meta.glob('../videos/*.mp4', {
    eager: true,
    import: 'default',
  });

  const photos = Object.entries(photoImports).map(([path, src]) => ({
    src,
    name: path.split('/').pop(),
  }));

  const videos = Object.entries(videoImports).map(([path, src]) => ({
    src,
    name: path.split('/').pop(),
  }));

  return (
    <div
      id="gallery"
      style={{
        background: darkMode ? '#0f172a' : '#ffffff',
        color: darkMode ? '#e2e8f0' : '#1e293b',
        padding: '3rem 1.5rem',
        minHeight: '100vh'
      }}
    >
      <div className="container">
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: darkMode ? '#1f2937' : '#f1f5f9',
            color: darkMode ? '#f3f4f6' : '#1e293b',
            border: 'none',
            padding: '0.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <X size={24} />
        </button>

        {/* Gallery Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem', marginTop: '1rem' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              marginBottom: '0.5rem',
              color: darkMode ? '#f8fafc' : '#0f172a'
            }}
          >
            Gallery
          </h1>
          <p style={{ fontSize: '1.1rem', color: darkMode ? '#cbd5e1' : '#64748b' }}>
            Explore our photos and videos from events, training sessions, and celebrations
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('photos')}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              background: activeTab === 'photos' ? '#2563eb' : (darkMode ? '#1f2937' : '#f1f5f9'),
              color: activeTab === 'photos' ? '#ffffff' : (darkMode ? '#cbd5e1' : '#475569'),
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'photos') {
                e.target.style.background = darkMode ? '#374151' : '#e2e8f0';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'photos') {
                e.target.style.background = darkMode ? '#1f2937' : '#f1f5f9';
              }
            }}
          >
            <ImageIcon size={20} />
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              background: activeTab === 'videos' ? '#2563eb' : (darkMode ? '#1f2937' : '#f1f5f9'),
              color: activeTab === 'videos' ? '#ffffff' : (darkMode ? '#cbd5e1' : '#475569'),
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'videos') {
                e.target.style.background = darkMode ? '#374151' : '#e2e8f0';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'videos') {
                e.target.style.background = darkMode ? '#1f2937' : '#f1f5f9';
              }
            }}
          >
            <Video size={20} />
            Videos
          </button>
        </div>

        {/* Photos Section */}
        {activeTab === 'photos' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {photos.map((photo, index) => (
              <div
                key={photo.name || index}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: darkMode ? '#1f2937' : '#f8fafc',
                  boxShadow: darkMode
                    ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                    : '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  aspectRatio: '1 / 1'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = darkMode
                    ? '0 12px 24px rgba(0, 0, 0, 0.4)'
                    : '0 12px 24px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = darkMode
                    ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                    : '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {selectedPhoto && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedPhoto(null)}
            style={{ zIndex: 2000 }}
          >
            <div
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '900px',
                background: '#090d16',
                color: '#ffffff',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700, margin: 0 }}>
                    Gallery Photo
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0.25rem 0 0' }}>
                    {selectedPhoto.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' ')}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
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
                  aria-label="Close image"
                >
                  <X size={20} />
                </button>
              </div>

              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxHeight: '75vh',
                  background: '#000',
                  overflow: 'auto',
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#94a3b8 rgba(15,23,42,0.5)'
                }}
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.name}
                  style={{
                    display: 'block',
                    width: '100%',
                    minHeight: '300px',
                    objectFit: 'contain',
                    margin: '0 auto'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Videos Section */}
        {activeTab === 'videos' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {videos.map((video, index) => (
              <div
                key={video.name || index}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: darkMode ? '#1f2937' : '#f8fafc',
                  boxShadow: darkMode
                    ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                    : '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = darkMode
                    ? '0 12px 24px rgba(0, 0, 0, 0.4)'
                    : '0 12px 24px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = darkMode
                    ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                    : '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                <video
                  controls
                  preload="metadata"
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover'
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      margin: 0,
                      color: darkMode ? '#cbd5e1' : '#64748b',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {video.name.replace('.mp4', '').replace(/_/g, ' ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {(activeTab === 'photos' && photos.length === 0) ||
          (activeTab === 'videos' && videos.length === 0) && (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <p style={{ color: darkMode ? '#9ca3af' : '#94a3b8', fontSize: '1.1rem' }}>
                No {activeTab} available at the moment.
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default Gallery;
