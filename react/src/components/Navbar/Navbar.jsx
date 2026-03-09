import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"> MyApp</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className={location.pathname === "/signup" ? "active" : ""}>
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
