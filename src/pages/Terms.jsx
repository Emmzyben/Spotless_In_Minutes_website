import React from 'react';
import PageHeader from '../components/layout/PageHeader';

export default function Terms() {
  return (
    <>
      <PageHeader title="Terms & Conditions" breadcrumb="Terms & Conditions" />

      <section className="legal-section">
        <div className="container">
          <div className="legal-wrapper">
            <aside className="legal-toc">
              <h3>Contents</h3>
              <ul>
                <li><a href="#acceptance">1. Acceptance of Terms</a></li>
                <li><a href="#services">2. Services</a></li>
                <li><a href="#bookings">3. Bookings &amp; Scheduling</a></li>
                <li><a href="#payments">4. Payments</a></li>
                <li><a href="#cancellations">5. Cancellations &amp; Rescheduling</a></li>
                <li><a href="#access">6. Access to Premises</a></li>
                <li><a href="#liability">7. Liability</a></li>
                <li><a href="#satisfaction">8. Satisfaction Guarantee</a></li>
                <li><a href="#conduct">9. Code of Conduct</a></li>
                <li><a href="#ip">10. Intellectual Property</a></li>
                <li><a href="#changes">11. Changes to Terms</a></li>
                <li><a href="#governing">12. Governing Law</a></li>
                <li><a href="#contact-legal">13. Contact Us</a></li>
              </ul>
            </aside>

            <article className="legal-body">
              <p className="legal-date">Last updated: <strong>October 2026</strong></p>
              <p className="legal-intro">
                Welcome to Spotless in Minutes. By accessing our website or booking any of our services, you agree to be bound by the following Terms and Conditions. Please read them carefully before proceeding.
              </p>

              <div className="legal-block" id="acceptance">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By using our website (<a href="https://www.spotlessinminutes.com" target="_blank" rel="noopener noreferrer">www.spotlessinminutes.com</a>), requesting a quote, or engaging Spotless in Minutes LLC ("Company", "we", "us") for services, you ("Client", "Customer", "you") confirm that you have read, understood, and agree to these Terms and Conditions in full. If you do not agree, please do not use our services.
                </p>
              </div>

              <div className="legal-block" id="services">
                <h2>2. Services</h2>
                <p>
                  Spotless in Minutes provides residential and commercial cleaning services, facilities management, logistics support, and related ancillary services as agreed in your service booking or proposal. Specific services, scope, and deliverables will be defined at the time of booking or in a separate service agreement.
                </p>
                <ul>
                  <li>Services are subject to availability and geographic coverage.</li>
                  <li>We reserve the right to decline or discontinue any service at our discretion.</li>
                  <li>Service descriptions on our website are for general guidance only and may vary based on property size, condition, and specific requirements.</li>
                </ul>
              </div>

              <div className="legal-block" id="bookings">
                <h2>3. Bookings &amp; Scheduling</h2>
                <p>
                  All bookings must be confirmed in writing via our contact form, email, or telephone. A booking is only confirmed when you receive written confirmation from Spotless in Minutes.
                </p>
                <ul>
                  <li>We will make every reasonable effort to honor your requested date and time.</li>
                  <li>We reserve the right to reschedule with reasonable notice in the event of unforeseen circumstances (e.g., equipment failure, staff emergency, extreme weather).</li>
                  <li>Providing accurate information about your property is your responsibility. Inaccurate details may result in revised pricing or cancellation.</li>
                </ul>
              </div>

              <div className="legal-block" id="payments">
                <h2>4. Payments</h2>
                <p>Payment terms will be outlined in your service agreement or invoice. Unless otherwise agreed in writing:</p>
                <ul>
                  <li>Residential services are payable on or before the date of service.</li>
                  <li>Commercial and contract services are invoiced and payable within <strong>30 days</strong> of the invoice date.</li>
                  <li>Late payments may incur an interest charge of 1.5% per month on the outstanding balance.</li>
                  <li>We accept payment via bank transfer, credit/debit card, and other methods as communicated at time of booking.</li>
                </ul>
              </div>

              <div className="legal-block" id="cancellations">
                <h2>5. Cancellations &amp; Rescheduling</h2>
                <p>We understand that plans change. Our cancellation policy is as follows:</p>
                <ul>
                  <li><strong>48+ hours notice:</strong> Full refund or free rescheduling with no penalty.</li>
                  <li><strong>24–48 hours notice:</strong> 50% of the service fee applies as a cancellation charge.</li>
                  <li><strong>Less than 24 hours notice or no-show:</strong> 100% of the service fee is charged.</li>
                </ul>
                <p>To cancel or reschedule, contact us at <a href="mailto:Info@spotlessinminutes.com">Info@spotlessinminutes.com</a> or call <a href="tel:+18329891577">(832) 989-1577</a>.</p>
              </div>

              <div className="legal-block" id="access">
                <h2>6. Access to Premises</h2>
                <p>You are responsible for ensuring our team has safe and unrestricted access to the premises at the scheduled time. If access is denied or delayed beyond 15 minutes, we reserve the right to treat the appointment as a no-show and apply the relevant cancellation charge.</p>
                <ul>
                  <li>You must disclose any known hazards, restricted areas, or special instructions prior to the appointment.</li>
                  <li>All alarm codes, keys, or access credentials shared with us will be handled with the utmost confidentiality and security.</li>
                </ul>
              </div>

              <div className="legal-block" id="liability">
                <h2>7. Liability</h2>
                <p>Spotless in Minutes takes great care in delivering our services. However:</p>
                <ul>
                  <li>Our total liability for any claim arising from services rendered shall not exceed the total amount paid for the specific service in question.</li>
                  <li>We are not liable for damage caused by pre-existing conditions, fragile items not disclosed prior to service, or items left in areas being cleaned.</li>
                  <li>Any damage claims must be reported within <strong>24 hours</strong> of service completion. We are not responsible for claims made after this period.</li>
                  <li>We carry general liability insurance. Details are available upon request.</li>
                </ul>
              </div>

              <div className="legal-block" id="satisfaction">
                <h2>8. Satisfaction Guarantee</h2>
                <p>If you are not satisfied with any aspect of our cleaning service, please notify us within <strong>24 hours</strong> of service completion. We will return to address the issue at no additional charge. Our guarantee applies to the specific cleaning tasks performed and does not cover items or areas outside the agreed scope of service.</p>
              </div>

              <div className="legal-block" id="conduct">
                <h2>9. Code of Conduct</h2>
                <p>We expect all customers to treat our staff with respect and professionalism. We reserve the right to terminate services immediately and without refund in cases of:</p>
                <ul>
                  <li>Verbal abuse, harassment, or threatening behavior toward our team.</li>
                  <li>Request for services that are unsafe, illegal, or outside our agreed scope.</li>
                  <li>Unsafe property conditions that pose a risk to our staff.</li>
                </ul>
              </div>

              <div className="legal-block" id="ip">
                <h2>10. Intellectual Property</h2>
                <p>All content on this website — including text, images, logos, and design — is the property of Spotless in Minutes LLC and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or use our content without prior written permission.</p>
              </div>

              <div className="legal-block" id="changes">
                <h2>11. Changes to Terms</h2>
                <p>We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised "Last updated" date. Your continued use of our services after changes are posted constitutes your acceptance of the updated terms.</p>
              </div>

              <div className="legal-block" id="governing">
                <h2>12. Governing Law</h2>
                <p>These Terms and Conditions are governed by and construed in accordance with the laws of the State of Texas, United States. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Harris County, Texas.</p>
              </div>

              <div className="legal-block" id="contact-legal">
                <h2>13. Contact Us</h2>
                <p>If you have any questions about these Terms and Conditions, please contact us:</p>
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
