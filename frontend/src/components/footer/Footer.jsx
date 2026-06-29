import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock
} from "react-icons/fa";

import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-brand">

          <h2>Burdwan Scan Centre</h2>

          <p>
            Providing trusted diagnostic services with
            modern technology, experienced professionals,
            and accurate healthcare solutions.
          </p>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/packages">Packages</Link>
            </li>

            <li>
              <Link to="/notice-board">Notice Board</Link>
            </li>

            <li>
              <Link to="/job-vacancies">Jobs</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>

        </div>

        {/* CONTACT */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <div className="footer-info">

            <FaMapMarkerAlt />

            <span>
              Khoshbagan, Burdwan, West Bengal
            </span>

          </div>

          <div className="footer-info">

            <FaPhoneAlt />

            <span>
              +91 0342-2550829
            </span>

          </div>

          <div className="footer-info">

            <FaClock />

            <span>
              Open Daily • 7:30 AM - 7:30 PM
            </span>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Burdwan Scan Centre. All Rights Reserved.
        </p>

        <span>
          Designed & Developed by ANIL_KP
        </span>

      </div>

    </footer>
  );
}

export default Footer;