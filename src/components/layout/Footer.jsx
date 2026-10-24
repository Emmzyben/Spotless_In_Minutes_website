import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Logo & Tagline */}
            <div className="footer-brand">
              <div className="logo-box">
                <div className="logo-inner">
                  <img src="/images/logo.png" alt="Spotless in Minutes" />
                </div>
              </div>
              <p className="footer-tagline">
                Get the help you need to keep your space clean, fresh and comfortable, without the stress of doing it all yourself.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#services">Service areas</a></li>
                <li><Link to="/contact">Booking guide</Link></li>
                <li><Link to="/privacy">Privacy policy</Link></li>
                <li><Link to="/contact">Contact support</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4>Contact info</h4>
              <address>
                <p className="footer-contact-item">
                  <span className="footer-contact-icon"><i className="fa-solid fa-location-dot"></i></span>
                  <span>9888 bissonnet st, suite<br />100-l, Houston, Tx, 77038,<br />United States</span>
                </p>
                <p className="footer-contact-item">
                  <span className="footer-contact-icon"><i className="fa-solid fa-phone"></i></span>
                  <a href="tel:+18329891577">(832) 989-1577</a>
                </p>
                <p className="footer-contact-item">
                  <span className="footer-contact-icon"><i className="fa-solid fa-envelope"></i></span>
                  <a href="mailto:Info@spotlessinminutes.com">Info@spotlessinminutes.com</a>
                </p>
                <p className="footer-contact-item">
                  <span className="footer-contact-icon"><i className="fa-solid fa-envelope"></i></span>
                  <a href="mailto:sales@spotlessinminutes.com">sales@spotlessinminutes.com</a>
                </p>
                <p className="footer-contact-item">
                  <span className="footer-contact-icon"><i className="fa-solid fa-globe"></i></span>
                  <a href="https://www.spotlessinminutes.com" target="_blank" rel="noopener noreferrer">www.spotlessinminutes.com</a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} Spotless in Minutes. All rights reserved.</p>
            <nav className="footer-bottom-links">
              <Link to="/terms">Terms &amp; Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </nav>
            <button className="scroll-top-btn" id="scrollTopBtn" onClick={scrollToTop}>
              <span className="scroll-top-icon">↑</span>
              <span>Scroll to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
