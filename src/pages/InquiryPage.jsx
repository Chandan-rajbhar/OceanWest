import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  Check,
  ArrowRight,
  Mail,
  Sparkles
} from 'lucide-react';

export default function InquiryPage({
  formData,
  setFormData,
  formSubmitted,
  setFormSubmitted,
  handleFormChange,
  handleFormSubmit
}) {
  return (
    <div className="inquiry-page">
      {/* ------------------------------------------------------------------ */}
      {/* PAGE BANNER                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="page-header-banner">
        <div className="ow-container">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Direct Inquiries</span>
          </div>
          <span className="section-label">Inquire &amp; Reserve</span>
          <h1 className="page-banner-title">Plan Your Next Culinary Experience</h1>
          <p className="page-banner-intro">
            Executive Chef Michael Thomas provides direct consultations for all private and production clients. 
            Submit your specifications below to receive a bespoke catering proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FORM & COMMISSARY CONTACT GRID                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="ow-section inquiry-section">
        <div className="ow-container">
          <div className="inquiry-grid">
            {/* Left Contact & Info Column */}
            <div className="inquiry-left-info">
              <span className="section-label">Commissary Headquarters</span>
              <h2 className="inquiry-title">Direct Culinary Access</h2>
              <p className="inquiry-lead">
                Whether you are finalizing wedding dates, booking location shoots, or coordinating corporate banquets, 
                our executive team is available directly.
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
                    <div className="contact-card-sub">Available for urgent inquiries &amp; date holds</div>
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

                {/* Email */}
                <div className="contact-card-item">
                  <div className="contact-card-icon">
                    <Mail size={15} />
                  </div>
                  <div>
                    <div className="contact-card-label">Official Email</div>
                    <a href="mailto:info@oceanwestcatering.com" className="contact-card-value">info@oceanwestcatering.com</a>
                    <div className="contact-card-sub">24-hour turnaround on formal RFPs</div>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-card-item">
                  <div className="contact-card-icon">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <div className="contact-card-label">Commissary Facility</div>
                    <div className="contact-card-value" style={{ fontSize: '14px' }}>482 Panorama, Richmond, BC V6X 0E7</div>
                    <div className="contact-card-sub">Tastings and consultations by appointment</div>
                  </div>
                </div>
              </div>

              {/* Health permit certification */}
              <div className="health-permit-badge">
                <ShieldCheck size={16} className="health-permit-icon" />
                <span><strong>BC Health Certified &amp; Fully Insured:</strong> Commercial Kitchen Permit &amp; Comprehensive Event Liability Coverage</span>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="inquiry-form-card">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#EAF2ED',
                    color: '#2F6141',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}>
                    <Check size={32} strokeWidth={2.5} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#192720', marginBottom: '10px' }}>
                    Inquiry Received
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#636C65', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thank you, <strong>{formData.fullName}</strong>. Executive Chef Michael Thomas has received your event details for <strong>{formData.category}</strong>. You will receive a bespoke catering proposal at <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button 
                    type="button" 
                    className="btn-outline-subtle"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Submit Another Inquiry
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
                      <label className="form-label" htmlFor="eventDate">Target Event Date</label>
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
                    <label className="form-label" htmlFor="location">Primary Event Location</label>
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
                      rows={4} 
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
    </div>
  );
}

