import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Utensils,
  ChevronRight,
  FileText,
  Download,
  Check,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { MENU_COURSES } from '../data/cateringData';

export default function CoursesPage({ 
  setIsPdfModalOpen, 
  setFormData, 
  showToast 
}) {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const filteredCourses = activeTab === 'all' 
    ? MENU_COURSES 
    : MENU_COURSES.filter(course => {
        if (activeTab === 'starters') return course.category === 'starters';
        if (activeTab === 'mains') return course.category === 'mains';
        if (activeTab === 'canapes') return course.category === 'canapes';
        if (activeTab === 'grazing') return course.category === 'grazing' || course.category === 'desserts';
        return true;
      });

  const handleAddDishToInquiry = (courseTitle) => {
    setFormData(prev => ({
      ...prev,
      notes: `Interested in including: ${courseTitle}\n` + (prev.notes || '')
    }));
    showToast(`Added "${courseTitle}" to your inquiry preferences!`);
    navigate('/inquiry');
  };

  return (
    <div className="courses-page">
      {/* ------------------------------------------------------------------ */}
      {/* PAGE BANNER                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="page-header-banner">
        <div className="ow-container">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Courses &amp; Delicacies</span>
          </div>
          <span className="section-label">Culinary Repertoire</span>
          <h1 className="page-banner-title">Signature Courses &amp; Delicacies</h1>
          <p className="page-banner-intro">
            Executive Chef Michael Thomas harvests directly from Haida Gwaii halibut fishers, Langley heritage duck farms, 
            and Cowichan Valley organic berry orchards to produce unforgettable fine Pacific Northwest courses.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* MENU REPERTOIRE SECTION                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="ow-section courses-section">
        <div className="ow-container">
          {/* Filter Tabs */}
          <div className="courses-filter-tabs">
            <button 
              type="button" 
              className={`filter-tab-pill ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Selections
            </button>
            <button 
              type="button" 
              className={`filter-tab-pill ${activeTab === 'starters' ? 'active' : ''}`}
              onClick={() => setActiveTab('starters')}
            >
              First Courses &amp; Starters
            </button>
            <button 
              type="button" 
              className={`filter-tab-pill ${activeTab === 'mains' ? 'active' : ''}`}
              onClick={() => setActiveTab('mains')}
            >
              Artisanal Mains
            </button>
            <button 
              type="button" 
              className={`filter-tab-pill ${activeTab === 'canapes' ? 'active' : ''}`}
              onClick={() => setActiveTab('canapes')}
            >
              Passed Hors d'oeuvres
            </button>
            <button 
              type="button" 
              className={`filter-tab-pill ${activeTab === 'grazing' ? 'active' : ''}`}
              onClick={() => setActiveTab('grazing')}
            >
              Dessert &amp; Grazing Boards
            </button>
          </div>

          {/* Menu Cards Grid */}
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-badges-row">
                  {course.badges.map((b, idx) => (
                    <span key={idx} className={`course-badge ${b.type}`}>
                      {b.text}
                    </span>
                  ))}
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.description}</p>
                <div className="course-card-footer">
                  <span className="course-style-label">
                    <Utensils size={12} />
                    <span>Service Style: {course.serviceStyle}</span>
                  </span>
                  <button 
                    type="button" 
                    title="Add this dish to your event inquiry"
                    onClick={() => handleAddDishToInquiry(course.title)}
                    className="btn-dish-inquire"
                    style={{ color: '#BA8D5B', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 600 }}
                  >
                    <span>Inquire</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Download Guide Banner Callout */}
          <div className="menu-guide-banner" style={{ marginTop: '56px' }}>
            <div className="banner-left">
              <div className="banner-icon-box">
                <FileText size={22} />
              </div>
              <div>
                <h4 className="banner-title">Download Complete 2025 Catering &amp; Platter Guide</h4>
                <p className="banner-subtitle">
                  Includes complete menu pricing, allergen declarations, wine pairing recommendations, and seasonal package selections.
                </p>
              </div>
            </div>
            <button 
              type="button" 
              className="banner-btn"
              onClick={() => setIsPdfModalOpen(true)}
            >
              <span>Request Full Menu PDF</span>
              <Download size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* DIETARY & COMMISSARY PHILOSOPHY                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="ow-section" style={{ backgroundColor: '#F6F3EC', borderTop: '1px solid #EAE4D9' }}>
        <div className="ow-container">
          <div className="section-header-split">
            <div>
              <span className="section-label">Culinary Integrity</span>
              <h2 className="section-heading-serif">Custom Dietary Adaptation Without Compromise</h2>
            </div>
            <p className="section-header-narrative">
              Every course can be custom tailored to meet strict dietary needs without sacrificing presentation, 
              texture, or flavor. We prepare dedicated vegan, celiac-safe gluten-free, halal, and kosher-friendly offerings.
            </p>
          </div>

          <div className="hero-stats-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div className="hero-stat-card">
              <span className="stat-metric">100% Celiac Protocols</span>
              <span className="stat-desc">Dedicated prep tables and separate fryer equipment</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-metric">Vegan &amp; Plant-Forward</span>
              <span className="stat-desc">Handcrafted roasted vegetable glazes and dairy-free reductions</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-metric">Certified Sustainable</span>
              <span className="stat-desc">Ocean Wise certified wild seafood from BC waters</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

