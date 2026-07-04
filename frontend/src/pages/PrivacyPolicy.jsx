import {
  Shield,
  Lock,
  Database,
  UserCheck,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";

import "../styles/privacy.css";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-page">

      {/* Hero */}
      <div className="privacy-hero">
        

        <h1>Privacy Policy</h1>

        <p>
          At <strong>Burdwan Scan Centre</strong>, protecting your personal and
          medical information is our highest priority. This Privacy Policy
          explains how we collect, use, store, and safeguard your information
          whenever you visit our website or use our healthcare services.
        </p>

        <div className="last-updated">
          <Calendar size={18} />
          Last Updated : July 2026
        </div>
      </div>

      {/* Company */}
      <div className="privacy-card">

        <h2>Company Information</h2>

        <div className="company-grid">

          <div className="company-item">
            <Shield size={24} />
            <div>
              <h4>Company</h4>
              <p>Burdwan Scan Centre</p>
            </div>
          </div>

          <div className="company-item">
            <MapPin size={24} />
            <div>
              <h4>Location</h4>
              <p>Burdwan, West Bengal, India</p>
            </div>
          </div>

          <div className="company-item">
            <Mail size={24} />
            <div>
              <h4>Email</h4>
              <p>bscpl_bdn@rediffmail.com</p>
            </div>
          </div>

          <div className="company-item">
            <Phone size={24} />
            <div>
              <h4>Phone</h4>
              <p>+91 0342-2567533</p>
            </div>
          </div>

        </div>
      </div>

      {/* Sections */}

      <div className="privacy-grid">

        <div className="privacy-card">

          <div className="section-title">
            <Database />
            Information We Collect
          </div>

          <ul>

            <li>
              Personal details such as your name, mobile number, email address,
              age, and gender.
            </li>

            <li>
              Appointment booking details and healthcare service requests.
            </li>

            <li>
              Diagnostic reports, prescriptions, and uploaded medical documents
              where required.
            </li>

            <li>
              Device information, browser details, and website usage analytics
              to improve user experience.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <UserCheck />
            How We Use Your Information
          </div>

          <ul>

            <li>Schedule appointments and diagnostic services.</li>

            <li>Generate invoices and payment confirmations.</li>

            <li>Provide laboratory reports securely.</li>

            <li>Respond to patient queries and support requests.</li>

            <li>
              Improve our website performance and healthcare services.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <CreditCard />
            Payment Security
          </div>

          <ul>

            <li>
              Online payments are processed through secure payment gateways.
            </li>

            <li>
              We never store debit card, credit card, CVV, or UPI PIN
              information.
            </li>

            <li>
              Payment providers handle all sensitive financial information using
              encrypted systems.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <Lock />
            Data Protection
          </div>

          <ul>

            <li>
              Your medical records are stored using secure servers and
              appropriate protection measures.
            </li>

            <li>
              Access to patient information is restricted to authorized medical
              staff only.
            </li>

            <li>
              We regularly monitor our systems to maintain security and prevent
              unauthorized access.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <Shield />
            Sharing of Information
          </div>

          <ul>

            <li>
              We do not sell or rent your personal information to any third
              party.
            </li>

            <li>
              Information is shared only when legally required or necessary to
              provide healthcare services.
            </li>

            <li>
              Trusted service providers may process limited information under
              strict confidentiality agreements.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <CheckCircle />
            Your Rights
          </div>

          <ul>

            <li>Request correction of inaccurate personal information.</li>

            <li>Request access to your available records.</li>

            <li>Contact us regarding privacy-related concerns.</li>

            <li>
              Withdraw consent wherever legally applicable.
            </li>

          </ul>

        </div>

      </div>

      {/* Footer */}

      <div className="privacy-footer">

        <Shield size={40} />

        <h2>Your Privacy Matters</h2>

        <p>
          Burdwan Scan Centre is committed to maintaining the confidentiality,
          integrity, and security of every patient's personal and medical
          information. We continuously improve our security practices to ensure
          safe and reliable healthcare services.
        </p>

      </div>

    </section>
  );
}