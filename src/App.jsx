import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Link, useNavigate, Navigate } from 'react-router-dom';
import {
  Home,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Calendar,
  Check,
  Download,
  Menu as MenuIcon,
  X,
  User,
  Sparkles,
  Utensils,
  ArrowRight,
  FileText
} from 'lucide-react';
import './App.css';

import { HERO_SLIDES } from './data/cateringData';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import DisciplinesPage from './pages/DisciplinesPage';
import CoursesPage from './pages/CoursesPage';
import PackagesPage from './pages/PackagesPage';
import FilmCateringPage from './pages/FilmCateringPage';
import InquiryPage from './pages/InquiryPage';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();
  
  // Automated Hero Showcase state (purely automated, cycles every 4s)
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 4000); // 4 seconds per dish
    return () => clearInterval(interval);
  }, []);

  // Track page scroll to elevate sticky nav bar when scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modals state
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  
  // Availability checker state
  const [availDate, setAvailDate] = useState('');
  const [availResult, setAvailResult] = useState(null);

  // PDF request state
  const [pdfEmail, setPdfEmail] = useState('');
  const [pdfSuccess, setPdfSuccess] = useState(false);

  // Form submission state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'The Grand Wedding Banquet',
    eventDate: '',
    guestCount: '75',
    location: 'Richmond / Metro Vancouver',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      showToast('Please provide your name and email to submit an inquiry.');
      return;
    }
    setFormSubmitted(true);
    showToast('Inquiry sent successfully to Chef Michael Thomas!');
  };

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    if (!availDate) {
      showToast('Please select a date first.');
      return;
    }
    setAvailResult({
      date: availDate,
      status: 'AVAILABLE',
      message: `Great news! Chef Michael Thomas has availability for ${availDate}. We recommend reserving early.`
    });
  };

  const handleRequestPdf = (e) => {
    e.preventDefault();
    if (!pdfEmail) {
      showToast('Please enter your email address.');
      return;
    }
    setPdfSuccess(true);
    showToast('2025 Catering & Platter Guide PDF has been dispatched to your inbox!');
  };

  return (
    <div className="oceanwest-app">
      <ScrollToTop />

      {/* ------------------------------------------------------------------ */}
      {/* 1. TOP NOTICE BAR (NON-STICKY, SCROLLS AWAY ON ALL SCREENS)        */}
      {/* ------------------------------------------------------------------ */}
      <aside className="top-notice-bar" aria-label="Announcement & Contact Bar">
        <div className="ow-container ow-container-wide">
          <div className="top-notice-content">
            <div className="top-notice-left">
              <span>British Columbia Catering Supply</span>
              <span>•</span>
              <span>All Events &amp; Locations</span>
            </div>

            <div className="top-notice-middle">
              <a href="tel:6047224857">
                <Phone size={12} />
                <span>Direct: 604-722-4857</span>
              </a>
              <a href="tel:6044564481">
                <Phone size={12} />
                <span>Office: 604-456-4481</span>
              </a>
            </div>

            <div className="top-notice-right">
              <MapPin size={12} />
              <span>Commissary: 482 Panorama, Richmond</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/* 2. MAIN NAVIGATION (STICKY AT TOP: 0 ON ALL SCREENS)               */}
      {/* ------------------------------------------------------------------ */}
      <header className={`main-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="ow-container ow-container-wide">
          <div className="main-nav-inner">
            {/* Brand Logo */}
            <Link to="/" className="brand-logo-wrap">
              <div className="brand-icon">
                <Utensils size={18} strokeWidth={2.2} />
              </div>
              <div className="brand-text-block">
                <span className="brand-title">Ocean West</span>
                <span className="brand-subtitle">Fine Catering &amp; Services</span>
              </div>
            </Link>

            {/* Desktop Navigation - Dedicated Routes */}
            <nav className="nav-links-desktop">
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/disciplines" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Disciplines
              </NavLink>
              <NavLink 
                to="/courses" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Courses &amp; Delicacies
              </NavLink>
              <NavLink 
                to="/packages" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Event Packages
              </NavLink>
              <NavLink 
                to="/film-catering" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Film &amp; Media Catering
              </NavLink>
              <NavLink 
                to="/inquiry" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Direct Inquiries
              </NavLink>
            </nav>

            {/* Action buttons */}
            <div className="nav-actions">
              <button 
                type="button" 
                className="btn-consultation"
                onClick={() => setIsConsultModalOpen(true)}
              >
                <span>Book Private Consultation</span>
              </button>
              
              <button 
                type="button" 
                className="btn-profile-icon" 
                title="Account / Client Portal"
                onClick={() => showToast('Ocean West Client Portal login is active for contracted events.')}
              >
                <User size={16} />
              </button>

              <button 
                type="button" 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer - Separate Routes */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <NavLink 
              to="/" 
              end 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/disciplines" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Disciplines
            </NavLink>
            <NavLink 
              to="/courses" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses &amp; Delicacies
            </NavLink>
            <NavLink 
              to="/packages" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Event Packages
            </NavLink>
            <NavLink 
              to="/film-catering" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Film &amp; Media Catering
            </NavLink>
            <NavLink 
              to="/inquiry" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Direct Inquiries
            </NavLink>
            
            <button 
              type="button" 
              className="btn-primary-gold mobile-drawer-btn" 
              onClick={() => {
                setMobileMenuOpen(false);
                setIsConsultModalOpen(true);
              }}
            >
              <span>Book Private Consultation</span>
            </button>
            <button 
              type="button" 
              className="btn-outline-subtle mobile-drawer-btn" 
              onClick={() => {
                setMobileMenuOpen(false);
                showToast('Ocean West Client Portal login is active for contracted events.');
              }}
            >
              <User size={15} />
              <span>Client Portal Access</span>
            </button>
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* 3. MULTI-PAGE ROUTER OUTLET                                        */}
      {/* ------------------------------------------------------------------ */}
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                currentSlide={currentSlide}
                setIsAvailabilityModalOpen={setIsAvailabilityModalOpen}
                setIsConsultModalOpen={setIsConsultModalOpen}
              />
            } 
          />
          <Route 
            path="/disciplines" 
            element={<DisciplinesPage setIsConsultModalOpen={setIsConsultModalOpen} />} 
          />
          <Route 
            path="/courses" 
            element={
              <CoursesPage 
                setIsPdfModalOpen={setIsPdfModalOpen}
                setFormData={setFormData}
                showToast={showToast}
              />
            } 
          />
          <Route 
            path="/packages" 
            element={
              <PackagesPage 
                setFormData={setFormData}
                setIsAvailabilityModalOpen={setIsAvailabilityModalOpen}
                showToast={showToast}
              />
            } 
          />
          <Route 
            path="/film-catering" 
            element={
              <FilmCateringPage 
                setFormData={setFormData}
                showToast={showToast}
              />
            } 
          />
          <Route 
            path="/inquiry" 
            element={
              <InquiryPage 
                formData={formData}
                setFormData={setFormData}
                formSubmitted={formSubmitted}
                setFormSubmitted={setFormSubmitted}
                handleFormChange={handleFormChange}
                handleFormSubmit={handleFormSubmit}
              />
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* 4. LUXURY FOOTER                                                   */}
      {/* ------------------------------------------------------------------ */}
      <footer className="luxury-footer">
        <div className="ow-container">
          <div className="footer-top-grid">
            {/* Column 1: Brand & Union compliance */}
            <div>
              <div className="footer-brand-title">Ocean West</div>
              <p className="footer-about-text">
                Country-informed cooking and bespoke artisanal catering. Vancouver, Richmond, South Surrey,
                and film &amp; television production sets across British Columbia.
              </p>
              <div className="film-union-badge-box">
                <div className="union-badge-title">Film &amp; Production Endorsements</div>
                <div className="union-badge-sub">
                  Compliant with Teamsters, IATSE, DGC, and CMPA Catering Standards.
                </div>
              </div>
            </div>

            {/* Column 2: Navigation & Programs */}
            <div>
              <h4 className="footer-col-title">Navigation &amp; Programs</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <Link to="/">
                    <Home size={13} />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/disciplines">
                    <Sparkles size={13} />
                    <span>Disciplines</span>
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/courses">
                    <Utensils size={13} />
                    <span>Courses &amp; Delicacies</span>
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/packages">
                    <Calendar size={13} />
                    <span>Event Packages</span>
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/film-catering">
                    <Clock size={13} />
                    <span>Film &amp; Production Catering</span>
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/inquiry">
                    <Mail size={13} />
                    <span>Direct Inquiries</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Commissary & Contact */}
            <div>
              <h4 className="footer-col-title">Commissary &amp; Contact</h4>
              <div className="footer-contact-item">
                <MapPin size={15} />
                <span>482 Panorama, Richmond, BC V6X 0E7</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} />
                <a href="tel:6047224857">Direct: 604-722-4857</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} />
                <a href="tel:6044564481">Office: 604-456-4481</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={15} />
                <a href="mailto:info@oceanwestcatering.com">info@oceanwestcatering.com</a>
              </div>
            </div>

            {/* Column 4: Direct Inquiries */}
            <div>
              <h4 className="footer-col-title">Direct Inquiries</h4>
              <p className="footer-inquiries-text">
                Accepting reservations for 2025 and 2026 dates. Inquire early for summer and film shooting seasons.
              </p>
              <Link 
                to="/inquiry" 
                className="btn-footer-consult"
                style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}
              >
                Book Private Consultation
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <div>
              © 2025 OCEAN WEST CATERING. ALL RIGHTS RESERVED. PACIFIC COAST PRODUCE &amp; LOCAL FOOD ARTISAN ALLIANCE.
            </div>
            <div className="footer-legal-links">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); showToast('Privacy Policy: All client event data is confidential.'); }}>Privacy Policy &amp; Disclaimers</a>
              <span>|</span>
              <a href="#dietary" onClick={(e) => { e.preventDefault(); showToast('Dietary & Allergen Policies: VCH certified allergen protocol in effect.'); }}>Dietary &amp; Allergen Policies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------------------------ */}
      {/* 5. TABLET & MOBILE BOTTOM NAVIGATION (FOOTER ICONS BAR)            */}
      {/* ------------------------------------------------------------------ */}
      <nav className="mobile-bottom-nav" aria-label="Tablet and Mobile Bottom Navigation">
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
        >
          <Home size={19} />
          <span>Home</span>
        </NavLink>
        <NavLink 
          to="/disciplines" 
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
        >
          <Sparkles size={19} />
          <span>Disciplines</span>
        </NavLink>
        <NavLink 
          to="/courses" 
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
        >
          <Utensils size={19} />
          <span>Courses</span>
        </NavLink>
        <NavLink 
          to="/packages" 
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
        >
          <Calendar size={19} />
          <span>Packages</span>
        </NavLink>
        <NavLink 
          to="/inquiry" 
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
        >
          <Mail size={19} />
          <span>Inquire</span>
        </NavLink>
      </nav>

      {/* ------------------------------------------------------------------ */}
      {/* 6. MODALS & DIALOGS                                                */}
      {/* ------------------------------------------------------------------ */}

      {/* A: Date Availability Checker Modal */}
      {isAvailabilityModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAvailabilityModalOpen(false)}>
          <div className="modal-content-box" onClick={e => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => setIsAvailabilityModalOpen(false)}
            >
              <X size={18} />
            </button>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Calendar size={32} style={{ color: '#BA8D5B', marginBottom: '8px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#192720' }}>
                Check Date Availability
              </h3>
              <p style={{ fontSize: '13.5px', color: '#636C65' }}>
                Enter your prospective event date to check Chef Michael Thomas' calendar.
              </p>
            </div>

            {availResult ? (
              <div style={{
                backgroundColor: '#EAF2ED',
                border: '1px solid #C4DEC9',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                <ShieldCheck size={24} style={{ color: '#2F6141', margin: '0 auto 8px' }} />
                <h4 style={{ color: '#1E472D', fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>
                  {availResult.status}
                </h4>
                <p style={{ fontSize: '13px', color: '#2F6141', lineHeight: 1.5 }}>
                  {availResult.message}
                </p>
                <button
                  type="button"
                  className="btn-primary-gold"
                  style={{ marginTop: '14px', width: '100%', justifyContent: 'center' }}
                  onClick={() => {
                    setIsAvailabilityModalOpen(false);
                    setFormData(prev => ({ ...prev, eventDate: availResult.date }));
                    navigate('/inquiry');
                  }}
                >
                  Proceed to Inquire for This Date
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckAvailability}>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label className="form-label" htmlFor="checkDate">Target Event Date</label>
                  <input 
                    type="date" 
                    id="checkDate"
                    className="form-control"
                    value={availDate}
                    onChange={(e) => setAvailDate(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit-inquiry">
                  <span>Verify Availability</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* B: PDF Menu Guide Modal */}
      {isPdfModalOpen && (
        <div className="modal-overlay" onClick={() => setIsPdfModalOpen(false)}>
          <div className="modal-content-box" onClick={e => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => setIsPdfModalOpen(false)}
            >
              <X size={18} />
            </button>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <FileText size={32} style={{ color: '#BA8D5B', marginBottom: '8px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#192720' }}>
                2025 Catering &amp; Platter Guide
              </h3>
              <p style={{ fontSize: '13.5px', color: '#636C65' }}>
                Get our complete 24-page package catalog with full pricing, seasonal menus, and wine pairings.
              </p>
            </div>

            {pdfSuccess ? (
              <div style={{
                backgroundColor: '#EAF2ED',
                border: '1px solid #C4DEC9',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center'
              }}>
                <Check size={28} style={{ color: '#2F6141', margin: '0 auto 8px' }} />
                <h4 style={{ color: '#1E472D', fontSize: '16px', fontWeight: 700, marginBottom: '6px' }}>
                  Catalog Dispatched!
                </h4>
                <p style={{ fontSize: '13px', color: '#2F6141', lineHeight: 1.5 }}>
                  We have dispatched the 2025 Catering &amp; Platter Guide to <strong>{pdfEmail}</strong>.
                </p>
                <button
                  type="button"
                  className="btn-outline-subtle"
                  style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
                  onClick={() => setIsPdfModalOpen(false)}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleRequestPdf}>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label className="form-label" htmlFor="pdfEmail">Your Email Address</label>
                  <input 
                    type="email" 
                    id="pdfEmail"
                    className="form-control"
                    placeholder="name@company.com"
                    value={pdfEmail}
                    onChange={(e) => setPdfEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit-inquiry">
                  <span>Send PDF Menu Guide Immediately</span>
                  <Download size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* C: Book Private Consultation Modal */}
      {isConsultModalOpen && (
        <div className="modal-overlay" onClick={() => setIsConsultModalOpen(false)}>
          <div className="modal-content-box" onClick={e => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => setIsConsultModalOpen(false)}
            >
              <X size={18} />
            </button>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Utensils size={32} style={{ color: '#BA8D5B', marginBottom: '8px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#192720' }}>
                Private Chef Consultation
              </h3>
              <p style={{ fontSize: '13.5px', color: '#636C65' }}>
                Direct consultation with Executive Chef Michael Thomas at our Richmond Commissary Kitchen.
              </p>
            </div>

            <p style={{ fontSize: '13.5px', color: '#4D5650', lineHeight: 1.6, marginBottom: '18px' }}>
              We invite clients planning weddings over 50 guests or corporate events over 100 guests to sample seasonal courses, discuss dietary accommodations, and review styling mockups.
            </p>

            <button
              type="button"
              className="btn-primary-gold"
              style={{ width: '100%', justifyContent: 'center', marginBottom: '12px' }}
              onClick={() => {
                setIsConsultModalOpen(false);
                navigate('/inquiry');
              }}
            >
              Submit Consultation Request Form
            </button>

            <div style={{ textAlign: 'center', fontSize: '12px', color: '#79827B' }}>
              Or call our direct line: <a href="tel:6047224857" style={{ fontWeight: 700, color: '#192720' }}>604-722-4857</a>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="alert">
          <Sparkles size={16} style={{ color: '#BA8D5B' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
