import "../../styles/contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaClock,
  FaDirections,
  FaCheckCircle
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-header">
        <h2>Contact Us</h2>

        <p>
          Reach out for appointments, reports, packages or any medical query.
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <div className="info-card">
            <FaMapMarkerAlt className="contact-icon" />

            <div>
              <h3>Main Centre</h3>

              <p>
                7, R. B. Ghosh Road,
                Khoshbagan,
                Burdwan-713101, WB
              </p>

              <span>
                Just behind the Khoshbagan Masjid
              </span>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt className="contact-icon" />

            <div>
              <h3>
                <a href="tel:+913422550829">
                  +91-0342-2550829
                </a>
              </h3>

              <span>Landline Support</span>
            </div>
          </div>

          <div className="info-card">
            <FaMobileAlt className="contact-icon" />

            <div>
              <h3>
                <a href="tel:+918373070572">
                  +91-8373070572
                </a>
              </h3>

              <span>Mobile Support</span>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope className="contact-icon" />

            <div>
              <h3>
                <a href="mailto:bscpl_bdn@rediffmail.com">
                  bscpl_bdn@rediffmail.com
                </a>
              </h3>

              <span>Email Support</span>
            </div>
          </div>

          <div className="info-card">
            <FaClock className="contact-icon" />

            <div>
              <h3>Everyday</h3>

              <span>
                7:30 AM – 7:30 PM
              </span>
            </div>
          </div>

          {/* Highlights */}

          <div className="contact-highlights">

            <div>
              <FaCheckCircle />
              Open Daily
            </div>

            <div>
              <FaCheckCircle />
              Fast Reports
            </div>

            <div>
              <FaCheckCircle />
              Trusted Lab
            </div>

          </div>

          {/* Premium Map Card */}

          <div className="map-card">

            <div className="map-overlay">

              <div>
                <span className="map-label">
                  Location
                </span>

                <h3>
                  Burdwan Scan Centre
                </h3>

                <p>
                  Khoshbagan, Burdwan
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Burdwan+Scan+Centre+Burdwan"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                <FaDirections />
                Get Directions
              </a>

            </div>

            <iframe
              title="Burdwan Scan Centre"
              src="https://www.google.com/maps?q=Burdwan+Scan+Centre+Burdwan&output=embed"
              loading="lazy"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-form">

          <form>

  <div className="form-title">
    <h3>Send Us a Message</h3>

    <p>
      Our team will get back to you as soon as possible.
    </p>
  </div>

  <div className="form-badges">
    <span>Fast Response</span>
    <span>Secure</span>
    <span>24/7 Support</span>
  </div>

  <input
    type="text"
    placeholder="Full Name"
  />

  <input
    type="text"
    placeholder="Mobile Number"
  />

  <input
    type="email"
    placeholder="Email Address"
  />

  <input
    type="text"
    placeholder="Subject"
  />

  <textarea
    rows="5"
    placeholder="Tell us how we can help..."
  />

  <button type="submit">
    Send Message
  </button>

</form>
        </div>

      </div>

    </section>
  );
}

