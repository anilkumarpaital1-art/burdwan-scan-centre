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
  Cookie,
  Clock,
  Share2,
  FileEdit,
} from "lucide-react";

import "../styles/privacy.css";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-page">

      {/* Hero */}

      <div className="privacy-hero">

        <h1>Privacy Policy</h1>

        <p>
          <strong>Burdwan Scan Centre Pvt Ltd.</strong> respects your privacy
          and is committed to protecting your personal, medical, and
          healthcare-related information. This Privacy Policy explains how we
          collect, use, process, store, share, and protect information when you
          visit our website, book appointments, make payments, or use our
          diagnostic services.
        </p>

        <div className="last-updated">
          <Calendar size={18} />
          Effective Date: July 1, 2026
        </div>

      </div>


      {/* Company Information */}

      <div className="privacy-card">

        <h2>Company Information</h2>

        <div className="company-grid">

          <div className="company-item">

            <Shield size={24} />

            <div>
              <h4>Company</h4>
              <p>Burdwan Scan Centre Pvt Ltd.</p>
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
              <p>bscpl_bdn@rediffmail.com</p>
            </div>

          </div>


          <div className="company-item">

            <Phone size={24} />

            <div>
              <h4>Phone</h4>
              <p>0342-2550829 / 2567533</p>
            </div>

          </div>

        </div>

      </div>


      {/* Privacy Policy Sections */}

      <div className="privacy-grid">


        {/* Information Collection */}

        <div className="privacy-card">

          <div className="section-title">
            <Database />
            Information We Collect
          </div>

          <ul>

            <li>
              Personal information such as your name, age, gender, address,
              mobile number, and email address.
            </li>

            <li>
              Appointment details, booking information, selected diagnostic
              services, and healthcare service requests.
            </li>

            <li>
              Medical history, prescriptions, diagnostic information, reports,
              and medical documents provided by patients where necessary for
              delivering diagnostic services.
            </li>

            <li>
              Transaction information such as payment status, transaction
              reference number, and payment confirmation details.
            </li>

            <li>
              Website usage information including browser type, device
              information, IP address, pages visited, and website interaction
              data where applicable.
            </li>

          </ul>

        </div>


        {/* Information Usage */}

        <div className="privacy-card">

          <div className="section-title">
            <UserCheck />
            How We Use Your Information
          </div>

          <ul>

            <li>
              Schedule, manage, confirm, and provide diagnostic appointments
              and healthcare services.
            </li>

            <li>
              Process diagnostic tests and generate and deliver patient reports.
            </li>

            <li>
              Process payments and provide invoices, receipts, and payment
              confirmations.
            </li>

            <li>
              Communicate with patients regarding appointments, reports,
              service updates, and support requests.
            </li>

            <li>
              Maintain service records and comply with applicable legal,
              regulatory, and healthcare requirements.
            </li>

            <li>
              Improve the functionality, security, performance, and user
              experience of our website and services.
            </li>

          </ul>

        </div>


        {/* Medical Information */}

        <div className="privacy-card">

          <div className="section-title">
            <Lock />
            Medical & Sensitive Information
          </div>

          <ul>

            <li>
              Certain diagnostic services may require patients to provide
              medical history, prescriptions, previous reports, or other
              healthcare-related information.
            </li>

            <li>
              Such information is collected and processed only when necessary
              for providing diagnostic services, fulfilling medical
              requirements, or complying with applicable laws.
            </li>

            <li>
              Access to sensitive patient information is restricted to
              authorized personnel and service providers who require access for
              legitimate operational, medical, or legal purposes.
            </li>

          </ul>

        </div>


        {/* Payment Security */}

        <div className="privacy-card">

          <div className="section-title">
            <CreditCard />
            Payment Information & Security
          </div>

          <ul>

            <li>
              Online payments may be processed through authorized third-party
              payment gateway providers.
            </li>

            <li>
              Burdwan Scan Centre Pvt Ltd. does not directly store complete
              debit card numbers, credit card numbers, CVV details, UPI PINs,
              or internet banking passwords.
            </li>

            <li>
              Payment gateway providers process payment information according
              to their own security standards, privacy policies, and applicable
              legal requirements.
            </li>

            <li>
              We may retain limited transaction information such as payment
              status, transaction reference numbers, and payment confirmation
              details for accounting, support, refund, and legal purposes.
            </li>

          </ul>

        </div>


        {/* Data Protection */}

        <div className="privacy-card">

          <div className="section-title">
            <Shield />
            Data Protection & Security
          </div>

          <ul>

            <li>
              We implement reasonable technical, administrative, and
              organizational safeguards designed to protect personal and
              medical information.
            </li>

            <li>
              Access to sensitive information is restricted to authorized
              personnel based on legitimate operational and service
              requirements.
            </li>

            <li>
              We take reasonable measures to protect information against
              unauthorized access, disclosure, alteration, misuse, or loss.
            </li>

            <li>
              No internet-based system or electronic storage method can be
              guaranteed to be completely secure, and absolute security cannot
              be guaranteed.
            </li>

          </ul>

        </div>


        {/* Sharing */}

        <div className="privacy-card">

          <div className="section-title">
            <Share2 />
            Sharing of Information
          </div>

          <ul>

            <li>
              We do not sell or rent patients' personal or medical information.
            </li>

            <li>
              Information may be shared with doctors, consultants, diagnostic
              professionals, or authorized healthcare personnel involved in
              providing requested services.
            </li>

            <li>
              Limited information may be shared with trusted service providers
              including payment gateways, hosting providers, communication
              providers, and technology service providers where necessary.
            </li>

            <li>
              Information may be disclosed to government authorities, courts,
              law enforcement agencies, or regulatory bodies when required by
              applicable law or a lawful order.
            </li>

          </ul>

        </div>


        {/* Cookies */}

        <div className="privacy-card">

          <div className="section-title">
            <Cookie />
            Cookies & Website Analytics
          </div>

          <ul>

            <li>
              Our website may use cookies and similar technologies to support
              website functionality and improve user experience.
            </li>

            <li>
              Analytics services may collect information about website usage,
              browser type, device information, visited pages, and user
              interactions.
            </li>

            <li>
              Cookies may be managed or disabled through your browser settings,
              although disabling certain cookies may affect website
              functionality.
            </li>

          </ul>

        </div>


        {/* Data Retention */}

        <div className="privacy-card">

          <div className="section-title">
            <Clock />
            Data Retention
          </div>

          <ul>

            <li>
              Personal, medical, appointment, transaction, and service-related
              information may be retained for as long as reasonably necessary
              to provide services.
            </li>

            <li>
              Information may also be retained to comply with applicable
              healthcare, accounting, taxation, regulatory, contractual, and
              legal obligations.
            </li>

            <li>
              Certain medical and transaction records may be retained even
              after a deletion request where retention is required or permitted
              under applicable law.
            </li>

          </ul>

        </div>


        {/* Patient Rights */}

        <div className="privacy-card">

          <div className="section-title">
            <CheckCircle />
            Your Privacy Rights
          </div>

          <ul>

            <li>
              Request access to personal information available with us, subject
              to applicable laws and verification requirements.
            </li>

            <li>
              Request correction or updating of inaccurate or incomplete
              personal information.
            </li>

            <li>
              Request deletion of eligible personal information, subject to
              applicable medical-record retention, legal, regulatory, and
              contractual requirements.
            </li>

            <li>
              Withdraw consent for certain processing activities where
              withdrawal is permitted under applicable law.
            </li>

            <li>
              Contact us to raise concerns or complaints regarding the handling
              of personal information.
            </li>

          </ul>

        </div>


        {/* Policy Updates */}

        <div className="privacy-card">

          <div className="section-title">
            <FileEdit />
            Changes to This Privacy Policy
          </div>

          <ul>

            <li>
              We may update this Privacy Policy periodically to reflect changes
              in our services, website functionality, operational practices, or
              applicable legal requirements.
            </li>

            <li>
              Updated versions of this Privacy Policy will be published on this
              page with the revised effective date or last updated date.
            </li>

            <li>
              We encourage users to review this Privacy Policy periodically.
            </li>

          </ul>

        </div>

      </div>


      {/* Contact Section */}

      <div className="privacy-card">

        <div className="section-title">
          <Mail />
          Contact for Privacy Concerns
        </div>

        <p>
          If you have questions, concerns, complaints, or requests regarding
          this Privacy Policy or the handling of your personal information,
          please contact us using the information below.
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


      {/* Footer */}

      <div className="privacy-footer">

        <Shield size={40} />

        <h2>Your Privacy Matters</h2>

        <p>
          Burdwan Scan Centre Pvt Ltd. is committed to handling personal and
          medical information responsibly and maintaining appropriate privacy
          and security practices. We continuously review our processes to
          provide secure, transparent, and reliable diagnostic services.
        </p>

      </div>

    </section>
  );
}