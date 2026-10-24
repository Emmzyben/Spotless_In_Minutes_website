import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export default function Services() {
  useScrollAnimations();

  const servicesList = [
    {
      num: '01',
      title: 'Residential repairs',
      desc: 'Support for home repairs, maintenance and improvement projects, based on your requirements.',
      image: '/images/1.png'
    },
    {
      num: '02',
      title: 'Logistics services',
      desc: 'Logistics coordination for moving goods and supporting project needs. Share your route and delivery requirements.',
      image: '/images/2.png'
    },
    {
      num: '03',
      title: 'Mitigation',
      desc: 'Tell us the tools or equipment you need, including specifications and quantity, so we can review your sourcing request.',
      image: '/images/3.png'
    },
    {
      num: '04',
      title: 'Plumbing & electrical',
      desc: 'Residential service support for plumbing, electrical work and related repair needs.',
      image: '/images/4.png'
    },
    {
      num: '05',
      title: 'HVAC & restoration',
      desc: 'Heating, ventilation, air conditioning and restoration support for applicable property projects.',
      image: '/images/5.png'
    },
    {
      num: '06',
      title: 'Facility management',
      desc: 'Discuss your property or facility support requirements with the Spotless In Minutes team.',
      image: '/images/6.png'
    },
    {
      num: '07',
      title: 'Oil & Gas Tool Procurement',
      desc: 'Tell us the tools or equipment you need, including specifications and quantity, so we can review your sourcing request.',
      image: '/images/7.png'
    }
  ];

  return (
    <>
      <PageHeader title="Services" breadcrumb="Services" />

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
            <a href="#contact" className="btn-teal-pill">
              Explore services
            </a>
          </div>

          <div className="services-quad-grid">
            {servicesList.map((svc) => (
              <div className="service-horizontal-card" key={svc.num}>
                <div className="card-text-side">
                  <div className="service-badge-num">{svc.num}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <a href="#contact" className="btn-card-outline">
                    Book now
                  </a>
                </div>
                <div className="card-img-side">
                  <img src={svc.image} alt={svc.title} />
                </div>
              </div>
            ))}
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
