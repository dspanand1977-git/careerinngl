import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCatalog from './components/CourseCatalog';
import CourseDetailModal from './components/CourseDetailModal';
import InplantTraining from './components/InplantTraining';
import WhyChooseUs from './components/WhyChooseUs';
import Placements from './components/Placements';
import BatchSchedule from './components/BatchSchedule';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import EnrollmentModal from './components/EnrollmentModal';
import Footer from './components/Footer';
import { Phone, MessageCircle } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [enrollCourse, setEnrollCourse] = useState(null);
  const [enrollSubject, setEnrollSubject] = useState('');
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#gallery') {
        setShowGallery(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenEnroll = (subject = '', course = null) => {
    setEnrollCourse(course);
    setEnrollSubject(subject);
    setEnrollModalOpen(true);
  };

  return (
    <div className={`app-wrapper ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenEnroll={() => handleOpenEnroll('General Admission Inquiry')}
      />

      {/* Hero Banner */}
      <Hero
        onOpenEnroll={(subject) => handleOpenEnroll(subject || 'Free Demo Class Booking')}
      />

      {/* Course Catalog & Search */}
      <CourseCatalog
        onSelectCourse={(course) => setSelectedCourse(course)}
        onEnrollCourse={(course) => handleOpenEnroll(`Course Registration: ${course.title}`, course)}
      />

      {/* In-Plant Training for College Students */}
      <InplantTraining
        onOpenEnroll={(subject) => handleOpenEnroll(subject)}
      />

      {/* Why Choose CareerIn */}
      <WhyChooseUs />

      {/* Testimonials & Placements */}
      <Placements />

      {/* Upcoming Batch Schedule */}
      <BatchSchedule
        onOpenEnroll={(subject) => handleOpenEnroll(subject)}
      />

      {/* Gallery Section */}
      {showGallery && (
        <Gallery
          darkMode={darkMode}
          onClose={() => {
            setShowGallery(false);
            window.location.hash = '#batches';
          }}
        />
      )}

      {/* Contact & Map Location */}
      <ContactSection />

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={(course) => handleOpenEnroll(`Course Registration: ${course.title}`, course)}
        />
      )}

      {/* Enrollment & Demo Class Modal */}
      <EnrollmentModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        initialCourse={enrollCourse}
        initialSubject={enrollSubject}
      />

      {/* Floating Action WhatsApp & Phone Buttons */}
      <div style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 800,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        alignItems: 'center'
      }}>
        <a
          href="https://wa.me/919498029898?text=Hello%20CareerIn,%20I%20am%20interested%20in%20software%20training%20courses."
          target="_blank"
          rel="noreferrer"
          title="Chat on WhatsApp"
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#25d366',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(37, 211, 102, 0.4)',
            transition: 'transform 0.2s ease'
          }}
          className="floating-btn"
        >
          <MessageCircle size={28} />
        </a>

        <a
          href="tel:+919498029898"
          title="Call CareerIn Hotline"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: '#2563eb',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.4)',
            transition: 'transform 0.2s ease'
          }}
          className="floating-btn"
        >
          <Phone size={22} />
        </a>
      </div>

      <style>{`
        .floating-btn:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default App;
