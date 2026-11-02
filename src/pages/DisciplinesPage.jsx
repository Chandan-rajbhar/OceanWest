import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Award,
  Clock,
  Check,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Utensils
} from 'lucide-react';
import { IMAGES } from '../data/cateringData';

export default function DisciplinesPage({ setIsConsultModalOpen }) {
  return (
    <div className="disciplines-page">
      {/* ------------------------------------------------------------------ */}
      {/* PAGE BANNER                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="page-header-banner">
        <div className="ow-container">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Disciplines</span>
          </div>
          <span className="section-label">Catering Programs</span>
          <h1 className="page-banner-title">Tailored Service Disciplines</h1>
          <p className="page-banner-intro">
            From 800-guest waterfront galas to 14-hour high-velocity film locations across British Columbia, 
            Ocean West crafts customized dining programs engineered with passion, precision, and Michelin-trained rigor.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ALL 4 DETAILED SERVICE DISCIPLINES                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="ow-section">
        <div className="ow-container">
          <div className="disciplines-grid">
            {/* 1. Bespoke Wedding Feasts */}
            <div className="discipline-card">
              <div className="discipline-img-wrap">
                <img src={IMAGES.wedding} alt="Bespoke Wedding Feasts" />
                <span className="discipline-tag-badge">Weddings &amp; Receptions</span>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Bespoke Wedding Feasts</h3>
                <p className="discipline-desc">
                  Tailored to dietary requirements, multi-generational guest palettes, and personal style. 
                  Complemented with full bar coordination, sommelier pairings, and attentive white-glove table service.
                </p>

                <div className="discipline-features-sublist">
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>Cocktail hour passed canapés + bridal suite private platter</span>
                  </div>
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>Choice of 3 to 5-course plated dinner or luxury family-style banquet</span>
                  </div>
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>Late-night gourmet slider bar &amp; artisan taco stations</span>
                  </div>
                </div>

                <div className="discipline-footer">
                  <span className="discipline-meta-item">
                    <Users size={12} />
                    <span>25 to 500+ Guests</span>
                  </span>
                  <Link to="/packages" className="discipline-meta-link">
                    <span>Wedding Packages &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Film & Media Craft Services */}
            <div className="discipline-card">
              <div className="discipline-img-wrap">
                <img src={IMAGES.filmCraft} alt="Film & Media Craft Services" />
                <span className="discipline-tag-badge">Film &amp; Television Production</span>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Film &amp; Media Craft Services</h3>
                <p className="discipline-desc">
                  High-speed hot craft trucks, 24/7 mobile commercial kitchens, and continuous artisanal 
                  catering designed for demanding cast and crew schedules anywhere in British Columbia.
                </p>

                <div className="discipline-features-sublist">
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>24/7 rolling hot tables and continuous Italian espresso bar</span>
                  </div>
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>Individually labeled dietary packaging for 200+ cast &amp; crew</span>
                  </div>
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>IATSE 891, DGC BC, and Teamsters 155 compliant union standards</span>
                  </div>
                </div>

                <div className="discipline-footer">
                  <span className="discipline-meta-item">
                    <Clock size={12} />
                    <span>24/7 Hot Craft Trucks</span>
                  </span>
                  <Link to="/film-catering" className="discipline-meta-link">
                    <span>Film Catering Specs &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Galas & Executive Summits */}
            <div className="discipline-card">
              <div className="discipline-img-wrap">
                <img src={IMAGES.gala} alt="Galas & Executive Summits" />
                <span className="discipline-tag-badge">Corporate &amp; Galas</span>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Galas &amp; Executive Summits</h3>
                <p className="discipline-desc">
                  Flawless execution for high-stakes corporate conferences, award galas, premier brand launches, 
                  and diplomatic summits demanding discretion, precision timing, and culinary distinction.
                </p>

                <div className="discipline-features-sublist">
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>Simultaneous plated service for up to 1,200 delegates</span>
                  </div>
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>Bespoke branded cocktails and customized menu typography</span>
                  </div>
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>Executive VIP green room and board luncheon priority service</span>
                  </div>
                </div>

                <div className="discipline-footer">
                  <span className="discipline-meta-item">
                    <Users size={12} />
                    <span>Up to 1,200 Guests</span>
                  </span>
                  <Link to="/inquiry" className="discipline-meta-link">
                    <span>Corporate Proposal &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Party Platters & Casual BBQs */}
            <div className="discipline-card">
              <div className="discipline-img-wrap">
                <img src={IMAGES.platter} alt="Party Platters & BBQs" />
                <span className="discipline-tag-badge">Casual &amp; Private</span>
              </div>
              <div className="discipline-body">
                <h3 className="discipline-title">Party Platters &amp; BBQs</h3>
                <p className="discipline-desc">
                  Curated grazing boards, artisanal charcuterie platters, and casual wood-fired barbecues 
                  for intimate family milestones, summer vineyard parties, and corporate team mixers.
                </p>

                <div className="discipline-features-sublist">
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>Artisan BC cheeses, cured meats, and freshly baked sourdoughs</span>
                  </div>
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>White-glove delivery, styling, setup, or full live grilling chefs</span>
                  </div>
                  <div className="discipline-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>Eco-friendly bamboo compostable or luxury ceramic presentation</span>
                  </div>
                </div>

                <div className="discipline-footer">
                  <span className="discipline-meta-item">
                    <Clock size={12} />
                    <span>Drop-off &amp; Set Service</span>
                  </span>
                  <Link to="/courses" className="discipline-meta-link">
                    <span>Browse Platter Menus &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SERVICE STANDARDS & PRODUCTION CALLOUT                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="ow-section" style={{ backgroundColor: '#F6F3EC', borderTop: '1px solid #EAE4D9' }}>
        <div className="ow-container">
          <div className="courses-header-centered" style={{ marginBottom: '44px' }}>
            <span className="section-label">The Ocean West Standard</span>
            <h2 className="section-heading-serif">Uncompromising Culinary Discipline</h2>
            <p className="courses-intro">
              Every discipline is backed by strict food-safety protocols, Vancouver Coastal Health 100% kitchen audit scores,
              and sustainable local sourcing directly from British Columbia farmers and fisheries.
            </p>
          </div>

          <div className="hero-stats-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <div className="hero-stat-card">
              <span className="stat-metric">100% Audit Score</span>
              <span className="stat-desc">Vancouver Coastal Health Certified Commissary</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-metric">Dedicated Captain</span>
              <span className="stat-desc">Senior Event Lead on site for every occasion</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-metric">Zero Compromise</span>
              <span className="stat-desc">Segregated allergens &amp; strict dietary labeling</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-metric">Local Terroir</span>
              <span className="stat-desc">100% Pacific Northwest sustainable partners</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/inquiry" className="btn-primary-gold" style={{ display: 'inline-flex' }}>
              <span>Plan Your Event in This Discipline</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

