import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Excellence International School"
            className="school-logo"
          />
        </NavLink>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          {/* Academics Dropdown */}
          <div className="dropdown">

            <div className="dropdown-title">
              Academics <FaChevronDown className="dropdown-icon" />
            </div>

            <div className="dropdown-menu">

              <NavLink
                to="/academics/pre-primary"
                onClick={closeMenu}
              >
                Pre Primary School
              </NavLink>

              <NavLink
                to="/academics/primary"
                onClick={closeMenu}
              >
                Primary School
              </NavLink>

              <NavLink
                to="/academics/middle"
                onClick={closeMenu}
              >
                Middle School
              </NavLink>

              <NavLink
                to="/academics/daycare"
                onClick={closeMenu}
              >
                Day Care
              </NavLink>

            </div>

          </div>

          {/* Admissions Dropdown */}
          <div className="dropdown">

            <div className="dropdown-title">
              Admissions <FaChevronDown className="dropdown-icon" />
            </div>

            <div className="dropdown-menu">

              <NavLink
                to="/admissions"
                onClick={closeMenu}
              >
                Admission Overview
              </NavLink>

              <NavLink
                to="/admissions/enquiry"
                onClick={closeMenu}
              >
                Admission Enquiry
              </NavLink>

              <NavLink
                to="/admissions/procedure"
                onClick={closeMenu}
              >
                Admission Procedure
              </NavLink>

            </div>

          </div>

          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>

          <NavLink to="/blog" onClick={closeMenu}>
            Blog
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink
            to="/admissions"
            className="admission-btn"
            onClick={closeMenu}
          >
            Apply Now
          </NavLink>

        </nav>

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;