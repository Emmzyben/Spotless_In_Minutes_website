import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import CountUp from '../components/common/CountUp';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export default function About() {
  useScrollAnimations();

  return (
    <>
      <PageHeader title="About" breadcrumb="About" />

      {/* ===== ABOUT INTRO STRIP ===== */}
      <section className="intro-strip">
        <div className="container text-center">
          <span className="section-tag center">ABOUT US</span>
          <p className="intro-lead">
            Spotless In Minutes is committed to making services simpler and more convenient. <br />
            We believe a clean, well-maintained space makes everyday life better, and we're here to help make that possible.
          </p>
        </div>
      </section>

      {/* ===== ABOUT SECTION (3 COLUMNS) ===== */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-triad">
            {/* Col 1: Team Photo */}
            <div className="about-col-team">
              <img
                src="/images/about-team.png"
                alt="Spotless in Minutes Dedicated Team"
                className="about-team-img"
              />
            </div>

            {/* Col 2: Mission & Vision */}
            <div className="about-col-values">
              <div className="value-card">
                <h3>Our mission</h3>
                <p>
                  To deliver dependable repair, renovation and construction solutions that help our customers maintain,
                  improve and transform their spaces.
                </p>
              </div>
              <div className="value-card">
                <h3>Our vision</h3>
                <p>
                  To be a trusted partner for residential and commercial projects, International procurement, logistics, and
                  mitigation. Recognised for thoughtful workmanship, practical solutions and a commitment to quality.
                </p>
              </div>
            </div>

            {/* Col 3: Solo Photo */}
            <div className="about-col-founder">
              <div className="founder-img-wrapper">
                <img
                  src="/images/about-pointing.png"
                  alt="Discover Spotless"
                  className="founder-img"
                />
              </div>
              <div className="discover-box">
                <h4>
                  Discover the story behind<br />Spotless today
                </h4>
                <a href="#leadership" className="btn-yellow-sm">
                  Leadership Story →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-num">
                <CountUp end={14} duration={1800} />
                <span className="stat-plus">+</span>
              </h3>
              <p>Years of experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-num">
                <CountUp end={3.9} decimals={1} duration={2000} />
                <span className="stat-plus">K+</span>
              </h3>
              <p>Projects Handled</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-num">
                <CountUp end={99} duration={2000} />
                <span className="stat-plus">%</span>
              </h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-num">
                <CountUp end={33} duration={2200} />
                <span className="stat-plus">K+</span>
              </h3>
              <p>Project Hours Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUNDER & LEADERSHIP STORY SECTION ===== */}
      <section className="founder-section" id="leadership">
        <div className="container">
          <div className="founder-card">
            <div className="founder-photo-col">
              <div className="founder-img-container">
                <img
                  src="/images/founder-ceo.png"
                  alt="President and CEO, Spotless in Minutes"
                  className="founder-main-img"
                />
                <div className="founder-exp-badge">
                  <strong>20+</strong>
                  <span>Years of oil and gas industry experience</span>
                </div>
              </div>
            </div>

            <div className="founder-story-col">
              <span className="banner-tag">FOUNDATION &amp; LEADERSHIP</span>
              <h2>Every project deserves the right foundation.</h2>
              <p className="founder-sub">
                Every project needs the right team, the right tools, the right price, the right time, the right plan, and
                ultimately, the right client.
              </p>

              <div className="founder-checks-grid">
                <div className="founder-check-item">
                  <span className="check-icon-green">✔</span>
                  <span>The right team</span>
                </div>
                <div className="founder-check-item">
                  <span className="check-icon-green">✔</span>
                  <span>The right tools</span>
                </div>
                <div className="founder-check-item">
                  <span className="check-icon-green">✔</span>
                  <span>The right price</span>
                </div>
                <div className="founder-check-item">
                  <span className="check-icon-green">✔</span>
                  <span>The right time</span>
                </div>
                <div className="founder-check-item">
                  <span className="check-icon-green">✔</span>
                  <span>The right plan</span>
                </div>
                <div className="founder-check-item">
                  <span className="check-icon-green">✔</span>
                  <span>The right client</span>
                </div>
              </div>

              <div className="founder-paragraphs">
                <p>
                  More than 20 years as a chemical engineer in the oil and gas industry has taught me never to compromise on
                  any of these essentials. When the right elements are in place, projects move forward safely, efficiently,
                  and with confidence.
                </p>
                <p>
                  We know our standard of professionalism will not be the right fit for everyone, and we are comfortable
                  with that. Our doors are open, our trucks are ready, and our team is equipped for clients who value doing
                  things properly.
                </p>
                <p>
                  If that sounds like you, give us a call today. We would be proud to work alongside you on the right project.
                </p>
              </div>

              <div className="founder-signature-block">
                <div className="sig-title">CEO</div>
                <div>Spotless in Minutes</div>
                <p className="sig-company">Chemical Engineer &amp; Industry Professional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEPENDABLE PARTNER FOR DIFFERENT PROJECT NEEDS ===== */}
      <section className="partner-section">
        <div className="container">
          <div className="partner-card">
            <div className="partner-img-col">
              <img
                src="/images/banner-woman.png"
                alt="Dependable Partner Service Technician"
                className="partner-img"
              />
            </div>

            <div className="partner-content-col">
              <span className="banner-tag">Choose us today</span>
              <h2>A dependable partner for different project needs</h2>
              <p className="partner-sub">
                From property repairs to logistics and specialist tool sourcing, we help clients move projects forward with
                clear communication.
              </p>

              <div className="partner-features-list">
                <div className="partner-feature-row">
                  <div className="feat-icon-yellow-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <div className="feat-row-text">
                    <h3>Residential expertise</h3>
                    <p>Support for repairs, renovations, plumbing, electrical, HVAC and property improvement needs.</p>
                  </div>
                </div>

                <div className="partner-feature-row">
                  <div className="feat-icon-yellow-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                  </div>
                  <div className="feat-row-text">
                    <h3>Logistics coordination</h3>
                    <p>Logistics support to help coordinate the movement of goods and project requirements. Confirm specific routes and capabilities with our team.</p>
                  </div>
                </div>

                <div className="partner-feature-row">
                  <div className="feat-icon-yellow-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </div>
                  <div className="feat-row-text">
                    <h3>Oil &amp; gas tool procurement</h3>
                    <p>Procurement support for oil and gas tools and related equipment, based on your specifications and project requirements.</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="btn-yellow partner-btn">
                Discuss your project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT / DISCUSS SECTION ===== */}
      <section className="discuss-section" id="contact">
        <div className="container">
          <div className="discuss-grid">
            <ContactForm isDarkCard={true} />

            <div className="discuss-info-col">
              <span className="section-tag">BOOK APPOINTMENT</span>
              <h2>
                Let's discuss your<br />next project
              </h2>
              <p className="discuss-desc">
                Tell us whether you need residential work, logistics support, or oil and gas tool
                procurement, and our team can follow up.
              </p>

              <div className="discuss-checklist">
                <div className="check-item">
                  <span className="check-icon">✔</span>
                  <span>Satisfaction guaranteed</span>
                </div>
                <div className="check-item">
                  <span className="check-icon">✔</span>
                  <span>Trusted Professionals</span>
                </div>
                <div className="check-item">
                  <span className="check-icon">✔</span>
                  <span>Affordable pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
