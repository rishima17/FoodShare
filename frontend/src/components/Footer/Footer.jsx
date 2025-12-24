import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => (
  <footer className="footer-enhanced">
    {/* Newsletter Section */}
    <div className="footer-newsletter">
      <div className="footer-container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h3>Stay Updated with Our Mission</h3>
            <p>
              Subscribe to receive updates about our impact and new features
            </p>
          </div>
          <form className="newsletter-form">
            <div className="newsletter-input-group">
              <svg
                className="newsletter-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>FoodShare</span>
            </div>
            <p className="footer-description">
              We're dedicated to reducing food waste and fighting hunger by
              connecting surplus food with those who need it most.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>

              <a href="#" className="social-link" aria-label="Twitter">
                <FaXTwitter size={20} />
              </a>

              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>

              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home" className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#about-us" className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  About Us
                </a>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/food-partner" className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  Food Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="footer-section">
            <h3 className="footer-title">Account</h3>
            <ul className="footer-links">
              <li>
                <Link to="/login" className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  Register
                </Link>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  Forgot Password
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <div className="contact-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:info@foodshare.com">info@foodshare.com</a>
                </div>
              </li>
              <li>
                <div className="contact-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </div>
              </li>
              <li>
                <div className="contact-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Address</span>
                  <span>123 Green Street, Eco City</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="footer-container">
        <div className="footer-bottom-content">
          <p>&copy; 2025 FoodShare Platform. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms of Service</a>
            <span className="separator">|</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
