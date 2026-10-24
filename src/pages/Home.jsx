import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/contact/ContactForm';
import CountUp from '../components/common/CountUp';
import Typewriter from '../components/common/Typewriter';
import SEO from '../components/common/SEO';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export default function Home() {
  const [isPulsing, setIsPulsing] = useState(false);
  useScrollAnimations();

  return (
    <>
      <SEO
        title="Spotless in Minutes – Dependable Home & Business Cleaning"
        description="Spotless In Minutes is your dependable partner for residential projects, logistics coordination, and oil & gas tool procurement in Houston, TX."
        canonical="https://www.spotlessinminutes.com/"
      />

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <img
          src="/images/hero.png"
          alt="Spotless in Minutes Professional Contractor"
          className="hero-bg"
        />
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-heading">
              <Typewriter
                text="Spotless In Minutes."
                speed={90}
                deleteSpeed={45}
                pauseDelay={2500}
                loop={true}
                onComplete={setIsPulsing}
              />
              <br /> A{' '}
              <span className={`hero-accent ${isPulsing ? 'hero-pulse' : ''}`}>
                dependable
              </span>{' '}
              partner<br />for your{' '}
              <span className="hero-accent">next project.</span>
            </h1>
            <p className="hero-sub">
              Practical solutions for residential projects, logistics coordination, and oil and gas tool
              procurement, with clear communication from enquiry to delivery.
            </p>

            <div className="hero-actions">
              <a
                href="https://calendar.app.google/rusmCVfPmaHsim7U6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow"
              >
                Book a Service
              </a>
            </div>

            <div className="hero-badges-wrap">
              <div className="hero-badge-pill">
                <span>Flexible Scheduling</span>
              </div>
              <div className="hero-badge-pill">
                <span>Trusted Professionals</span>
              </div>
            </div>
            <div className="hero-badges-wrap">
              <div className="hero-badge-pill">
                <span>Eco-Friendly Products</span>
              </div>
              <div className="hero-badge-pill">
                <span>Residential &amp; Commercial</span>
              </div>
            </div>
          </div>

          {/* Hero Client Trust Floating Card */}
          <div className="hero-client-card">
            <div className="client-avatars">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                alt="Client 1"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                alt="Client 2"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                alt="Client 3"
              />
            </div>
            <div className="client-rating-info">
              <strong>
                4.9/5 <br /> Client Satisfaction
              </strong>
            </div>
          </div>
        </div>
      </section>

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

            {/* Col 3: Solo Photo + Discover Card */}
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
                <Link to="/about" className="btn-yellow-sm">
                  More about us →
                </Link>
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

      {/* ===== SERVICES SECTION ===== */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-tag">OUR SERVICES</span>
              <h2>
                Practical solutions for<br />homes and businesses.
              </h2>
            </div>
            <Link to="/services" className="btn-teal-pill">
              Explore services
            </Link>
          </div>

          <div className="services-quad-grid">
            {/* Card 1: Plumbing */}
            <div className="service-horizontal-card">
              <div className="card-text-side">
                <div className="service-badge-num">01</div>
                <h3>Plumbing</h3>
                <p>Leaks, fixtures, water heaters and drains, repaired and installed to code.</p>
                <a
                  href="https://calendar.app.google/rusmCVfPmaHsim7U6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card-outline"
                >
                  Book now
                </a>
              </div>
              <div className="card-img-side">
                <img src="/images/Container.png" alt="Plumbing Service" />
              </div>
            </div>

            {/* Card 2: Electrical */}
            <div className="service-horizontal-card">
              <div className="card-text-side">
                <div className="service-badge-num">02</div>
                <h3>Electrical</h3>
                <p>Panels, lighting, outlets and safety checks handled by a careful crew.</p>
                <a
                  href="https://calendar.app.google/rusmCVfPmaHsim7U6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card-outline"
                >
                  Book now
                </a>
              </div>
              <div className="card-img-side">
                <img src="/images/Container (1).png" alt="Electrical Service" />
              </div>
            </div>

            {/* Card 3: Remodeling */}
            <div className="service-horizontal-card">
              <div className="card-text-side">
                <div className="service-badge-num">03</div>
                <h3>Remodeling</h3>
                <p>Repair, replacement and seasonal tune-ups that keep Houston homes comfortable.</p>
                <a
                  href="https://calendar.app.google/rusmCVfPmaHsim7U6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card-outline"
                >
                  Book now
                </a>
              </div>
              <div className="card-img-side">
                <img src="/images/Container (2).png" alt="Remodeling Service" />
              </div>
            </div>

            {/* Card 4: Restoration & Mitigation */}
            <div className="service-horizontal-card">
              <div className="card-text-side">
                <div className="service-badge-num">04</div>
                <h3>Restoration and Mitigation</h3>
                <p>Fast response after damage, from drying out to full repair. WRT certified.</p>
                <a
                  href="https://calendar.app.google/rusmCVfPmaHsim7U6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card-outline"
                >
                  Book now
                </a>
              </div>
              <div className="card-img-side">
                <img src="/images/Container (3).png" alt="Restoration and Mitigation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="banner-section">
        <div className="container">
          <div className="dependable-card">
            <div className="dependable-img-col">
              <img src="/images/banner-woman.png" alt="Service Professional" />
            </div>
            <div className="dependable-text-col">
              <span className="banner-tag">Spotless In Minutes</span>
              <h2>
                A dependable partner for<br />your next project.
              </h2>
              <p className="banner-sub">
                Practical solutions for residential projects, logistics coordination, and oil and gas tool
                procurement—with clear communication from enquiry to delivery.
              </p>

              <div className="banner-features">
                <div className="banner-feat-item">
                  <span className="feat-check">✔</span>
                  <div>
                    <strong>Residential Services</strong>
                    <p>Support for repairs, improvements, and property-related projects.</p>
                  </div>
                </div>
                <div className="banner-feat-item">
                  <span className="feat-check">✔</span>
                  <div>
                    <strong>Logistics</strong>
                    <p>Logistics support tailored to your movement and delivery requirements.</p>
                  </div>
                </div>
                <div className="banner-feat-item">
                  <span className="feat-check">✔</span>
                  <div>
                    <strong>Oil &amp; Gas Tool Procurement</strong>
                    <p>Procurement enquiries based on your required tools, specifications, and quantities.</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="btn-outline-white banner-btn">
                Let's discuss your project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="process" id="process">
        <div className="container">
          <div className="process-layout">
            <div className="process-left-col">
              <span className="section-tag">Our Process</span>
              <h2>
                A clear path from<br />enquiry to next<br />steps.
              </h2>
              <div className="process-img-card">
                <img src="/images/process-worker.png" alt="Working on project" />
                <a href="#contact" className="process-badge-yellow" style={{ textDecoration: 'none' }}>
                  Contact Us →
                </a>
              </div>
            </div>

            <div className="process-steps-grid">
              <div className="step-card">
                <div className="step-num-circle">01</div>
                <h3>Tell us what you need</h3>
                <p>Choose residential services, logistics support, or oil and gas tool procurement.</p>
              </div>
              <div className="step-card">
                <div className="step-num-circle">02</div>
                <h3>Share your requirements</h3>
                <p>Provide the project details, item specifications, destination, or service information.</p>
              </div>
              <div className="step-card">
                <div className="step-num-circle">03</div>
                <h3>Review the way forward</h3>
                <p>Our team can discuss the request, clarify requirements, and advise on the next step.</p>
              </div>
              <div className="step-card">
                <div className="step-num-circle">04</div>
                <h3>Stay in touch</h3>
                <p>We will use your enquiry details to follow up and discuss the request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BRANDS SECTION ===== */}
      <section className="trusted">
        <div className="container">
          <div className="trusted-header">
            <span className="section-tag">OUR CLIENTS</span>
            <h2>
              People who <span className="text-teal">trust</span><br />our expertise
            </h2>
          </div>

          <div className="brands-table-card">
            <div className="brand-cell">
              <img src="/images/brand-images/Frame 4.png" alt="All Saints Anglican Church" />
            </div>
            <div className="brand-cell">
              <img src="/images/brand-images/Frame 5.png" alt="Ascension Anglican Church" />
            </div>
            <div className="brand-cell">
              <img src="/images/brand-images/image 29.png" alt="Stromberg" />
            </div>
            <div className="brand-cell">
              <img src="/images/brand-images/Div [group].png" alt="STS Worldwide Shipping" />
            </div>
            <div className="brand-cell">
              <img src="/images/brand-images/Div [group] (1).png" alt="Daystar Online Church" />
            </div>
            <div className="brand-cell">
              <img src="/images/brand-images/Frame 4 (1).png" alt="Westpaq" />
            </div>
            <div className="brand-cell">
              <img src="/images/brand-images/Div [group] (2).png" alt="Durek Sun" />
            </div>
            <div className="brand-cell">
              <img src="/images/brand-images/Div [group] (4).png" alt="The Awake Community" />
            </div>
            <div className="brand-cell">
              <img src="/images/brand-images/Div [group] (5).png" alt="Creation Living Center" />
            </div>
            <div className="brand-cell">
              <img src="/images/brand-images/image 87.png" alt="McDonald's" />
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
