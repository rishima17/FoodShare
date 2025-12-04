import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-enhanced" id="home">
      <div className="hero-bg-pattern">
        <div className="hero-bg-circle hero-bg-circle-1"></div>
        <div className="hero-bg-circle hero-bg-circle-2"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content-enhanced">
            <div className="hero-badge">🌱 Make a Difference Today</div>

            <h1 className="hero-title">
              Connecting{" "}
              <span className="hero-title-highlight-green">Leftover Food</span>{" "}
              with{" "}
              <span className="hero-title-highlight-orange">Those in Need</span>
            </h1>

            <p className="hero-subtitle">
              Together, We Can Fight Hunger and Reduce Food Waste
            </p>

            <p className="hero-description">
              Join our platform to connect people and businesses with surplus
              food to nearby NGOs. Every donation helps ensure excess food
              reaches those who need it most, promoting community power and
              sustainability.
            </p>

            <div className="hero-buttons">
               <Link to="/login" className="hero-btn hero-btn-primary">
                Donate Food Today
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

               <Link to="/about-us" className="hero-btn hero-btn-secondary">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">50K+</span>
                <span className="hero-stat-label">Meals Donated</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">200+</span>
                <span className="hero-stat-label">NGO Partners</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">100+</span>
                <span className="hero-stat-label">Cities Covered</span>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="hero-images">
            <div className="hero-image-grid">
              {/* Main Large Image */}
              <div className="hero-image-large">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop"
                  alt="Food donation"
                  className="hero-image"
                />
                <div className="hero-image-overlay"></div>
                <div className="hero-image-caption">Fresh Food Sharing</div>
              </div>

              {/* Small Images */}
              <div className="hero-image-small">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop"
                  alt="Community helping"
                  className="hero-image"
                />
                <div className="hero-image-overlay hero-image-overlay-green"></div>
              </div>

              <div className="hero-image-small">
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop"
                  alt="Volunteers distributing food"
                  className="hero-image"
                />
                <div className="hero-image-overlay hero-image-overlay-orange"></div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="hero-floating-badge">
              <div className="hero-floating-icon">🤝</div>
              <div className="hero-floating-text">Join Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
