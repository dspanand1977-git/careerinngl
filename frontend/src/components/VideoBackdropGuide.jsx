import React, { useState } from 'react';
import { ArrowRight, EyeOff, Images, Pause, X } from 'lucide-react';

const VideoBackdropGuide = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="video-backdrop-guide" aria-label="Video backdrop help">
      <button
        type="button"
        className="video-backdrop-guide-close"
        onClick={() => setIsVisible(false)}
        aria-label="Close video backdrop guide"
        title="Close guide"
      >
        <X size={15} />
      </button>

      <div className="video-backdrop-guide-icon" aria-hidden="true">
        <Images size={18} />
      </div>
      <div className="video-backdrop-guide-copy">
        <strong>Backdrop:</strong>{' '}
        <p>
          <ArrowRight size={13} aria-hidden="true" /> Change Video, <Pause size={13} aria-hidden="true" /> Pause, or <EyeOff size={13} aria-hidden="true" /> Hide
        </p>
      </div>
    </aside>
  );
};

export default VideoBackdropGuide;
