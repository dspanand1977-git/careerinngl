import React, { useRef, useState } from 'react';
import { ArrowUpRight, GraduationCap, Sparkles } from 'lucide-react';
import './ScholarshipButton.css';

const ScholarshipButton = ({ onApply }) => {
  const [position, setPosition] = useState(null);
  const dragRef = useRef({ active: false, moved: false, offsetX: 0, offsetY: 0 });

  const getBoundedPosition = (left, top, element) => ({
    left: Math.max(8, Math.min(left, window.innerWidth - element.offsetWidth - 8)),
    top: Math.max(8, Math.min(top, window.innerHeight - element.offsetHeight - 8)),
  });

  const handlePointerDown = (event) => {
    if (event.button !== 0) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    dragRef.current = {
      active: true,
      moved: false,
      offsetX: event.clientX - bounds.left,
      offsetY: event.clientY - bounds.top,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current.active) return;

    const nextPosition = getBoundedPosition(
      event.clientX - dragRef.current.offsetX,
      event.clientY - dragRef.current.offsetY,
      event.currentTarget,
    );

    if (Math.abs(event.movementX) > 0 || Math.abs(event.movementY) > 0) {
      dragRef.current.moved = true;
    }
    setPosition(nextPosition);
  };

  const handlePointerUp = (event) => {
    dragRef.current.active = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleClick = (event) => {
    if (dragRef.current.moved) {
      event.preventDefault();
      dragRef.current.moved = false;
      return;
    }
    onApply();
  };

  const handleKeyDown = (event) => {
    const step = 16;
    const bounds = event.currentTarget.getBoundingClientRect();
    const currentPosition = position || { left: bounds.left, top: bounds.top };
    const nextPosition = { ...currentPosition };

    if (event.key === 'ArrowLeft') nextPosition.left -= step;
    if (event.key === 'ArrowRight') nextPosition.left += step;
    if (event.key === 'ArrowUp') nextPosition.top -= step;
    if (event.key === 'ArrowDown') nextPosition.top += step;
    if (nextPosition.left === currentPosition.left && nextPosition.top === currentPosition.top) return;

    event.preventDefault();
    setPosition(getBoundedPosition(nextPosition.left, nextPosition.top, event.currentTarget));
  };

  return (
    <button
      type="button"
      className="scholarship-cta"
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
      style={position ? { left: position.left, top: position.top, right: 'auto', bottom: 'auto' } : undefined}
      aria-label="Apply for a CareerIn scholarship"
      title="Avail Scholarship"
    >
      <span className="scholarship-cta__orbit" aria-hidden="true" />
      <span className="scholarship-cta__icon" aria-hidden="true">
        <GraduationCap size={22} strokeWidth={2.4} />
      </span>
      <span className="scholarship-cta__copy">
        <span className="scholarship-cta__title">Avail Scholarship</span>
      </span>
      <span className="scholarship-cta__arrow" aria-hidden="true">
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </span>
    </button>
  );
};

export default ScholarshipButton;