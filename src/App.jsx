import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Calendar,
  Users,
  Check,
  ChevronRight,
  Download,
  Star,
  Menu as MenuIcon,
  X,
  User,
  Sparkles,
  Utensils,
  ArrowRight,
  FileText
} from 'lucide-react';
import './App.css';

import heroPearAi from './assets/hero-pear-ai.jpg';
import heroSalmonAi from './assets/hero-salmon-ai.jpg';
import heroBeefAi from './assets/hero-beef-ai.jpg';
import heroTacosAi from './assets/hero-tacos-ai.jpg';
import heroHalibutAi from './assets/hero-halibut-ai.jpg';

// 5 Curated authentic AI-generated Michelin-star dishes perfectly proportioned to fill the hero card
const HERO_SLIDES = [
  {
    id: 1,
    image: heroPearAi,
    title: "Bosc Pear with Gorgonzola & Thyme-Infused Honey",
    course: "Executive Chef's Signature First Course • Pacific Northwest Harvest",
    alt: "Roasted Bosc Pear with Gorgonzola, Candied Walnuts, and Thyme-Infused Honey"
  },
  {
    id: 2,
    image: heroSalmonAi,
    title: "Wild Pacific Salmon with Citrus Herb Glaze",
    course: "Artisanal Main • Haida Gwaii Wild Catch & Fine Herbs",
    alt: "Pan-Seared Wild Pacific Salmon with Citrus Glaze and Braised Asparagus"
  },
  {
    id: 3,
    image: heroBeefAi,
    title: "Prime Angus Beef Medallions & Truffle Demi",
    course: "Artisanal Main • Slow-Roasted Alberta AAA Tenderloin",
    alt: "Prime Angus Beef Tenderloin Medallion with Black Garlic and Truffle Demi-Glace"
  },
  {
    id: 4,
    image: heroTacosAi,
    title: "Pacific Coast Street Canapés & Artisan Tacos",
    course: "Passed Cocktail Canapés • Late-Night Feature",
    alt: "Artisan Spot Prawn Tacos and Fresh Mango Salsa Canapés"
  },
  {
    id: 5,
    image: heroHalibutAi,
    title: "Pan-Seared Pacific Halibut & Golden Glaze",
    course: "Chef's Feature • Wild Harvest British Columbia",
    alt: "Pan-Seared Pacific Halibut with Saffron Citrus Glaze and Summer Vegetables"
  }
];

// Curated high quality authentic imagery matching the screenshot design
const IMAGES = {
  wedding: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80", // Outdoor long wedding dining table
  filmCraft: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80", // Film craft catering buffet
  gala: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80", // Gala / executive reception
  platter: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80" // Artisanal charcuterie & grazing
};

