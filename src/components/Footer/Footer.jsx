import "./Footer.css";
import logo from "../../assets/images/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Column 1 */}

        <div className="footer-about">

          <img src={logo} alt="School Logo" />

          <p>
            Excellence International School is committed to providing quality
            education through innovation, discipline, and holistic development.
          </p>

          <div className="social-icons">

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaLinkedinIn /></a>

            <a href="#"><FaYoutube /></a>

          </div>

        </div>

        {/* Column 2 */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#">Home</a></li>

            <li><a href="#">About</a></li>

            <li><a href="#">Academics</a></li>

            <li><a href="#">Admissions</a></li>

            <li><a href="#">Gallery</a></li>

            <li><a href="#">Contact</a></li>

          </ul>

        </div>

        {/* Column 3 */}

        <div className="footer-links">

          <h3>Academics</h3>

          <ul>

            <li><a href="#">Pre-Primary</a></li>

            <li><a href="#">Primary</a></li>

            <li><a href="#">Middle School</a></li>

            <li><a href="#">Day Care</a></li>

          </ul>

        </div>

        {/* Column 4 */}

        <div className="footer-contact">

          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt />
            Ramghat Road, Aligarh, Uttar Pradesh
          </p>

          <p>
            <FaPhoneAlt />
            +91 7055582117
          </p>

          <p>
            <FaEnvelope />
            info@excellenceinternationalschool.com
          </p>

          <p>
            <FaClock />
            Mon - Sat : 8:00 AM - 4:00 PM
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Excellence International School. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;