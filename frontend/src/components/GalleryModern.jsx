import React, { useRef, useState } from 'react';
import { ArrowUpRight, Image as ImageIcon, Play, Video, X } from 'lucide-react';
import './GalleryModern.css';

const getDisplayName = (name) => name.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ');

const GalleryModern = ({ darkMode, onClose }) => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const videoRefs = useRef([]);
  const photoImports = import.meta.glob('../photos/*.{jpeg,jpg,png,webp}', { eager: true, import: 'default' });
  const videoImports = import.meta.glob('../videos/*.mp4', { eager: true, import: 'default' });
  const photos = Object.entries(photoImports).map(([path, src]) => ({ src, name: path.split('/').pop() }));
  const videos = Object.entries(videoImports).map(([path, src]) => ({ src, name: path.split('/').pop() }));
  const activeItems = activeTab === 'photos' ? photos : videos;

  const pauseOtherVideos = (playingVideo) => {
    videoRefs.current.forEach((videoElement) => {
      if (videoElement && videoElement !== playingVideo) videoElement.pause();
    });
  };

  return (
    <section id="gallery" className={`gallery-page ${darkMode ? 'gallery-page-dark' : ''}`}>
      <div className="gallery-shell">
        <button className="gallery-close" onClick={onClose} aria-label="Close gallery"><X size={21} /></button>
        <header className="gallery-header">
          <div className="gallery-kicker"><span /> CareerIn moments</div>
          <h1>Learn. Connect. <em>Celebrate.</em></h1>
          <p>Take a closer look at the people, projects, and experiences that make learning at CareerIn memorable.</p>
          <div className="gallery-stats" aria-label="Gallery totals">
            <span><strong>{photos.length}</strong> photo stories</span>
            <span><strong>{videos.length}</strong> video moments</span>
            <span><strong>01</strong> community</span>
          </div>
        </header>
        <div className="gallery-toolbar">
          <div className="gallery-tabs" role="tablist" aria-label="Gallery media type">
            <button className={activeTab === 'photos' ? 'gallery-tab active' : 'gallery-tab'} onClick={() => setActiveTab('photos')} role="tab" aria-selected={activeTab === 'photos'}><ImageIcon size={18} /> Photos <span>{photos.length}</span></button>
            <button className={activeTab === 'videos' ? 'gallery-tab active' : 'gallery-tab'} onClick={() => setActiveTab('videos')} role="tab" aria-selected={activeTab === 'videos'}><Video size={18} /> Videos <span>{videos.length}</span></button>
          </div>
          <p className="gallery-note">Tap any photo to view it full size</p>
        </div>
        {activeItems.length > 0 ? (
          <div className={`gallery-grid ${activeTab === 'videos' ? 'video-grid' : ''}`}>
            {activeTab === 'photos' && photos.map((photo, index) => (
              <button className={`gallery-photo gallery-photo-${index % 5}`} key={photo.name || index} onClick={() => setSelectedPhoto(photo)} aria-label={`Open ${getDisplayName(photo.name)}`}>
                <img src={photo.src} alt={getDisplayName(photo.name)} loading={index > 4 ? 'lazy' : 'eager'} />
                <span className="gallery-photo-overlay"><ArrowUpRight size={22} /></span>
              </button>
            ))}
            {activeTab === 'videos' && videos.map((video, index) => (
              <article className="gallery-video-card" key={video.name || index}>
                <div className="gallery-video-frame">
                  <video ref={(videoElement) => { videoRefs.current[index] = videoElement; }} controls preload="metadata" onPlay={(event) => pauseOtherVideos(event.currentTarget)}><source src={video.src} type="video/mp4" />Your browser does not support the video tag.</video>
                  <span className="video-label"><Play size={13} fill="currentColor" /> Video story</span>
                </div>
                <h3>{getDisplayName(video.name)}</h3>
              </article>
            ))}
          </div>
        ) : <div className="gallery-empty"><ImageIcon size={32} /><p>No {activeTab} available at the moment.</p></div>}
      </div>
      {selectedPhoto && <div className="gallery-lightbox" onClick={() => setSelectedPhoto(null)}><div className="gallery-lightbox-card" onClick={(event) => event.stopPropagation()}><div className="gallery-lightbox-bar"><div><span>CareerIn gallery</span><h2>{getDisplayName(selectedPhoto.name)}</h2></div><button onClick={() => setSelectedPhoto(null)} aria-label="Close image"><X size={20} /></button></div><div className="gallery-lightbox-image"><img src={selectedPhoto.src} alt={getDisplayName(selectedPhoto.name)} /></div></div></div>}
    </section>
  );
};

export default GalleryModern;