// Menu courses database
const MENU_COURSES = [
  {
    id: 1,
    title: "Roasted Anjou Pear with Gorgonzola",
    category: "starters",
    badges: [
      { text: "VEGETARIAN", type: "green" },
      { text: "HAIDA GWAII ORIGIN", type: "tan" }
    ],
    description: "Poached pear roasted in local lavender honey and Okanagan red wine reduction, served with whipped gorgonzola cream, candied pecans, and watercress.",
    serviceStyle: "Plated Dinner & Buffet"
  },
  {
    id: 2,
    title: "Wild Pacific Salmon with Citrus Herb Glaze",
    category: "mains",
    badges: [
      { text: "PACIFIC OCEAN SEAFOOD", type: "blue" },
      { text: "GLUTEN-FREE", type: "green" }
    ],
    description: "Pan-seared wild BC salmon glazed with blood orange and tarragon reduction, over parsnip purée with butter-braised asparagus.",
    serviceStyle: "Plated Dinner & Buffet"
  },
  {
    id: 3,
    title: "Prime Angus Beef Medallions & Truffle Demi",
    category: "mains",
    badges: [
      { text: "ALBERTA AAA BEEF", type: "tan" },
      { text: "GLUTEN-FREE", type: "green" }
    ],
    description: "Slow-roasted tenderloin with black garlic crust, served over pomme purée with morel mushroom sauce and roasted heritage carrots.",
    serviceStyle: "Plated Dinner Course"
  },
  {
    id: 4,
    title: "Pacific Coast Artisanal Grazing Board",
    category: "grazing",
    badges: [
      { text: "GRAZING TABLE", type: "tan" },
      { text: "VEGETARIAN & CHARCUTERIE OPTIONS", type: "green" }
    ],
    description: "Smoked trout mousse, Salt Spring Island goat cheese, cured salumi, pickled samphire, Vancouver Island honeycomb, and organic artisan breads.",
    serviceStyle: "Grazing Table / Platter"
  },
  {
    id: 5,
    title: "Charred Spot Prawn & Mango Skewers",
    category: "canapes",
    badges: [
      { text: "CANAPÉS", type: "blue" },
      { text: "LOCALLY CAUGHT SPOT PRAWN", type: "tan" }
    ],
    description: "Spot prawns glazed with kaffir lime, chili, and cilantro reduction, served with sweet mango salsa and coconut cream dipping sauce.",
    serviceStyle: "Passed Cocktail Canapé"
  },
  {
    id: 6,
    title: "Caramelized Tahitian Vanilla Bean Brûlée",
    category: "desserts",
    badges: [
      { text: "PLATED DESSERT", type: "tan" },
      { text: "VEGETARIAN", type: "green" }
    ],
    description: "Silky Madagascar custard infused with Tahitian vanilla bean, topped with a crackling caramel shell, served with Cowichan Bay wild blackberries.",
    serviceStyle: "Individual Dessert / Platter"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  // Automated Hero Showcase state (purely automated, no manual controls)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically cycle through dishes one by one with smooth cinematic animation
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
    category: 'Wedding Banquet Feast',
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

  // Filter courses based on activeTab
  const filteredCourses = activeTab === 'all' 
    ? MENU_COURSES 
    : MENU_COURSES.filter(course => {
        if (activeTab === 'starters') return course.category === 'starters';
        if (activeTab === 'mains') return course.category === 'mains';
        if (activeTab === 'canapes') return course.category === 'canapes';
        if (activeTab === 'grazing') return course.category === 'grazing' || course.category === 'desserts';
        return true;
      });

  return (
    <div className="oceanwest-app">
      {/* ------------------------------------------------------------------ */}
      {/* 1. TOP NOTICE BAR                                                  */}
      {/* ------------------------------------------------------------------ */}
      <aside className="top-notice-bar" aria-label="Announcement & Contact Bar">
        <div className="ow-container ow-container-wide">
          <div className="top-notice-content">
            <div className="top-notice-left">
              <span>British Columbia Catering Supply</span>
              <span>•</span>
              <span>All Events & Locations</span>
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
      {/* 2. MAIN NAVIGATION (STICKY ON ALL SCREENS)                         */}
      {/* ------------------------------------------------------------------ */}
      <header className={`main-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="ow-container ow-container-wide">
          <div className="main-nav-inner">
            {/* Logo */}
            <a href="#hero" className="brand-logo-wrap">
              <div className="brand-icon">
                <Utensils size={18} strokeWidth={2.2} />
              </div>
              <div className="brand-text-block">
                <span className="brand-title">Ocean West</span>
                <span className="brand-subtitle">Fine Catering & Services</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="nav-links-desktop">
              <a href="#hero" className="nav-link active">Home</a>
              <a href="#disciplines" className="nav-link">Disciplines</a>
              <a href="#courses" className="nav-link">Courses & Delicacies</a>
              <a href="#packages" className="nav-link">Event Packages</a>
              <a href="#film-catering" className="nav-link">Film & Media Catering</a>
              <a href="#inquiry" className="nav-link">Direct Inquiries</a>
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

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <a href="#hero" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#disciplines" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Disciplines</a>
            <a href="#courses" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Courses & Delicacies</a>
            <a href="#packages" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Event Packages</a>
            <a href="#film-catering" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Film & Media Catering</a>
            <a href="#inquiry" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Direct Inquiries</a>
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
      {/* 3. HERO SECTION                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section id="hero" className="hero-section">
        <div className="ow-container">
          <div className="hero-grid">
            {/* Left Content Column */}
            <div className="hero-content-col">
              <div className="hero-chef-pill">
                <Sparkles size={13} style={{ color: '#BA8D5B' }} />
                <span>Executive Chef Michael Thomas • Pacific Coast Commissary</span>
              </div>

              <h1 className="hero-title">
                Artisanal Catering &amp; <br />
                <em>Unforgettable</em> Culinary <br />
                Experiences
              </h1>

              <p className="hero-description">
                From intimate waterfront gatherings to prime film &amp; TV productions, Ocean West crafts
                fine Pacific Northwest fare with refined seasonal ingredients. Chef Michael brings twenty
                years of culinary expertise, delivering bespoke wedding banquets, certified high-velocity
                film &amp; media craft, corporate galled events, and curated party platters.
              </p>

              <div className="hero-cta-group">
                <button 
                  type="button" 
                  className="btn-primary-gold"
                  onClick={() => setIsAvailabilityModalOpen(true)}
                >
                  <span>Check Date Availability</span>
                  <ArrowRight size={15} />
                </button>

                <a href="#courses" className="btn-outline-subtle">
                  <span>Explore Menu Collections</span>
                  <ChevronRight size={15} />
                </a>
              </div>

              {/* 4 Stats Cards */}
              <div className="hero-stats-row">
                <div className="hero-stat-card">
                  <span className="stat-metric">20+ Years</span>
                  <span className="stat-desc">Executive Chef Michael Thomas</span>
                </div>
                <div className="hero-stat-card">
                  <span className="stat-metric">A-List Film &amp; TV</span>
                  <span className="stat-desc">Minimum 200 Location Shoots</span>
                </div>
                <div className="hero-stat-card">
                  <span className="stat-metric">BC Pacific NW</span>
                  <span className="stat-desc">Sustainably Harvested Local Ingredients</span>
                </div>
                <div className="hero-stat-card">
                  <span className="stat-metric">Custom Menus</span>
                  <span className="stat-desc">Allergies, Dietary, &amp; Halal/Kosher</span>
                </div>
              </div>
            </div>

            {/* Right Hero Culinary Auto-Showcase */}
            <div className="hero-visual-wrap">
              <div className="hero-img-container carousel-container">
                {HERO_SLIDES.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    aria-hidden={index !== currentSlide}
                  >
                    {/* Full card-fitting Michelin culinary dish image */}
                    <img 
                      src={slide.image} 
                      alt={slide.alt} 
                      className="carousel-dish-img"
                    />
                    <div className="hero-dish-overlay">
                      <div className="hero-dish-title">{slide.title}</div>
                      <div className="hero-dish-course">{slide.course}</div>
                    </div>
                  </div>
                ))}

                {/* Subtle Luxury Animated Progress Line (purely visual) */}
                <div className="carousel-progress-track">
                  <div 
                    key={currentSlide} 
                    className="carousel-progress-bar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. SECTION: TAILORED SERVICE DISCIPLINES                           */}
      {/* ------------------------------------------------------------------ */}
      <section id="disciplines" className="ow-section disciplines-section">
        <div className="ow-container">
          <div className="section-header-split">
            <div>
              <span className="section-label">Catering Programs</span>
              <h2 className="section-heading-serif">Tailored Service Disciplines</h2>
            </div>
            <p className="section-header-narrative">
              Whether servicing 800-guest galas or filming 14-hour days on location in Vancouver, 
              Ocean West crafts customized dishes with passion &amp; precision.
            </p>
          </div>

          <div className="disciplines-grid">
            {/* Card 1: Weddings */}
            <div className="discipline-card">
              <div className="discipline-img-wrap">
                <img src={IMAGES.wedding} alt="Bespoke Wedding Feasts" />
                <span className="discipline-tag-badge">Weddings &amp; Receptions</span>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Bespoke Wedding Feasts</h3>
                <p className="discipline-desc">
                  Tailored to requirements, dietary requirements, and personal guest preferences, complimented with full bar and server staffing.
                </p>
                <div className="discipline-footer">
                  <span className="discipline-meta-item">
                    <Users size={12} />
                    <span>25 to 500+ Guests</span>
                  </span>
                  <span className="discipline-meta-item">
                    <Award size={12} />
                    <span>Full Service</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Film & Media */}
            <div id="film-catering" className="discipline-card">
              <div className="discipline-img-wrap">
                <img src={IMAGES.filmCraft} alt="Film & Media Craft Services" />
                <span className="discipline-tag-badge">Film &amp; Television Production</span>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Film &amp; Media Craft Services</h3>
                <p className="discipline-desc">
                  High-speed and hot craft trucks, 24/7 mobile kitchens, and continuous craft services for filming crews anywhere across BC.
                </p>
                <div className="discipline-footer">
                  <span className="discipline-meta-item">
                    <Clock size={12} />
                    <span>24/7 Hot Craft Trucks</span>
                  </span>
                  <span className="discipline-meta-item">
                    <Award size={12} />
                    <span>Mobile Unit</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Galas & Summits */}
            <div className="discipline-card">
              <div className="discipline-img-wrap">
                <img src={IMAGES.gala} alt="Galas & Executive Summits" />
                <span className="discipline-tag-badge">Corporate &amp; Galas</span>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Galas &amp; Executive Summits</h3>
                <p className="discipline-desc">
                  Flawless execution for high-stakes corporate functions, client receptions, board luncheons, and celebration dinners.
                </p>
                <div className="discipline-footer">
                  <span className="discipline-meta-item">
                    <Users size={12} />
                    <span>Up to 1,200 Guests</span>
                  </span>
                  <span className="discipline-meta-item">
                    <Award size={12} />
                    <span>Bespoke Menus</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4: Party Platters & BBQs */}
            <div className="discipline-card">
              <div className="discipline-img-wrap">
                <img src={IMAGES.platter} alt="Party Platters & BBQs" />
                <span className="discipline-tag-badge">Casual &amp; Private</span>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Party Platters &amp; BBQs</h3>
                <p className="discipline-desc">
                  Curated grazing boards, artisanal platters, and casual barbecues for family events, corporate mixers, and relaxed gatherings.
                </p>
                <div className="discipline-footer">
                  <span className="discipline-meta-item">
                    <Clock size={12} />
                    <span>Drop-off &amp; Set Service</span>
                  </span>
                  <span className="discipline-meta-item">
                    <Users size={12} />
                    <span>From 15 Guests</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. SECTION: SIGNATURE COURSES & DELICACIES                         */}
      {/* ------------------------------------------------------------------ */}
      <section id="courses" className="ow-section courses-section">
        <div className="ow-container">
          <div className="courses-header-centered">
            <span className="section-label">Culinary Repertoire</span>
            <h2 className="section-heading-serif">Signature Courses &amp; Delicacies</h2>
            <p className="courses-intro">
              Chef Michael harvests from traditional Haida Gwaii halibut, Langley farm duck eggs, and Cowichan Bay berries,
              honouring seasonal bounty from British Columbia's producers.
            </p>
          </div>

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
                    title="Inquire about this dish"
                    onClick={() => {
                      setFormData(prev => ({
                        ...prev,
                        notes: `Interested in including: ${course.title}\n` + prev.notes
                      }));
                      const formElem = document.getElementById('inquiry');
                      if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                      showToast(`Added "${course.title}" to your inquiry notes!`);
                    }}
                    style={{ color: '#BA8D5B' }}
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Download Guide Banner Callout */}
          <div className="menu-guide-banner">
            <div className="banner-left">
              <div className="banner-icon-box">
                <FileText size={22} />
              </div>
              <div>
                <h4 className="banner-title">Download Complete 2025 Catering &amp; Platter Guide</h4>
                <p className="banner-subtitle">
                  Includes complete menu pricing, allergen declarations, and seasonal package selections.
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
      {/* 6. SECTION: EVENT PROGRAMS DESIGNED AROUND YOUR GUESTS             */}
      {/* ------------------------------------------------------------------ */}
      <section id="packages" className="ow-section packages-section">
        <div className="ow-container">
          <div className="courses-header-centered" style={{ marginBottom: '44px' }}>
            <span className="section-label">Package Selections</span>
            <h2 className="section-heading-serif">Event Programs Designed Around Your Guests</h2>
            <p className="courses-intro">
              Ocean West Catering provides full setup, professional staff, china, bar coordination, 
              aesthetic styling, coordination, and dietary adaptation.
            </p>
          </div>

          <div className="packages-grid">
            {/* Card 1: The Intimate Gathering */}
            <div className="package-card">
              <div className="package-meta-header">
                <span>Casual to Formal</span>
                <span className="package-rate">From $85/Guest</span>
              </div>
              <h3 className="package-title">The Intimate Gathering</h3>
              <p className="package-desc">
                Ideal for small celebration dinners, micro-weddings, corporate retreats, and cocktail evenings.
              </p>
              <ul className="package-features-list">
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Choice of 3-course plated dinner or 5 passed canapés</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Dedicated executive chef and 1 service staff</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Coordination of rental dinnerware &amp; glassware</span>
                </li>
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Dietary substitutions (vegan, GF) included</span>
                </li>
              </ul>
              <div className="package-footer-block">
                <div className="package-capacity-pill">Minimum 12–35 Guests</div>
                <button 
                  type="button" 
                  className="btn-package-action"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, category: 'The Intimate Gathering', guestCount: '25' }));
                    const el = document.getElementById('inquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Select Intimate Gathering
                </button>
              </div>
            </div>

            {/* Card 2: The Grand Wedding Banquet (Most Requested) */}
            <div className="package-card highlighted">
              <div className="most-requested-badge">Most Requested</div>
              <div className="package-meta-header">
                <span>Wedding &amp; Gala</span>
                <span className="package-rate">From $140/Guest</span>
              </div>
              <h3 className="package-title">The Grand Wedding Banquet</h3>
              <p className="package-desc">
                Our signature wedding dining experience. From bridal party arrivals to late-night bites, crafted for an unforgettable night.
              </p>
              <ul className="package-features-list">
                <li className="package-feature-item">
                  <span className="check-icon-wrap"><Check size={11} strokeWidth={3} /></span>
                  <span>Full 4-course artisanal plated or luxury buffet</span>
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
                  onClick={() => {
                    setFormData(prev => ({ ...prev, category: 'The Grand Wedding Banquet', guestCount: '150' }));
                    const el = document.getElementById('inquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Wedding Consultation
                </button>
              </div>
            </div>

            {/* Card 3: Movie & Film Production */}
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
                  onClick={() => {
                    setFormData(prev => ({ ...prev, category: 'Movie & Film Production', guestCount: '120' }));
                    const el = document.getElementById('inquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request Production Sheet
                </button>
              </div>
            </div>
          </div>

          {/* Guarantee banner */}
          <div className="guarantee-notice-bar">
            <div className="guarantee-icon">
              <ShieldCheck size={16} />
            </div>
            <p className="guarantee-text">
              <strong>Booking Guarantee &amp; Date Protection:</strong> Ocean West Catering guarantees 100% date protection once deposit is secured. 
              In our commitment to culinary excellence and impeccable service, we accept a <strong>strictly limited number of bookings per weekend</strong> to preserve quality.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 7. SECTION: VOICES FROM BRITISH COLUMBIA (TESTIMONIALS)            */}
      {/* ------------------------------------------------------------------ */}
      <section className="ow-section testimonials-section">
        <div className="ow-container">
          <div className="courses-header-centered" style={{ marginBottom: '40px' }}>
            <span className="section-label">Testimonials &amp; Client Experiences</span>
            <h2 className="section-heading-serif">Voices from British Columbia</h2>
          </div>

          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#C89B6D" stroke="#C89B6D" />
                ))}
              </div>
              <p className="testimonial-quote">
                "Chef Michael was a marvel for our 185-guest wedding banquet in South Surrey. The braised beef and wild salmon were talk of dinner for months. The entire team was gracious, impeccably organized, and ridiculously stress-free."
              </p>
              <div className="testimonial-author-box">
                <div className="author-name">Claire &amp; Marcus Tremblay</div>
                <div className="author-role">Wedding Clients • South Surrey, BC</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#C89B6D" stroke="#C89B6D" />
                ))}
              </div>
              <p className="testimonial-quote">
                "On a 22-day film shoot in Squamish and North Vancouver, Ocean West Catering kept 140 cast and crew energized, happy, and well-fed. Dietary needs were 100% verified. A triumph of precision. Outstanding team."
              </p>
              <div className="testimonial-author-box">
                <div className="author-name">Dave Henderson</div>
                <div className="author-role">Production Manager • Paramount Pictures / Vancouver Film Studios</div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#C89B6D" stroke="#C89B6D" />
                ))}
              </div>
              <p className="testimonial-quote">
                "Our annual corporate gala in Richmond required both strict gluten-free accommodation and fine dining execution. Ocean West delivered seamlessly. The presentation was breathtaking and the service was pristine."
              </p>
              <div className="testimonial-author-box">
                <div className="author-name">Sarah Liu</div>
                <div className="author-role">Executive Director • Pacific Rim Tech Summit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 8. SECTION: PLAN YOUR NEXT CULINARY EXPERIENCE (FORM & CONTACT)    */}
      {/* ------------------------------------------------------------------ */}
      <section id="inquiry" className="ow-section inquiry-section">
        <div className="ow-container">
          <div className="inquiry-grid">
            {/* Left Contact & Info Column */}
            <div className="inquiry-left-info">
              <span className="section-label">Inquire &amp; Reserve</span>
              <h2 className="inquiry-title">Plan Your Next Culinary Experience</h2>
              <p className="inquiry-lead">
                Chef Michael Thomas provides direct consultations. Submit your event specifications to receive
                our custom proposal within 24 hours of availability check.
              </p>

              <div className="contact-cards-stack">
                {/* Direct Line */}
                <div className="contact-card-item">
                  <div className="contact-card-icon">
                    <Phone size={15} />
                  </div>
                  <div>
                    <div className="contact-card-label">Direct Chef Line</div>
                    <a href="tel:6047224857" className="contact-card-value">604-722-4857</a>
                    <div className="contact-card-sub">Available for urgent inquiries &amp; event dates</div>
                  </div>
                </div>

                {/* Office Line */}
                <div className="contact-card-item">
                  <div className="contact-card-icon">
                    <Clock size={15} />
                  </div>
                  <div>
                    <div className="contact-card-label">Commissary Kitchen Office</div>
                    <a href="tel:6044564481" className="contact-card-value">604-456-4481</a>
                    <div className="contact-card-sub">Monday–Friday 8:00 AM – 6:00 PM PST</div>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-card-item">
                  <div className="contact-card-icon">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <div className="contact-card-label">Commissary Location</div>
                    <div className="contact-card-value" style={{ fontSize: '14px' }}>482 Panorama, Richmond, BC V6X 0E7</div>
                    <div className="contact-card-sub">Tastings and consultations by appointment</div>
                  </div>
                </div>
              </div>

              {/* Health permit certification */}
              <div className="health-permit-badge">
                <ShieldCheck size={16} className="health-permit-icon" />
                <span><strong>BC Health Certified &amp; Fully Insured:</strong> Commercial Kitchen Permit &amp; Comprehensive Event Liability Insurance</span>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="inquiry-form-card">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#EAF2ED',
                    color: '#2F6141',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px'
                  }}>
                    <Check size={28} strokeWidth={2.5} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: '#192720', marginBottom: '8px' }}>
                    Inquiry Received
                  </h3>
                  <p style={{ fontSize: '14px', color: '#636C65', lineHeight: 1.6, marginBottom: '20px' }}>
                    Thank you, <strong>{formData.fullName}</strong>. Executive Chef Michael Thomas has received your event details for <strong>{formData.category}</strong>. You will receive a bespoke catering proposal at <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button 
                    type="button" 
                    className="btn-outline-subtle"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-grid-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullName">Full Name *</label>
                      <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        className="form-control" 
                        placeholder="e.g. Lauren Miller" 
                        value={formData.fullName}
                        onChange={handleFormChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        className="form-control" 
                        placeholder="lauren@example.com" 
                        value={formData.email}
                        onChange={handleFormChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-grid-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone / Mobile *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        className="form-control" 
                        placeholder="604-000-0000" 
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="category">Select Event Category</label>
                      <select 
                        id="category"
                        name="category"
                        className="form-control"
                        value={formData.category}
                        onChange={handleFormChange}
                      >
                        <option value="The Grand Wedding Banquet">Wedding Feast &amp; Reception</option>
                        <option value="Movie & Film Production">Film &amp; TV Craft Services</option>
                        <option value="Galas & Executive Summits">Corporate Gala &amp; Executive Summit</option>
                        <option value="The Intimate Gathering">Intimate Celebration &amp; Micro-Wedding</option>
                        <option value="Party Platters & Casual BBQ">Party Platters &amp; Casual BBQ</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="eventDate">Event Date</label>
                      <input 
                        type="date" 
                        id="eventDate"
                        name="eventDate"
                        className="form-control" 
                        value={formData.eventDate}
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="guestCount">Expected Guest Count</label>
                      <input 
                        type="number" 
                        id="guestCount"
                        name="guestCount"
                        className="form-control" 
                        placeholder="e.g. 120" 
                        value={formData.guestCount}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="location">Primary Location</label>
                    <input 
                      type="text" 
                      id="location"
                      name="location"
                      className="form-control" 
                      placeholder="e.g. Richmond, North Vancouver, Squamish, Tsawwassen" 
                      value={formData.location}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="notes">Dietary &amp; Menu Preferences</label>
                    <textarea 
                      id="notes"
                      name="notes"
                      className="form-control" 
                      rows={3} 
                      placeholder="Describe your event vision, any dietary restrictions (Vegan, GF, Halal, Kosher), and culinary questions..."
                      value={formData.notes}
                      onChange={handleFormChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit-inquiry">
                    <span>Submit Inquiry to Executive Chef Michael Thomas</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 9. LUXURY FOOTER                                                   */}
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

            {/* Column 2: Culinary Programs */}
            <div>
              <h4 className="footer-col-title">Culinary Programs</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item"><a href="#packages">Wedding Receptions</a></li>
                <li className="footer-link-item"><a href="#film-catering">Film &amp; Production Catering</a></li>
                <li className="footer-link-item"><a href="#disciplines">Corporate Galas</a></li>
                <li className="footer-link-item"><a href="#disciplines">Party Platters &amp; Canapés</a></li>
                <li className="footer-link-item"><a href="#courses">First Courses &amp; Plated Dinners</a></li>
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
              <button 
                type="button" 
                className="btn-footer-consult"
                onClick={() => setIsConsultModalOpen(true)}
              >
                Book Private Consultation
              </button>
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
      {/* 10. MODALS & DIALOGS                                               */}
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
                    const el = document.getElementById('inquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
                const el = document.getElementById('inquiry');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
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
