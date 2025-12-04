import React from "react";
import "./AboutUs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-overlay"></div>
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Our Mission</h1>
            <p className="about-hero-subtitle">
              Building a world where no food goes to waste and no one goes
              hungry
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="about-container">
            <div className="about-story-grid">
              <div className="about-story-image">
                <img
                  src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&h=600&fit=crop"
                  alt="Our story"
                />
                <div className="about-story-badge">
                  <span className="badge-year">Since 2020</span>
                  <span className="badge-text">Making Impact</span>
                </div>
              </div>
              <div className="about-story-content">
                <h2 className="about-section-title">Our Story</h2>
                <div className="about-title-underline"></div>
                <p className="about-story-text">
                  We started with a simple observation: millions of people go
                  hungry every day while tons of perfectly good food goes to
                  waste. This paradox inspired us to create a platform that
                  bridges the gap between surplus and scarcity.
                </p>
                <p className="about-story-text">
                  What began as a small community initiative has grown into a
                  nationwide movement, connecting thousands of donors with
                  hundreds of NGOs. Every meal shared is a step toward a more
                  sustainable and compassionate world.
                </p>
                <div className="about-story-features">
                  <div className="story-feature">
                    <div className="feature-icon">🎯</div>
                    <div className="feature-text">
                      <h4>Our Goal</h4>
                      <p>Zero food waste by 2030</p>
                    </div>
                  </div>
                  <div className="story-feature">
                    <div className="feature-icon">💚</div>
                    <div className="feature-text">
                      <h4>Our Impact</h4>
                      <p>50,000+ meals saved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-mission-vision">
          <div className="about-container">
            <div className="mission-vision-grid">
              {/* Mission Card */}
              <div className="mv-card mission-card">
                <div className="mv-card-icon">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mv-card-title">Our Mission</h3>
                <p className="mv-card-text">
                  To eliminate food waste and hunger by creating an efficient,
                  technology-driven platform that connects food donors with
                  those in need, fostering a culture of sharing and
                  sustainability in our communities.
                </p>
                <div className="mv-card-image">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                    alt="Mission"
                  />
                </div>
              </div>

              {/* Vision Card */}
              <div className="mv-card vision-card">
                <div className="mv-card-icon">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="mv-card-title">Our Vision</h3>
                <p className="mv-card-text">
                  A world where every community has access to nutritious food,
                  where surplus is viewed as an opportunity rather than waste,
                  and where technology empowers us to build a more equitable and
                  sustainable food ecosystem.
                </p>
                <div className="mv-card-image">
                  <img
                    src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=600&h=400&fit=crop"
                    alt="Vision"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="about-container">
            <h2 className="about-section-title centered">Our Core Values</h2>
            <div className="about-title-underline centered"></div>
            <p className="about-section-subtitle">
              The principles that guide everything we do
            </p>

            <div className="values-grid">
              <div className="value-card">
                <div className="value-card-icon">🤝</div>
                <h3>Community First</h3>
                <p>
                  We believe in the power of communities working together to
                  solve local challenges and create lasting impact.
                </p>
              </div>

              <div className="value-card">
                <div className="value-card-icon">🌱</div>
                <h3>Sustainability</h3>
                <p>
                  Environmental responsibility is at our core. Every meal saved
                  reduces waste and carbon footprint.
                </p>
              </div>

              <div className="value-card">
                <div className="value-card-icon">💡</div>
                <h3>Innovation</h3>
                <p>
                  We leverage technology to make food sharing simple, efficient,
                  and accessible to everyone.
                </p>
              </div>

              <div className="value-card">
                <div className="value-card-icon">❤️</div>
                <h3>Compassion</h3>
                <p>
                  Every action we take is driven by empathy and a genuine desire
                  to help those in need.
                </p>
              </div>

              <div className="value-card">
                <div className="value-card-icon">🔒</div>
                <h3>Transparency</h3>
                <p>
                  We operate with complete openness, ensuring donors and
                  recipients trust our platform.
                </p>
              </div>

              <div className="value-card">
                <div className="value-card-icon">⚡</div>
                <h3>Impact Driven</h3>
                <p>
                  We measure success by the lives touched and the positive
                  change we create in communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <div className="about-container">
            <h2 className="about-section-title centered">Meet Our Team</h2>
            <div className="about-title-underline centered"></div>
            <p className="about-section-subtitle">
              Passionate individuals working to make a difference
            </p>

            <div className="team-grid">
              <div className="team-card">
                <div className="team-image">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Team member"
                  />
                </div>
                <h4>Rajesh Kumar</h4>
                <p className="team-role">Founder & CEO</p>
                <p className="team-bio">
                  Passionate about social impact and technology innovation.
                </p>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                    alt="Team member"
                  />
                </div>
                <h4>Priya Sharma</h4>
                <p className="team-role">Head of Operations</p>
                <p className="team-bio">
                  Ensuring seamless connections between donors and NGOs.
                </p>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                    alt="Team member"
                  />
                </div>
                <h4>Amit Patel</h4>
                <p className="team-role">Tech Lead</p>
                <p className="team-bio">
                  Building technology that powers our mission.
                </p>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                    alt="Team member"
                  />
                </div>
                <h4>Sneha Gupta</h4>
                <p className="team-role">Community Manager</p>
                <p className="team-bio">
                  Building relationships and growing our network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="about-impact">
          <div className="about-container">
            <h2 className="about-section-title centered white">
              Our Impact in Numbers
            </h2>
            <div className="about-title-underline centered white"></div>

            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-number">50,000+</div>
                <div className="impact-label">Meals Donated</div>
                <div className="impact-description">
                  Nutritious meals shared with communities in need
                </div>
              </div>

              <div className="impact-card">
                <div className="impact-number">200+</div>
                <div className="impact-label">NGO Partners</div>
                <div className="impact-description">
                  Trusted organizations working on the ground
                </div>
              </div>

              <div className="impact-card">
                <div className="impact-number">100+</div>
                <div className="impact-label">Cities Covered</div>
                <div className="impact-description">
                  Growing presence across the nation
                </div>
              </div>

              <div className="impact-card">
                <div className="impact-number">25 Tons</div>
                <div className="impact-label">Food Waste Prevented</div>
                <div className="impact-description">
                  Reducing environmental impact every day
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta">
          <div className="about-container">
            <div className="cta-content">
              <h2>Join Our Movement</h2>
              <p>
                Together, we can create a world where no food goes to waste and
                no one goes hungry.
              </p>
              <div className="cta-buttons">
                 <Link to="/register"className="cta-btn primary">
                  Get Started Today
                </Link>
                <Link to="/contact" className="cta-btn secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
