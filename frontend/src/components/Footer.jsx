import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">
        <h3>About FoodShare</h3>
        <p>
          We're dedicated to reducing food waste and fighting hunger by
          connecting surplus food with those who need it most.
        </p>
        <div className="social-links">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li>
            <Link to="#home">Home</Link>
          </li>
          <li>
            <Link to="#about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/food-partner">Food Partner</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Account</h3>
        <ul className="footer-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="#">Forgot Password</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Info</h3>
        <ul className="footer-links">
          <li>
            <i className="fas fa-envelope"></i> info@foodshare.com
          </li>
          <li>
            <i className="fas fa-phone"></i> +1 (555) 123-4567
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i> 123 Green Street, Eco City
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2025 All Rights Reserved | FoodShare Platform</p>
    </div>
  </footer>
);

export default Footer;
