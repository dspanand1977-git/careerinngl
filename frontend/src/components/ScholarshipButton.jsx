import React from 'react';
import { ArrowUpRight, GraduationCap, Sparkles } from 'lucide-react';
import './ScholarshipButton.css';

const ScholarshipButton = ({ onApply }) => {
  return (
    <button
      type="button"
      className="scholarship-cta"
      onClick={onApply}
      aria-label="Apply for a CareerIn scholarship"
    >
      <span className="scholarship-cta__orbit" aria-hidden="true" />
      <span className="scholarship-cta__icon" aria-hidden="true">
        <GraduationCap size={22} strokeWidth={2.4} />
      </span>
      <span className="scholarship-cta__copy">
        <span className="scholarship-cta__eyebrow">
          <Sparkles size={12} /> Limited opportunity
        </span>
        <span className="scholarship-cta__title">Apply Scholarship</span>
      </span>
      <span className="scholarship-cta__arrow" aria-hidden="true">
        <ArrowUpRight size={19} strokeWidth={2.5} />
      </span>
    </button>
  );
};

export default ScholarshipButton;