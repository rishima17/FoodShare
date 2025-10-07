import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatusMessage("✅ Thank you! We will get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatusMessage("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("⚠️ Server error. Please try again later.");
    }
  };

  // Responsive styles
  const styles = {
    contactSection: {
      maxWidth: "1200px",
      margin: "1rem auto",
      padding: "2rem",
    },
    contactContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "3rem",
      background: "#fff",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },
    contactInfo: {
      background: "linear-gradient(135deg, #2D6A4F 0%, #52B788 100%)",
      color: "#fff",
      padding: "3rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contactInfoTitle: { fontSize: "2rem", marginBottom: "1rem" },
    contactInfoText: { opacity: 0.9, marginBottom: "2rem" },
    infoItem: { display: "flex", gap: "1.5rem" },
    infoIcon: {
      width: "50px",
      height: "50px",
      background: "rgba(255,255,255,0.2)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.2rem",
    },
    infoText: { opacity: 0.9, margin: 0 },
    socialIcons: {
      display: "flex",
      gap: "1rem",
      marginTop: "1rem",
      flexWrap: "wrap",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      background: "rgba(255,255,255,0.2)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "1.3rem",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    contactFormContainer: { padding: "3rem" },
    formRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.5rem",
      marginBottom: "1.5rem",
    },
    formSingle: { marginBottom: "1.5rem" },
    inputStyle: {
      width: "100%",
      padding: "0.8rem 1rem",
      borderRadius: "10px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: "1rem",
      transition: "border 0.3s ease",
    },
    textareaStyle: {
      minHeight: "120px",
      resize: "none",
      width: "100%",
      padding: "0.8rem 1rem",
      borderRadius: "10px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: "1rem",
    },
    buttonStyle: {
      background: "linear-gradient(135deg, #F4A261, #E76F51)",
      color: "#fff",
      border: "none",
      borderRadius: "50px",
      padding: "1rem 3rem",
      fontSize: "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.3s ease",
    },
    statusMessage: { marginTop: "1rem", color: "#2D6A4F" },
    backLink: {
      marginTop: "2rem",
      color: "#2D6A4F",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
    },
  };

  // Media query adjustments
  const isMobile = window.innerWidth <= 768;

  const containerStyle = {
    ...styles.contactContainer,
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
  };

  const formRowStyle = {
    ...styles.formRow,
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
  };

  return (
    <div style={styles.contactSection}>
      <div style={containerStyle}>
        {/* Left Section — Contact Info */}
        <div style={styles.contactInfo}>
          <h2 style={styles.contactInfoTitle}>Contact Information</h2>
          <p style={styles.contactInfoText}>
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {[
              {
                icon: <FaPhone />,
                title: "Phone",
                lines: ["+91 98765 43210", "Mon-Fri 9am-6pm"],
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                lines: ["info@foodshare.com", "support@foodshare.com"],
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Office",
                lines: ["Sector 15, Faridabad", "Haryana 121007, India"],
              },
            ].map((item, idx) => (
              <div key={idx} style={styles.infoItem}>
                <div style={styles.infoIcon}>{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i} style={styles.infoText}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div style={{ marginTop: "3rem" }}>
            <h3>Follow Us</h3>
            <div style={styles.socialIcons}>
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <div
                    key={i}
                    style={styles.socialIcon}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.color = "#2D6A4F";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.2)";
                      e.currentTarget.style.color = "#fff";
                    }}
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Section — Contact Form */}
        <div style={styles.contactFormContainer}>
          <h2 style={{ color: "#1b4332", marginBottom: "1rem" }}>
            Send Message
          </h2>
          <p style={{ color: "#555", marginBottom: "2rem" }}>
            Have questions? We're here to help!
          </p>

          <form onSubmit={handleSubmit}>
            <div style={formRowStyle}>
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  style={styles.inputStyle}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  style={styles.inputStyle}
                />
              </div>
            </div>

            <div style={formRowStyle}>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.inputStyle}
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={styles.inputStyle}
                />
              </div>
            </div>

            <div style={styles.formSingle}>
              <label>Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={styles.inputStyle}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div style={styles.formSingle}>
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.textareaStyle}
              ></textarea>
            </div>

            <button
              type="submit"
              style={styles.buttonStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(231,111,81,0.4)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              Send Message <FaPaperPlane style={{ marginLeft: "8px" }} />
            </button>

            {statusMessage && (
              <p style={styles.statusMessage}>{statusMessage}</p>
            )}
          </form>

          <div style={styles.backLink}>
            <Link
              to="/dashboard"
              style={{ color: "#2D6A4F", textDecoration: "none" }}
            >
              <FaArrowLeft /> Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
