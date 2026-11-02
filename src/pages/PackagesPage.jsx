import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Check,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Clock,
  Sparkles,
  Users
} from 'lucide-react';

export default function PackagesPage({ 
  setFormData, 
  setIsAvailabilityModalOpen, 
  showToast 
}) {
  const navigate = useNavigate();

  const handleSelectPackage = (categoryName, guestCount) => {
    setFormData(prev => ({
      ...prev,
      category: categoryName,
      guestCount: guestCount
    }));
    showToast(`Selected "${categoryName}". Fill in your date to complete inquiry.`);
    navigate('/inquiry');
  };

  return (
    <div className="packages-page">
      {/* ------------------------------------------------------------------ */}
      {/* PAGE BANNER                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="page-header-banner">
        <div className="ow-container">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Event Packages</span>
          </div>
          <span className="section-label">Package Selections</span>
          <h1 className="page-banner-title">Event Programs Designed Around Your Guests</h1>
          <p className="page-banner-intro">
            Ocean West Catering provides comprehensive setup, Michelin-caliber culinary craft, professional service staff, 
            china, bar coordination, aesthetic styling, and complete dietary adaptation across British Columbia.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PACKAGES TIERS                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="ow-section packages-section">
        <div className="ow-container">
          <div className="packages-grid">
            {/* Package 1: The Intimate Gathering */}
            <div className="package-card">
              <div className="package-meta-header">
                <span>Casual to Formal</span>
                <span className="package-rate">From $85/Guest</span>
              </div>
              <h3 className="package-title">The Intimate Gathering</h3>
              <p className="package-desc">
                Ideal for small celebration dinners, micro-weddings, corporate executive retreats, and cocktail evenings in private venues or homes.
              </p>
              <ul className="package-features-list">
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Choice of 3-course plated dinner or 5 passed canapés</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Dedicated executive chef and professional service staff</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Coordination of rental dinnerware, glassware &amp; flatware</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Custom dietary substitutions (vegan, gluten-free, halal)</span>
                </li>
              </ul>
              <div className="package-footer-block">
                <div className="package-capacity-pill">Minimum 12–35 Guests</div>
                <button 
                  type="button" 
                  className="btn-package-action"
                  onClick={() => handleSelectPackage('The Intimate Gathering', '25')}
                >
                  Select Intimate Gathering
                </button>
              </div>
            </div>

            {/* Package 2: The Grand Wedding Banquet */}
            <div className="package-card highlighted">
              <div className="most-requested-badge">Most Requested</div>
              <div className="package-meta-header">
                <span>Wedding &amp; Gala</span>
                <span className="package-rate">From $140/Guest</span>
              </div>
              <h3 className="package-title">The Grand Wedding Banquet</h3>
              <p className="package-desc">
                Our signature luxury wedding dining experience. From bridal party arrivals to cocktail hour and late-night artisan food stations.
              </p>
              <ul className="package-features-list">
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Full 4-course artisanal plated or luxury family-style banquet</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Complete culinary team &amp; minimum 4 professional waitstaff</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Cocktail hour canapé service (4 selections) + bridal party platter</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Full table settings, linens, and bar glassware management</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Late-night wedding slider/taco station experience</span>
                </li>
              </ul>
              <div className="package-footer-block">
                <div className="package-capacity-pill">Minimum 40–350 Guests</div>
                <button 
                  type="button" 
                  className="btn-package-action"
                  onClick={() => handleSelectPackage('The Grand Wedding Banquet', '150')}
                >
                  Select Grand Wedding Package
                </button>
              </div>
            </div>

            {/* Package 3: Movie & Film Production */}
            <div className="package-card">
              <div className="package-meta-header">
                <span>Film &amp; Set Production</span>
                <span className="package-rate">Daily Call Sheet Rates</span>
              </div>
              <h3 className="package-title">Movie &amp; Film Production</h3>
              <p className="package-desc">
                Reliable, high-energy, nutritious catering tailored for busy cast &amp; crew with flexible call times and remote BC shoot locations.
              </p>
              <ul className="package-features-list">
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>100% bespoke hot breakfast, lunch, and dinner menus daily</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Continuous hot craft truck service &amp; barista setup</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Rapid turnaround boxed lunches for off-grid shoots</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Fully compliant with BC Motion Picture film union meal guidelines</span>
                </li>
              </ul>
              <div className="package-footer-block">
                <div className="package-capacity-pill">Crew Size 25–400+ Daily</div>
                <button 
                  type="button" 
                  className="btn-package-action"
                  onClick={() => handleSelectPackage('Movie & Film Production', '120')}
                >
                  Request Production Call Sheet
                </button>
              </div>
            </div>
          </div>

          {/* Guarantee banner */}
          <div className="guarantee-notice-bar" style={{ marginTop: '48px' }}>
            <div className="guarantee-icon">
              <ShieldCheck size={16} />
            </div>
            <p className="guarantee-text">
              <strong>Booking Guarantee &amp; Date Protection:</strong> Ocean West Catering guarantees 100% date protection once deposit is secured. 
              In our commitment to culinary excellence and impeccable service, we accept a <strong>strictly limited number of bookings per weekend</strong> to preserve quality.
            </p>
          </div>

          {/* Check Availability Callout */}
          <div className="menu-guide-banner" style={{ marginTop: '36px' }}>
            <div className="banner-left">
              <div className="banner-icon-box">
                <Calendar size={22} />
              </div>
              <div>
                <h4 className="banner-title">Planning an Upcoming Date in 2025 or 2026?</h4>
                <p className="banner-subtitle">
                  Verify date availability immediately before submitting your package specifications.
                </p>
              </div>
            </div>
            <button 
              type="button" 
              className="banner-btn"
              onClick={() => setIsAvailabilityModalOpen(true)}
            >
              <span>Check Chef Availability</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

