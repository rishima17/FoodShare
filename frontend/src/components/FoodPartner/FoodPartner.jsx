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
import "./FoodPartner.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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
        setStatusMessage("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("⚠️ Server error. Please try again later.");
    }
  };

  const contactInfo = [
    { icon: <FaPhone />, title: "Phone", lines: ["+91 98765 43210"] },
    { icon: <FaEnvelope />, title: "Email", lines: ["partner@foodshare.com"] },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      lines: ["Sector 15, Faridabad, Haryana, India"],
    },
  ];

  return (
    <>
      <Header />
      <div className="food-partner-container">
        <div className="food-partner-grid">
          {/* Left Section */}
          <div className="left-section">
            <h2>Become a Food Partner</h2>
            <p>
              Join our mission to reduce food waste and help people in need.
              Fill out the form and our team will get back to you within 24
              hours.
            </p>

            <div className="contact-info">
              {contactInfo.map((item, idx) => (
                <div className="info-item" key={idx}>
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    {item.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <h2>Partner Registration Form</h2>
            <p>Fill out the details below to become a food partner.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name / Restaurant Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Location / Address</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hotel</option>
                  <option value="cafe">Cafe</option>
                  <option value="individual">Individual</option>
                </select>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit">
                Submit <FaPaperPlane />
              </button>

              {statusMessage && (
                <p className="status-message">{statusMessage}</p>
              )}
            </form>

            <Link to="/dashboard" className="back-link">
              <FaArrowLeft /> Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FoodPartner;
