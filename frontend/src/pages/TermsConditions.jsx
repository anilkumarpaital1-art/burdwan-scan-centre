import {
  FileText,
  Shield,
  Stethoscope,
  Calendar,
  UserCheck,
  Scale,
  Lock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  IndianRupee,
  FileCheck,
  RefreshCcw,
  Gavel,
} from "lucide-react";

import { Link } from "react-router-dom";

import "../styles/privacy.css";

export default function TermsConditions() {
  return (
    <section className="privacy-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="privacy-hero">

        <h1>Terms & Conditions</h1>

        <p>
          Welcome to <strong>Burdwan Scan Centre Pvt Ltd.</strong> These Terms
          & Conditions govern your access to and use of our website,
          appointment booking facilities, payment services, diagnostic
          services, health check-up packages, and other services provided by
          us. By accessing our website or availing our services, you agree to
          comply with these Terms & Conditions.
        </p>

        <div className="last-updated">
          <Calendar size={18} />
          Effective Date: July 1, 2026
        </div>

      </div>


      {/* =====================================================
          COMPANY INFORMATION
      ===================================================== */}

      <div className="privacy-card">

        <h2>Company Information</h2>

        <div className="company-grid">

          <div className="company-item">

            <Shield size={24} />

            <div>
              <h4>Company</h4>

              <p>
                Burdwan Scan Centre Pvt Ltd.
              </p>
            </div>

          </div>


          <div className="company-item">

            <MapPin size={24} />

            <div>
              <h4>Address</h4>

              <p>
                Burdwan, West Bengal, India
              </p>
            </div>

          </div>


          <div className="company-item">

            <Mail size={24} />

            <div>
              <h4>Email</h4>

              <p>
                bscpl_bdn@rediffmail.com
              </p>
            </div>

          </div>


          <div className="company-item">

            <Phone size={24} />

            <div>
              <h4>Phone</h4>

              <p>
                0342-2550829 / 2567533
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          TERMS SECTIONS
      ===================================================== */}

      <div className="privacy-grid">


        {/* SERVICES OFFERED */}

        <div className="privacy-card">

          <div className="section-title">
            <Stethoscope />
            Services Offered
          </div>

          <ul>

            <li>
              Burdwan Scan Centre Pvt Ltd. provides diagnostic and healthcare
              services including pathology laboratory testing, radiology,
              imaging services, and health check-up packages.
            </li>

            <li>
              Radiology and imaging services may include MRI, CT Scan, X-Ray,
              Ultrasound, Echo, Endoscopy, Colonoscopy, EEG, EMG, NCV, and
              other diagnostic procedures offered by the centre.
            </li>

            <li>
              Availability of diagnostic services may depend on medical
              requirements, equipment availability, qualified personnel,
              operating schedules, and applicable healthcare guidelines.
            </li>

            <li>
              Certain tests or diagnostic procedures may require a valid
              prescription, referral, prior consultation, preparation, or
              additional medical information.
            </li>

          </ul>

        </div>


        {/* APPOINTMENTS */}

        <div className="privacy-card">

          <div className="section-title">
            <Calendar />
            Appointments & Bookings
          </div>

          <ul>

            <li>
              Appointments may be booked through our website, by telephone, or
              directly at the diagnostic centre.
            </li>

            <li>
              Patients must provide accurate contact, personal, appointment,
              and service information when making a booking.
            </li>

            <li>
              Where advance payment is required, a booking will be considered
              confirmed only after successful payment confirmation.
            </li>

            <li>
              Patients should arrive at the diagnostic centre at the scheduled
              appointment time and follow any preparation instructions
              provided for the selected test or service.
            </li>

            <li>
              Late arrival may result in delay, cancellation, or rescheduling
              depending on service availability and operational requirements.
            </li>

          </ul>

        </div>


        {/* PRICING */}

        <div className="privacy-card">

          <div className="section-title">
            <IndianRupee />
            Pricing & Payments
          </div>

          <ul>

            <li>
              Prices for diagnostic services, tests, and health check-up
              packages are displayed or communicated in Indian Rupees (₹).
            </li>

            <li>
              Prices may be revised or updated without prior notice due to
              operational costs, medical requirements, service changes, or
              other applicable factors.
            </li>

            <li>
              Payments may be made using available online payment methods or
              approved payment methods available directly at the diagnostic
              centre.
            </li>

            <li>
              Online payments are processed through authorized third-party
              payment gateway providers.
            </li>

            <li>
              Burdwan Scan Centre Pvt Ltd. does not directly store complete
              debit card numbers, credit card numbers, CVV details, UPI PINs,
              or internet banking passwords.
            </li>

          </ul>

        </div>


        {/* REPORTS */}

        <div className="privacy-card">

          <div className="section-title">
            <FileCheck />
            Reports & Delivery
          </div>

          <ul>

            <li>
              Diagnostic reports may be delivered digitally, electronically,
              or physically depending on the type of diagnostic service and
              available delivery facilities.
            </li>

            <li>
              Estimated report delivery times are provided for convenience and
              may vary depending on test complexity, medical verification,
              sample requirements, technical conditions, or operational
              circumstances.
            </li>

            <li>
              Additional testing, verification, repeat sample collection, or
              medical review may be required before certain reports can be
              issued.
            </li>

            <li>
              Patients are responsible for verifying the personal information
              displayed on reports and should promptly notify the centre of
              any apparent errors.
            </li>

          </ul>

        </div>


        {/* CANCELLATION & REFUND */}

        <div className="privacy-card">

          <div className="section-title">
            <RefreshCcw />
            Cancellation & Refund
          </div>

          <ul>

            <li>
              Appointment cancellations, refund eligibility, non-refundable
              circumstances, failed transactions, refund processing periods,
              and related matters are governed by our separate Refund &
              Cancellation Policy.
            </li>

            <li>
              Patients should review the Refund & Cancellation Policy before
              completing an online booking or payment.
            </li>

          </ul>

          

        </div>


        {/* PATIENT RESPONSIBILITIES */}

        <div className="privacy-card">

          <div className="section-title">
            <UserCheck />
            Patient Responsibilities
          </div>

          <ul>

            <li>
              Patients must provide accurate, complete, and current personal,
              contact, medical, and appointment information.
            </li>

            <li>
              Patients must follow all fasting, medication, preparation,
              sample collection, and other instructions provided for diagnostic
              services.
            </li>

            <li>
              Patients should inform authorized healthcare personnel about
              relevant medical conditions, allergies, medications, pregnancy,
              implants, or other information that may affect a diagnostic
              procedure where applicable.
            </li>

            <li>
              Incorrect, incomplete, or misleading information provided by a
              patient may affect appointments, diagnostic procedures, test
              results, reports, or service delivery.
            </li>

          </ul>

        </div>


        {/* MEDICAL DISCLAIMER */}

        <div className="privacy-card">

          <div className="section-title">
            <Stethoscope />
            Medical Disclaimer
          </div>

          <ul>

            <li>
              Diagnostic reports and test results are intended to assist
              qualified healthcare professionals in clinical evaluation,
              diagnosis, monitoring, and treatment decisions.
            </li>

            <li>
              Diagnostic reports should not be treated as a substitute for
              professional medical consultation, diagnosis, or treatment.
            </li>

            <li>
              Patients should consult an appropriately qualified doctor or
              healthcare professional for interpretation of reports and
              medical advice.
            </li>

          </ul>

        </div>


        {/* LIMITATION OF LIABILITY */}

        <div className="privacy-card">

          <div className="section-title">
            <Scale />
            Limitation of Liability
          </div>

          <ul>

            <li>
              To the extent permitted by applicable law, Burdwan Scan Centre
              Pvt Ltd. shall not be responsible for indirect, incidental, or
              consequential losses resulting from the use of our website or
              diagnostic services.
            </li>

            <li>
              Burdwan Scan Centre Pvt Ltd. shall not be responsible for
              treatment decisions or medical actions taken solely on the basis
              of diagnostic reports without consultation with a qualified
              healthcare professional.
            </li>

            <li>
              Report delivery, appointments, or services may be delayed due to
              technical problems, equipment maintenance, emergencies, medical
              requirements, natural events, government restrictions, or other
              circumstances beyond our reasonable control.
            </li>

            <li>
              Nothing in these Terms & Conditions excludes or limits any
              liability that cannot legally be excluded or limited under
              applicable law.
            </li>

          </ul>

        </div>


        {/* PRIVACY */}

        <div className="privacy-card">

          <div className="section-title">
            <Lock />
            Privacy & Data Protection
          </div>

          <ul>

            <li>
              Personal, appointment, transaction, and medical information is
              handled according to our Privacy Policy and applicable legal
              requirements.
            </li>

            <li>
              Users and patients should review our Privacy Policy to understand
              how information may be collected, used, stored, shared, and
              protected.
            </li>

          </ul>

          <Link
            to="/privacy-policy"
            className="legal-policy-link"
          >
            View Privacy Policy
          </Link>

        </div>


        {/* CHANGES TO TERMS */}

        <div className="privacy-card">

          <div className="section-title">
            <FileText />
            Changes to These Terms
          </div>

          <ul>

            <li>
              Burdwan Scan Centre Pvt Ltd. may update these Terms & Conditions
              periodically to reflect changes in services, operational
              practices, website functionality, or applicable legal
              requirements.
            </li>

            <li>
              Updated Terms & Conditions will be published on this page with
              the applicable effective date or last updated date.
            </li>

            <li>
              Continued use of our website or services after updated Terms &
              Conditions become effective constitutes acceptance of the revised
              terms, subject to applicable law.
            </li>

          </ul>

        </div>


        {/* GOVERNING LAW */}

        <div className="privacy-card">

          <div className="section-title">
            <Gavel />
            Governing Law & Jurisdiction
          </div>

          <ul>

            <li>
              These Terms & Conditions shall be governed by and interpreted in
              accordance with the applicable laws of India.
            </li>

            <li>
              Subject to applicable law and any mandatory consumer dispute
              resolution requirements, disputes relating to these Terms &
              Conditions or our services shall be subject to the jurisdiction
              of the competent courts in Burdwan, West Bengal, India.
            </li>

          </ul>

        </div>


        {/* ACCEPTANCE OF TERMS */}

        <div className="privacy-card">

          <div className="section-title">
            <CheckCircle />
            Acceptance of Terms
          </div>

          <ul>

            <li>
              By accessing our website, booking an appointment, making a
              payment, or availing diagnostic services, you acknowledge that
              you have read and understood these Terms & Conditions.
            </li>

            <li>
              If you do not agree with these Terms & Conditions, you should not
              use the website's booking or payment facilities.
            </li>

          </ul>

        </div>

      </div>


      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <div className="privacy-card">

        <div className="section-title">
          <Phone />
          Contact Information
        </div>

        <p>
          If you have questions regarding these Terms & Conditions, our
          services, appointments, or related matters, please contact Burdwan
          Scan Centre Pvt Ltd. using the information below.
        </p>

        <ul>

          <li>
            <strong>Company:</strong> Burdwan Scan Centre Pvt Ltd.
          </li>

          <li>
            <strong>Address:</strong> 7, R B Ghosh Road, Khoshbagan,
            Burdwan - 713101, West Bengal, India
          </li>

          <li>
            <strong>Email:</strong> bscpl_bdn@rediffmail.com
          </li>

          <li>
            <strong>Phone:</strong> 0342-2550829 / 2567533
          </li>

        </ul>

      </div>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="privacy-footer">

        <FileText size={42} />

        <h2>Transparent Terms for Reliable Diagnostic Services</h2>

        <p>
          Burdwan Scan Centre Pvt Ltd. is committed to providing diagnostic
          services with transparency, responsible practices, patient privacy,
          and clear service policies. By using our website and services, you
          acknowledge that you have read and understood these Terms &
          Conditions.
        </p>

      </div>

    </section>
  );
}