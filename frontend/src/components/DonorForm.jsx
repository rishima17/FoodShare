import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const DonorForm = () => {
  const navigate = useNavigate();
  const donorType = localStorage.getItem("donorType");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    foodType: "",
    quantity: "",
    expiryTime: "",
    address: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation submitted:", { donorType, ...formData });
    alert("✅ Donation submitted successfully!");
    navigate("/dashboard");
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
          .form-card {
            padding: 1.5rem !important;
            width: 90% !important;
          }
          .submit-btn, .back-btn {
            width: 100% !important;
            padding: 0.9rem !important;
          }
          .button-group {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          h1 {
            font-size: 1.5rem !important;
          }
          p {
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 480px) {
          .page {
            padding: 2rem 0.5rem !important;
          }
          .form-card {
            border-radius: 15px !important;
          }
        }
      `}</style>

      <div style={styles.page} className="page">
        <div style={styles.header}>
          <h1>
            {donorType === "restaurant"
              ? "🍴 Restaurant Donation Form"
              : "🏠 Individual Donation Form"}
          </h1>
          <p>Provide your food donation details to help those in need.</p>
        </div>

        <div style={styles.formCard} className="form-card">
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGrid} className="form-grid">
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Enter your name"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div style={styles.formGrid} className="form-grid">
              <div style={styles.formGroup}>
                <label style={styles.label}>Type of Food</label>
                <input
                  type="text"
                  name="foodType"
                  value={formData.foodType}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="e.g. Cooked Meals, Packaged Items"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="e.g. 10 servings"
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Best Before / Expiry Time</label>
              <input
                type="datetime-local"
                name="expiryTime"
                value={formData.expiryTime}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Pickup Address</label>
              <textarea
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
                style={styles.textarea}
                placeholder="Enter the pickup location"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Additional Notes (Optional)</label>
              <textarea
                name="notes"
                rows="2"
                value={formData.notes}
                onChange={handleChange}
                style={styles.textarea}
                placeholder="Any special instructions..."
              />
            </div>

            <div style={styles.buttonGroup} className="button-group">
              <button
                type="submit"
                style={styles.submitBtn}
                className="submit-btn"
              >
                Submit Donation
              </button>

              <Link
                to="/donor-dashboard"
                style={styles.backBtn}
                className="back-btn"
              >
                ← Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// 🎨 Styling
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #D8F3DC 0%, #B7E4C7 40%, #FFFFFF 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 1rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#1B4332",
  },
  formCard: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    padding: "2.5rem 3rem",
    width: "100%",
    maxWidth: "700px",
    transition: "0.3s ease",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "600",
    color: "#1B4332",
    marginBottom: "0.4rem",
  },
  input: {
    padding: "0.9rem 1rem",
    borderRadius: "12px",
    border: "2px solid #95D5B2",
    outline: "none",
    fontSize: "1rem",
    transition: "0.3s",
  },
  textarea: {
    borderRadius: "12px",
    border: "2px solid #95D5B2",
    padding: "0.9rem 1rem",
    fontSize: "1rem",
    resize: "none",
    transition: "0.3s",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1.5rem",
  },
  submitBtn: {
    background: "linear-gradient(135deg, #2D6A4F, #1B4332)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "1rem 2rem",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(45, 106, 79, 0.3)",
    transition: "0.3s",
  },
  backBtn: {
    background: "none",
    border: "2px solid #2D6A4F",
    color: "#2D6A4F",
    borderRadius: "12px",
    padding: "1rem 2rem",
    fontSize: "1rem",
    fontWeight: "600",
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default DonorForm;
