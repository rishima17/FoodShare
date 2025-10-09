import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rememberMe");
    setLoggedIn(false);
    navigate("/login");
    setMenuOpen(false); // close menu on logout (mobile)
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <i className="fas fa-leaf"></i>
          <span>FoodShare</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <i className="fas fa-bars open-icon"></i>
          <i className="fas fa-times close-icon"></i>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`} id="navLinks">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/food-partner" onClick={closeMenu}>
              Food Partner
            </Link>
          </li>

          {!loggedIn && (
            <>
              <li>
                <Link to="/login" className="btn-login" onClick={closeMenu}>
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="btn-register"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </li>
            </>
          )}

          {loggedIn && (
            <li>
              <Link to="/" className="btn-login" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
