import "./TopBar.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">

        <div className="topbar-left">
          <a href="tel:+911234567890">
            <FaPhoneAlt /> +91 12345 67890
          </a>

          <a href="mailto:info@school.com">
            <FaEnvelope /> info@school.com
          </a>
        </div>

        <div className="topbar-right">
          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaYoutube />
          </a>
        </div>

      </div>
    </div>
  );
}

export default TopBar;