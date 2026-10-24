import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import SEO from '../components/common/SEO';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy – Spotless in Minutes"
        description="Learn how Spotless in Minutes collects, uses, protects, and handles your personal information."
        canonical="https://www.spotlessinminutes.com/privacy"
      />
      <PageHeader title="Privacy Policy" breadcrumb="Privacy Policy" />

      <section className="legal-section">
        <div className="container">
          <div className="legal-wrapper">
            <aside className="legal-toc">
              <h3>Contents</h3>
              <ul>
                <li><a href="#intro">1. Introduction</a></li>
                <li><a href="#info-collect">2. Information We Collect</a></li>
                <li><a href="#how-use">3. How We Use Your Information</a></li>
                <li><a href="#sharing">4. Sharing of Information</a></li>
                <li><a href="#cookies">5. Cookies &amp; Tracking</a></li>
                <li><a href="#retention">6. Data Retention</a></li>
                <li><a href="#security">7. Data Security</a></li>
                <li><a href="#rights">8. Your Rights</a></li>
                <li><a href="#third-party">9. Third-Party Links</a></li>
                <li><a href="#children">10. Children's Privacy</a></li>
                <li><a href="#updates">11. Updates to This Policy</a></li>
                <li><a href="#contact-privacy">12. Contact Us</a></li>
              </ul>
            </aside>

            <article className="legal-body">
              <p className="legal-date">Last updated: <strong>October 2026</strong></p>
              <p className="legal-intro">
                At Spotless in Minutes, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
              </p>

              <div className="legal-block" id="intro">
                <h2>1. Introduction</h2>
                <p>
                  Spotless in Minutes LLC ("we", "us", "our") operates the website <a href="https://www.spotlessinminutes.com" target="_blank" rel="noopener noreferrer">www.spotlessinminutes.com</a> and provides cleaning and facilities services. This policy applies to all personal information we collect through our website, service interactions, and communications. By using our website or services, you consent to the practices described in this policy.
                </p>
              </div>

              <div className="legal-block" id="info-collect">
                <h2>2. Information We Collect</h2>
                <p>We may collect the following types of personal information:</p>
                <h3>Information You Provide Directly</h3>
                <ul>
                  <li><strong>Contact details:</strong> Name, email address, phone number</li>
                  <li><strong>Property information:</strong> Address, property type, access instructions</li>
                  <li><strong>Service enquiries:</strong> Details of services requested, preferred dates and times</li>
                  <li><strong>Payment information:</strong> Billing details (processed securely via our payment partners — we do not store card numbers)</li>
                  <li><strong>Communications:</strong> Messages sent through our contact form or email</li>
                </ul>
                <h3>Information Collected Automatically</h3>
                <ul>
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referral source (how you found us)</li>
                  <li>Device and operating system information</li>
                </ul>
              </div>

              <div className="legal-block" id="how-use">
                <h2>3. How We Use Your Information</h2>
                <p>We use your personal information to:</p>
                <ul>
                  <li>Process and manage your service bookings and appointments</li>
                  <li>Communicate with you about your services, including confirmations and updates</li>
                  <li>Respond to enquiries, complaints, and support requests</li>
                  <li>Send relevant service updates, promotions, or newsletters (only where you have opted in)</li>
                  <li>Improve our website and service offerings based on user behaviour</li>
                  <li>Comply with legal obligations and enforce our Terms and Conditions</li>
                  <li>Prevent fraud and ensure the security of our services</li>
                </ul>
              </div>

              <div className="legal-block" id="sharing">
                <h2>4. Sharing of Information</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:</p>
                <ul>
                  <li><strong>Service delivery:</strong> With our cleaning staff or subcontractors who need it to perform your booked services</li>
                  <li><strong>Payment processing:</strong> With secure payment processors to handle transactions</li>
                  <li><strong>Legal compliance:</strong> Where required by law, court order, or government authority</li>
                  <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of business assets, your data may be transferred as part of that transaction</li>
                </ul>
                <p>All third parties we work with are required to handle your data securely and in accordance with applicable privacy laws.</p>
              </div>

              <div className="legal-block" id="cookies">
                <h2>5. Cookies &amp; Tracking</h2>
                <p>Our website uses cookies — small text files stored on your device — to enhance your browsing experience. We use:</p>
                <ul>
                  <li><strong>Essential cookies:</strong> Required for the website to function correctly (e.g., session management)</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (e.g., Google Analytics)</li>
                  <li><strong>Marketing cookies:</strong> Used to deliver relevant advertising (where applicable)</li>
                </ul>
                <p>You can control cookie settings through your browser preferences. Disabling certain cookies may affect website functionality.</p>
              </div>

              <div className="legal-block" id="retention">
                <h2>6. Data Retention</h2>
                <p>We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including:</p>
                <ul>
                  <li>Active customer records: Duration of our business relationship plus 3 years</li>
                  <li>Financial and transaction records: 7 years (as required by U.S. tax law)</li>
                  <li>Marketing preferences and communications: Until you unsubscribe or request deletion</li>
                </ul>
              </div>

              <div className="legal-block" id="security">
                <h2>7. Data Security</h2>
                <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction, or alteration. These measures include:</p>
                <ul>
                  <li>Encrypted data transmission (SSL/TLS) on our website</li>
                  <li>Restricted access to personal data on a need-to-know basis</li>
                  <li>Regular security assessments of our systems</li>
                </ul>
              </div>

              <div className="legal-block" id="rights">
                <h2>8. Your Rights</h2>
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                  <li><strong>Objection:</strong> Object to the processing of your data for marketing purposes</li>
                  <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
                  <li><strong>Withdrawal of consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                </ul>
                <p>To exercise any of these rights, please contact us at <a href="mailto:Info@spotlessinminutes.com">Info@spotlessinminutes.com</a>.</p>
              </div>

              <div className="legal-block" id="third-party">
                <h2>9. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.</p>
              </div>

              <div className="legal-block" id="children">
                <h2>10. Children's Privacy</h2>
                <p>Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children.</p>
              </div>

              <div className="legal-block" id="updates">
                <h2>11. Updates to This Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Continued use of our website or services constitutes your acceptance of any updates.</p>
              </div>

              <div className="legal-block" id="contact-privacy">
                <h2>12. Contact Us</h2>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
                <div className="legal-contact-card">
                  <p><i className="fa-solid fa-building"></i> <strong>Spotless in Minutes LLC</strong></p>
                  <p><i className="fa-solid fa-location-dot"></i> 9888 Bissonnet St, Suite 100-L, Houston, TX 77038, United States</p>
                  <p><i className="fa-solid fa-phone"></i> <a href="tel:+18329891577">(832) 989-1577</a></p>
                  <p><i className="fa-solid fa-envelope"></i> <a href="mailto:Info@spotlessinminutes.com">Info@spotlessinminutes.com</a></p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
