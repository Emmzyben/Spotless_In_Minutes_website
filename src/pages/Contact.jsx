import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import SEO from '../components/common/SEO';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export default function Contact() {
  useScrollAnimations();

  const [openFaqs, setOpenFaqs] = useState({
    faq1: true,
    faq5: true
  });

  const toggleFaq = (id) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      <SEO
        title="Contact Us – Spotless in Minutes | Houston, TX"
        description="Contact Spotless in Minutes for residential cleaning, repairs, electrical, plumbing, logistics, and tool procurement. Call (832) 989-1577 or book online."
        canonical="https://www.spotlessinminutes.com/contact"
      />
      <PageHeader title="Contact Us" breadcrumb="Contact Us" />

      {/* ===== MAIN CONTACT SECTION ===== */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* LEFT COLUMN: Info + Team Photos */}
            <div className="contact-info-col">
              <span className="section-tag">CONTACT US</span>
              <h2 className="contact-main-heading">
                Tell us what you<br />need support with
              </h2>
              <p className="contact-main-sub">
                Contact us about residential services, logistics support, or oil and gas tool
                procurement. Share a few details and the team can follow up.
              </p>

              <div className="contact-checklist">
                <span className="contact-check-item">
                  <span className="ccheck">✔</span> Clear communication
                </span>
                <span className="contact-check-item">
                  <span className="ccheck">✔</span> Multiple service areas
                </span>
                <span className="contact-check-item">
                  <span className="ccheck">✔</span> Project-focused support
                </span>
              </div>

              <div className="contact-team-photos">
                <div className="contact-photo-card">
                  <img src="/images/8.png" alt="Spotless in Minutes Team" />
                </div>
                <div className="contact-photo-card">
                  <img src="/images/9.png" alt="Spotless in Minutes Team" />
                </div>
                <div className="contact-photo-card">
                  <img src="/images/10.png" alt="Spotless in Minutes Team" />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <ContactForm isDarkCard={false} />
          </div>

          {/* CONTACT INFO CARDS ROW */}
          <div className="contact-cards-row">
            <div className="contact-card">
              <div className="contact-card-text">
                <span className="contact-card-label">CALL US</span>
                <a href="tel:+18329891577" className="contact-card-value">
                  (832) 989-1577
                </a>
              </div>
              <div className="contact-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16l.18.92z"></path>
                </svg>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-text">
                <span className="contact-card-label">EMAIL US</span>
                <a href="mailto:Info@spotlessinminutes.com" className="contact-card-value">
                  Info@spotlessinminutes.com
                </a>
              </div>
              <div className="contact-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-text">
                <span className="contact-card-label">HOME SALES</span>
                <address className="contact-card-value" style={{ fontStyle: 'normal' }}>
                  9888 bissonnet st, suite<br />100-l, Houston, Tx,<br />77038, United States
                </address>
              </div>
              <div className="contact-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="faq-section" id="faqs">
        <div className="container">
          <div className="faq-header">
            <span className="section-tag center">COMMON QUESTIONS</span>
            <h2 className="faq-heading">Questions before you enquire?</h2>
          </div>

          <div className="faq-two-col">
            {/* LEFT COLUMN */}
            <div className="faq-col">
              <div className={`faq-item ${openFaqs.faq1 ? 'faq-open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq('faq1')}>
                  <span>Which services does Spotless In Minutes provide?</span>
                  <span className="faq-icon">{openFaqs.faq1 ? '−' : '+'}</span>
                </button>
                {openFaqs.faq1 && (
                  <div className="faq-answer">
                    <p>
                      The current service areas include residential repairs and improvements, logistics, and oil and gas tool
                      procurement. Contact the team to confirm the exact scope available for your request.
                    </p>
                  </div>
                )}
              </div>

              <div className={`faq-item ${openFaqs.faq2 ? 'faq-open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq('faq2')}>
                  <span>What information should I include in my enquiry?</span>
                  <span className="faq-icon">{openFaqs.faq2 ? '−' : '+'}</span>
                </button>
                {openFaqs.faq2 && (
                  <div className="faq-answer">
                    <p>
                      Include the type of service needed, your location, preferred timing, any relevant photos or measurements,
                      and a budget range if available. The more detail you provide, the faster the team can respond with a
                      tailored quote.
                    </p>
                  </div>
                )}
              </div>

              <div className={`faq-item ${openFaqs.faq3 ? 'faq-open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq('faq3')}>
                  <span>What details are needed for a logistics request?</span>
                  <span className="faq-icon">{openFaqs.faq3 ? '−' : '+'}</span>
                </button>
                {openFaqs.faq3 && (
                  <div className="faq-answer">
                    <p>
                      For logistics, please share the nature of goods or materials, origin and destination points, estimated
                      weight or volume, and any special handling requirements. This helps the team coordinate scheduling and
                      transport efficiently.
                    </p>
                  </div>
                )}
              </div>

              <div className={`faq-item ${openFaqs.faq4 ? 'faq-open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq('faq4')}>
                  <span>What information is needed for tool procurement?</span>
                  <span className="faq-icon">{openFaqs.faq4 ? '−' : '+'}</span>
                </button>
                {openFaqs.faq4 && (
                  <div className="faq-answer">
                    <p>
                      Provide tool specifications, quantity, required delivery timeline, and the project site or industry
                      context. Accurate details help ensure the right equipment is sourced quickly and at competitive rates.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="faq-col">
              <div className={`faq-item ${openFaqs.faq5 ? 'faq-open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq('faq5')}>
                  <span>How do I discuss a residential project?</span>
                  <span className="faq-icon">{openFaqs.faq5 ? '−' : '+'}</span>
                </button>
                {openFaqs.faq5 && (
                  <div className="faq-answer">
                    <p>
                      Include the service you need, relevant location, timing, and any specifications or priced details that
                      can help the team understand your request.
                    </p>
                  </div>
                )}
              </div>

              <div className={`faq-item ${openFaqs.faq6 ? 'faq-open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq('faq6')}>
                  <span>How can I contact the team?</span>
                  <span className="faq-icon">{openFaqs.faq6 ? '−' : '+'}</span>
                </button>
                {openFaqs.faq6 && (
                  <div className="faq-answer">
                    <p>
                      You can reach us by phone at (832) 989-1577, by email at Info@spotlessinminutes.com, or by using the
                      contact form on this page. The team typically responds within 24 hours on business days.
                    </p>
                  </div>
                )}
              </div>

              <div className={`faq-item ${openFaqs.faq7 ? 'faq-open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq('faq7')}>
                  <span>Can I ask about a service before booking?</span>
                  <span className="faq-icon">{openFaqs.faq7 ? '−' : '+'}</span>
                </button>
                {openFaqs.faq7 && (
                  <div className="faq-answer">
                    <p>
                      Absolutely. Reach out anytime with questions about scope, pricing, or availability. The team is happy to
                      walk you through options before any commitment is made.
                    </p>
                  </div>
                )}
              </div>

              <div className={`faq-item ${openFaqs.faq8 ? 'faq-open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq('faq8')}>
                  <span>How do I request a quote or consultation?</span>
                  <span className="faq-icon">{openFaqs.faq8 ? '−' : '+'}</span>
                </button>
                {openFaqs.faq8 && (
                  <div className="faq-answer">
                    <p>
                      Use the contact form above, call directly, or send an email. For faster turnaround, describe the project
                      in detail and attach any relevant photos. A team member will respond with a tailored estimate.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
