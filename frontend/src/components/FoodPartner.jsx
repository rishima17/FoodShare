import React, { useState } from "react";
import {
  FaStore,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FoodPartner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    type: "",
    description: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/food-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatusMessage("✅ Thank you! We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          type: "",
          description: "",
        });
      } else {
        setStatusMessage("❌Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("⚠️Server error. Please try again later.");
    }
  };

  // Styles
  const styles = {
    container: {
      maxWidth: "1300px",
      margin: "1rem auto",
      padding: "2rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "1fr 1fr",
      gap: "3rem",
      background: "#fff",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },
    leftSection: {
      background: "linear-gradient(135deg, #2D6A4F 0%, #52B788 100%)",
      color: "#fff",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    leftTitle: { fontSize: "2rem", marginBottom: "1rem" },
    leftText: { opacity: 0.9, marginBottom: "2rem" },
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
    infoLine: { opacity: 0.9, margin: 0 },
    rightSection: { padding: "2rem" },
    formRow: {
      display: "grid",
      gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "1fr 1fr",
      gap: "1.5rem",
      marginBottom: "1.5rem",
    },
    input: {
      width: "100%",
      padding: "0.8rem 1rem",
      borderRadius: "10px",
      border: "1px solid #ccc",
      outline: "none",
      marginTop: "0.5rem",
      fontSize: "1rem",
    },
    textarea: {
      width: "100%",
      padding: "0.8rem 1rem",
      borderRadius: "10px",
      border: "1px solid #ccc",
      outline: "none",
      marginTop: "0.5rem",
      fontSize: "1rem",
      minHeight: "120px",
      resize: "none",
    },
    button: {
      background: "linear-gradient(135deg, #F4A261, #E76F51)",
      color: "#fff",
      border: "none",
      borderRadius: "50px",
      padding: "1rem 3rem",
      marginTop: "2rem",
      fontSize: "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
    },
    status: { marginTop: "1rem", color: "#2D6A4F" },
    backLink: {
      marginTop: "2rem",
      color: "#2D6A4F",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {/* Left Section */}
        <div style={styles.leftSection}>
          <h2 style={styles.leftTitle}>Become a Food Partner</h2>
          <p style={styles.leftText}>
            Join our mission to reduce food waste and help people in need. Fill
            out the form and our team will get back to you within 24 hours.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {[
              { icon: <FaPhone />, title: "Phone", lines: ["+91 98765 43210"] },
              {
                icon: <FaEnvelope />,
                title: "Email",
                lines: ["partner@foodshare.com"],
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Office",
                lines: ["Sector 15, Faridabad, Haryana, India"],
              },
            ].map((item, idx) => (
              <div key={idx} style={styles.infoItem}>
                <div style={styles.infoIcon}>{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i} style={styles.infoLine}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div style={styles.rightSection}>
          <h2 style={{ color: "#1b4332", marginBottom: "1rem" }}>
            Partner Registration Form
          </h2>
          <p style={{ color: "#555", marginBottom: "2rem" }}>
            Fill out the details below to become a food partner.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label>Name / Restaurant Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formRow}>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Location / Address</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                style={styles.input}
              >
                <option value="">Select Type</option>
                <option value="restaurant">Restaurant</option>
                <option value="hotel">Hotel</option>
                <option value="cafe">Cafe</option>
                <option value="individual">Individual</option>
              </select>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                style={styles.textarea}
              />
            </div>

            <button type="submit" style={styles.button}>
              Submit <FaPaperPlane style={{ marginLeft: "8px" }} />
            </button>

            {statusMessage && <p style={styles.status}>{statusMessage}</p>}
          </form>

          <div style={styles.backLink}>
            <Link to="/dashboard">
              <FaArrowLeft /> Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPartner;
