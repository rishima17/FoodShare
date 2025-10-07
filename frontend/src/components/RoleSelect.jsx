import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelect = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to FoodShare</h1>
      <p style={styles.subtitle}>What would you like to do today?</p>

      <div style={styles.buttons}>
        <button
          style={styles.donateBtn}
          onClick={() => navigate("/donor-dashboard")}
        >
          🍱 Donate Food
        </button>
        <button
          style={styles.requestBtn}
          onClick={() => navigate("/requester-dashboard")}
        >
          🥡 Request Food
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #d8f3dc 0%, #fff 100%)",
    padding: "2rem 1rem",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(1.8rem, 5vw, 2.5rem)", // adjusts with screen
    color: "#1b4332",
    marginBottom: "0.5rem",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "clamp(1rem, 3.5vw, 1.2rem)",
    color: "#2d6a4f",
    marginBottom: "2rem",
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap", // allows stacking on small screens
    gap: "1.2rem",
    justifyContent: "center",
  },
  donateBtn: {
    background: "linear-gradient(135deg, #2d6a4f, #52b788)",
    border: "none",
    color: "#fff",
    padding: "1rem 2rem",
    borderRadius: "10px",
    fontSize: "clamp(1rem, 3.5vw, 1.1rem)",
    cursor: "pointer",
    fontWeight: "600",
    minWidth: "180px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  requestBtn: {
    background: "linear-gradient(135deg, #f4a261, #e76f51)",
    border: "none",
    color: "#fff",
    padding: "1rem 2rem",
    borderRadius: "10px",
    fontSize: "clamp(1rem, 3.5vw, 1.1rem)",
    cursor: "pointer",
    fontWeight: "600",
    minWidth: "180px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

// optional hover effects
styles.donateBtn[":hover"] = styles.requestBtn[":hover"] = {
  transform: "scale(1.05)",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

export default RoleSelect;
