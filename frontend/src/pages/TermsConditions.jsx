import {
  FileText,
  Shield,
  Stethoscope,
  Calendar,
  CreditCard,
  Ban,
  RefreshCcw,
  AlertTriangle,
  Scale,
  Lock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";

import "../styles/privacy.css";

function TermsConditions() {
  return (
    <section className="privacy-page">

      {/* Hero */}

      <div className="privacy-hero">

      

        <h1>Terms & Conditions</h1>

        <p>
          Welcome to <strong>Burdwan Scan Centre</strong>. These Terms &
          Conditions govern the use of our website, online appointment booking,
          diagnostic services, and payment facilities. By using our services,
          you agree to comply with the terms described below.
        </p>

        <div className="last-updated">
          <Calendar size={18} />
          Effective Date : July 4, 2026
        </div>

      </div>

      {/* Company Information */}

      <div className="privacy-card">

        <h2>Company Information</h2>

        <div className="company-grid">

          <div className="company-item">
            <Shield size={24} />
            <div>
              <h4>Laboratory</h4>
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
              <p>info@burdwanscancentre.com</p>
            </div>
          </div>

          <div className="company-item">
            <Phone size={24} />
            <div>
              <h4>Phone</h4>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

        </div>

      </div>

      {/* Terms */}

      <div className="privacy-grid">

        <div className="privacy-card">

          <div className="section-title">
            <Stethoscope />
            Diagnostic Services
          </div>

          <ul>

            <li>
              All diagnostic tests are performed according to accepted medical
              standards and laboratory protocols.
            </li>

            <li>
              Test availability may vary depending on equipment maintenance,
              reagent availability, or medical requirements.
            </li>

            <li>
              Additional verification may be required before certain reports are
              released.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <CreditCard />
            Payments
          </div>

          <ul>

            <li>
              Payments can be made online using approved payment methods.
            </li>

            <li>
              Prices displayed on the website are subject to revision without
              prior notice.
            </li>

            <li>
              A booking is confirmed only after successful payment confirmation.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <Lock />
            Patient Responsibilities
          </div>

          <ul>

            <li>
              Patients must provide accurate personal and medical information.
            </li>

            <li>
              Patients should carefully follow fasting and preparation
              instructions before sample collection.
            </li>

            <li>
              Burdwan Scan Centre is not responsible for incorrect reports due
              to false or incomplete information provided by patients.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <Shield />
            Reports & Confidentiality
          </div>

          <ul>

            <li>
              Diagnostic reports are confidential and released only to
              authorized persons.
            </li>

            <li>
              Reports may be available online, by email, or collected directly
              from the laboratory.
            </li>

            <li>
              Patients should verify report details immediately upon receiving
              them.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <Scale />
            Limitation of Liability
          </div>

          <ul>

            <li>
              Test reports are intended to assist qualified medical
              professionals in diagnosis.
            </li>

            <li>
              Burdwan Scan Centre shall not be liable for treatment decisions
              taken solely based on laboratory reports without medical advice.
            </li>

            <li>
              Delays caused by circumstances beyond our control may affect
              report delivery times.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <CheckCircle />
            Changes to Terms
          </div>

          <ul>

            <li>
              These Terms & Conditions may be updated periodically.
            </li>

            <li>
              Continued use of our website constitutes acceptance of the updated
              terms.
            </li>

            <li>
              The latest version will always be available on our website.
            </li>

          </ul>

        </div>

      </div>

      {/* Refund Policy */}

      <div className="privacy-hero" style={{ paddingTop: 30 }}>

        <span className="privacy-badge">
          <RefreshCcw size={18} />
          Refund & Cancellation Policy
        </span>

        <p>
          At Burdwan Scan Centre, we strive to provide high-quality diagnostic
          services. This Refund & Cancellation Policy explains when
          cancellations and refunds may be processed for online bookings and
          payments.
        </p>

      </div>

      <div className="privacy-grid">

        <div className="privacy-card">

          <div className="section-title">
            <Ban />
            Cancellation of Bookings
          </div>

          <ul>

            <li>
              Patients may request cancellation before sample collection or
              before visiting the laboratory.
            </li>

            <li>
              Cancellation requests should be submitted through our customer
              support.
            </li>

            <li>
              Once the sample has been collected or testing has commenced,
              cancellations are generally not permitted.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <CheckCircle />
            Refund Eligibility
          </div>

          <ul>

            <li>Duplicate payment for the same booking.</li>

            <li>
              Technical or operational issues preventing completion of the
              booking.
            </li>

            <li>
              Approved cancellation before sample collection.
            </li>

            <li>
              Requested diagnostic test unavailable or cannot be performed.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <AlertTriangle />
            Refunds Not Applicable
          </div>

          <ul>

            <li>After sample collection.</li>

            <li>After laboratory testing has started.</li>

            <li>
              Incorrect patient information causing cancellation or delay.
            </li>

            <li>
              Failure to follow required pre-test instructions unless otherwise
              approved by the laboratory.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <RefreshCcw />
            Refund Processing
          </div>

          <ul>

            <li>
              Approved refunds will be returned to the original payment method.
            </li>

            <li>
              Refunds are generally initiated within 7 business days after
              approval.
            </li>

            <li>
              Processing time may vary depending on the bank or payment
              provider.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <CreditCard />
            Failed Transactions
          </div>

          <ul>

            <li>
              If payment is debited but booking is not confirmed, please contact
              our support team.
            </li>

            <li>
              After verification, the booking will either be confirmed or the
              payment refunded.
            </li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="section-title">
            <Phone />
            Contact Us
          </div>

          <ul>

            <li>Laboratory : Burdwan Scan Centre</li>

            <li>Address : Burdwan, West Bengal, India</li>

            <li>Email : info@burdwanscancentre.com</li>

            <li>Phone : +91 XXXXX XXXXX</li>

          </ul>

        </div>

      </div>

      {/* Footer */}

      <div className="privacy-footer">

        <FileText size={42} />

        <h2>Thank You for Choosing Burdwan Scan Centre</h2>

        <p>
          We are committed to delivering reliable diagnostic services with
          transparency, patient privacy, and fair operational policies. By
          using our website and laboratory services, you acknowledge that you
          have read, understood, and agreed to these Terms & Conditions and our
          Refund & Cancellation Policy.
        </p>

      </div>

    </section>
  );
}

export default TermsConditions;