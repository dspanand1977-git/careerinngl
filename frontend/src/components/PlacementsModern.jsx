import { useEffect, useState } from 'react';
import { Award, Building2, CheckCircle, Quote, Star } from 'lucide-react';
import { placementsList, hiringCompanies } from '../data/placementsData';
import { companyBackgrounds } from '../companyBackgrounds';
import './PlacementsModern.css';

const PlacementsModern = () => {
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % companyBackgrounds.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="placements" className="placements-modern">
      <div className="placements-backdrops" aria-hidden="true">
        {companyBackgrounds.map((background, index) => (
          <div
            className={`placements-backdrop ${index === activeBackground ? 'is-active' : ''}`}
            key={background.company}
            style={{ backgroundImage: `url("${background.image}")` }}
          />
        ))}
        <div className="placements-backdrop-shade" />
      </div>

      <div className="container placements-modern-content">
        <header className="placements-modern-header">
          <div className="placements-modern-kicker"><Award size={16} /> Success stories & alumni</div>
          <h2>Careers built with <em>confidence.</em></h2>
          <p>Practical training, personal guidance, and the skills to step into a changing technology industry.</p>
          <div className="placements-company-signal"><span>Featured backdrop</span><strong>{companyBackgrounds[activeBackground].company}</strong></div>
        </header>

        <div className="placements-partners">
          <div className="placements-partners-heading"><span /> Companies our alumni work with</div>
          <div className="placements-partner-list">
            {hiringCompanies.map((company) => <span key={company}><Building2 size={17} /> {company}</span>)}
          </div>
        </div>

        <div className="placements-testimonials">
          {placementsList.map((item) => (
            <article className="placements-testimonial" key={item.name}>
              <Quote className="placements-quote-mark" size={34} />
              <div className="placements-rating" aria-label="5 out of 5 stars">{[...Array(5)].map((_, index) => <Star key={index} size={15} fill="currentColor" />)}</div>
              <p className="placements-quote">“{item.quote}”</p>
              <div className="placements-student">
                <img src={item.avatar} alt={item.name} />
                <div><strong>{item.name}</strong><span>{item.role} @ {item.company}</span><small>{item.course}</small></div>
                <b><CheckCircle size={13} /> {item.package}</b>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementsModern;
