import {
  RefreshCcw,
  Calendar,
  Shield,
  MapPin,
  Mail,
  Phone,
  Clock,
  Ban,
  CheckCircle,
  AlertTriangle,
  CreditCard,
  XCircle,
  CalendarX,
  Building2,
  Receipt,
  FileText,
  Send,
} from "lucide-react";

import "../styles/privacy.css";

export default function RefundCancellationPolicy() {
  return (
    <section className="privacy-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="privacy-hero">

        <h1>Refund & Cancellation Policy</h1>

        <p>
          At <strong>Burdwan Scan Centre Pvt Ltd.</strong>, we strive to provide
          reliable and high-quality diagnostic services. This Refund &
          Cancellation Policy explains the conditions applicable to appointment
          cancellations, refund eligibility, non-refundable circumstances,
          failed transactions, refund processing, and cancellations initiated
          by the diagnostic centre.
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
                7, R B Ghosh Road, Khoshbagan,
                Burdwan - 713101, West Bengal, India
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
          POLICY SECTIONS
      ===================================================== */}

      <div className="privacy-grid">


        {/* APPOINTMENT CANCELLATION */}

        <div className="privacy-card">

          <div className="section-title">
            <CalendarX />
            Appointment Cancellation
          </div>

          <ul>

            <li>
              Patients may request cancellation of an appointment up to
              24 hours before the scheduled appointment time.
            </li>

            <li>
              Cancellation requests may be submitted by contacting Burdwan
              Scan Centre Pvt Ltd. through the official phone numbers or other
              cancellation facilities made available on our website.
            </li>

            <li>
              Patients requesting cancellation should provide accurate booking
              information so that the appointment can be identified and
              verified.
            </li>

            <li>
              Cancellation of an appointment does not automatically guarantee
              a refund. Refund eligibility will be determined according to
              this Refund & Cancellation Policy.
            </li>

          </ul>

        </div>


        {/* LATE CANCELLATION */}

        <div className="privacy-card">

          <div className="section-title">
            <Clock />
            Late Cancellation
          </div>

          <ul>

            <li>
              Cancellation requests received within 24 hours of the scheduled
              appointment time may be subject to applicable cancellation
              charges or refund restrictions.
            </li>

            <li>
              Refund eligibility for late cancellations may depend on the
              diagnostic service booked, preparation completed by the centre,
              operational costs incurred, and other relevant circumstances.
            </li>

            <li>
              Emergency or exceptional cancellation requests may be reviewed
              on a case-by-case basis at the discretion of Burdwan Scan Centre
              Pvt Ltd., subject to applicable law.
            </li>

          </ul>

        </div>


        {/* NO SHOW */}

        <div className="privacy-card">

          <div className="section-title">
            <XCircle />
            No-Show Policy
          </div>

          <ul>

            <li>
              A patient may be considered a no-show when the patient fails to
              attend the scheduled appointment without providing a valid
              cancellation request within the applicable cancellation period.
            </li>

            <li>
              In the event of a no-show, the booking amount may be forfeited
              and may not be eligible for a refund.
            </li>

            <li>
              Requests relating to exceptional circumstances may be reviewed
              individually by Burdwan Scan Centre Pvt Ltd.
            </li>

          </ul>

        </div>


        {/* SERVICE COMMENCEMENT */}

        <div className="privacy-card">

          <div className="section-title">
            <Ban />
            Cancellation After Service Commencement
          </div>

          <ul>

            <li>
              Cancellation is generally not permitted once sample collection
              has been completed or laboratory testing has commenced.
            </li>

            <li>
              Cancellation is generally not permitted after an imaging scan,
              diagnostic procedure, consultation, or other booked service has
              commenced or been completed.
            </li>

            <li>
              Where resources, consumables, contrast materials, medicines, or
              other service-specific items have already been used or prepared,
              cancellation and refund eligibility may be restricted.
            </li>

          </ul>

        </div>


        {/* REFUND ELIGIBILITY */}

        <div className="privacy-card">

          <div className="section-title">
            <CheckCircle />
            Refund Eligibility
          </div>

          <ul>

            <li>
              A duplicate payment has been successfully charged for the same
              appointment, service, or transaction.
            </li>

            <li>
              Payment has been successfully completed, but the booked service
              cannot be provided by Burdwan Scan Centre Pvt Ltd.
            </li>

            <li>
              An appointment is cancelled within the eligible cancellation
              period and satisfies the conditions of this Policy.
            </li>

            <li>
              Burdwan Scan Centre Pvt Ltd. cancels a booked service and the
              patient does not accept the offered rescheduling option.
            </li>

            <li>
              A refund is otherwise approved by Burdwan Scan Centre Pvt Ltd.
              after verification of the booking, payment, and circumstances of
              the request.
            </li>

          </ul>

        </div>


        {/* NON REFUNDABLE */}

        <div className="privacy-card">

          <div className="section-title">
            <AlertTriangle />
            Non-Refundable Cases
          </div>

          <ul>

            <li>
              The diagnostic test, scan, procedure, consultation, or other
              booked service has already been performed or completed.
            </li>

            <li>
              A patient sample has already been collected or laboratory
              testing has commenced.
            </li>

            <li>
              A diagnostic report has already been generated or issued, where
              applicable.
            </li>

            <li>
              The patient fails to attend the scheduled appointment and is
              treated as a no-show under this Policy.
            </li>

            <li>
              The patient requests cancellation outside the permitted
              cancellation period and the refund request is not otherwise
              approved.
            </li>

            <li>
              The service cannot be properly completed due to inaccurate,
              incomplete, or misleading information provided by the patient,
              subject to applicable circumstances and law.
            </li>

          </ul>

        </div>


        {/* CENTRE CANCELLATION */}

        <div className="privacy-card">

          <div className="section-title">
            <Building2 />
            Centre-Initiated Cancellation or Rescheduling
          </div>

          <ul>

            <li>
              Burdwan Scan Centre Pvt Ltd. may cancel or reschedule an
              appointment due to equipment failure, equipment maintenance,
              doctor or specialist unavailability, operational issues,
              emergency situations, medical requirements, or circumstances
              beyond our reasonable control.
            </li>

            <li>
              Where reasonably possible, affected patients will be offered an
              alternative appointment date or time.
            </li>

            <li>
              If Burdwan Scan Centre Pvt Ltd. cancels a prepaid service and the
              patient does not accept the available rescheduling option, an
              eligible refund may be processed.
            </li>

          </ul>

        </div>


        {/* FAILED TRANSACTIONS */}

        <div className="privacy-card">

          <div className="section-title">
            <CreditCard />
            Failed or Incomplete Transactions
          </div>

          <ul>

            <li>
              If a payment amount is debited from the patient's account but the
              appointment or booking is not confirmed, the patient should
              contact us with the relevant payment and booking information.
            </li>

            <li>
              The transaction will be verified using available payment gateway,
              banking, and booking records.
            </li>

            <li>
              After successful verification, the booking may be confirmed or
              an eligible refund may be initiated, as applicable.
            </li>

            <li>
              Certain failed, pending, or reversed transactions may be
              automatically processed by the bank, card issuer, UPI provider,
              or payment gateway according to their own processing timelines.
            </li>

          </ul>

        </div>


        {/* REFUND PROCESSING */}

        <div className="privacy-card">

          <div className="section-title">
            <RefreshCcw />
            Refund Processing Time
          </div>

          <ul>

            <li>
              Approved refunds will generally be initiated within 5 to 7
              working days after approval and successful verification of the
              refund request.
            </li>

            <li>
              The time required for the refunded amount to appear in the
              patient's account may depend on the bank, card issuer, payment
              gateway, UPI provider, or other payment service provider.
            </li>

            <li>
              Burdwan Scan Centre Pvt Ltd. is not responsible for additional
              processing delays caused solely by banks or third-party payment
              service providers after the refund has been successfully
              initiated.
            </li>

          </ul>

        </div>


        {/* MODE OF REFUND */}

        <div className="privacy-card">

          <div className="section-title">
            <Receipt />
            Mode of Refund
          </div>

          <ul>

            <li>
              Eligible online payments will generally be refunded to the
              original payment method or payment source used for the
              transaction.
            </li>

            <li>
              Cash payments may be refunded through cash, bank transfer, or
              another approved refund method after verification, where
              applicable.
            </li>

            <li>
              Patients may be required to provide reasonable information or
              documentation necessary to verify the payment and process the
              refund.
            </li>

            <li>
              Refunds will be processed only after the request has been
              reviewed and approved according to this Policy.
            </li>

          </ul>

        </div>


        {/* REFUND REQUEST */}

        <div className="privacy-card">

          <div className="section-title">
            <Send />
            How to Request a Cancellation or Refund
          </div>

          <ul>

            <li>
              Contact Burdwan Scan Centre Pvt Ltd. using the official contact
              information provided on this page.
            </li>

            <li>
              Provide the patient's name and registered mobile number used for
              the appointment or booking.
            </li>

            <li>
              Provide the appointment number, booking ID, invoice number, or
              other available booking reference.
            </li>

            <li>
              For online payments, provide the transaction ID, payment
              reference number, or other relevant payment information where
              available.
            </li>

            <li>
              Provide the name of the booked test or diagnostic service and a
              clear reason for requesting cancellation or refund.
            </li>

          </ul>

        </div>


        {/* POLICY CHANGES */}

        <div className="privacy-card">

          <div className="section-title">
            <FileText />
            Changes to This Policy
          </div>

          <ul>

            <li>
              Burdwan Scan Centre Pvt Ltd. may update this Refund &
              Cancellation Policy periodically to reflect changes in services,
              payment processes, operational requirements, or applicable legal
              requirements.
            </li>

            <li>
              Updated versions of this Policy will be published on this page
              with the applicable effective date or last updated date.
            </li>

            <li>
              Patients and website users are encouraged to review this Policy
              before booking appointments or making payments.
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
          Contact for Cancellation & Refund Requests
        </div>

        <p>
          To request an appointment cancellation, submit a refund request, or
          ask questions regarding this Refund & Cancellation Policy, please
          contact Burdwan Scan Centre Pvt Ltd. using the information below.
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

        <RefreshCcw size={42} />

        <h2>Clear & Fair Refund Practices</h2>

        <p>
          Burdwan Scan Centre Pvt Ltd. is committed to maintaining transparent
          cancellation and refund procedures for our patients. Refund requests
          are reviewed according to service status, cancellation timing,
          payment verification, and the conditions described in this Refund &
          Cancellation Policy.
        </p>

      </div>

    </section>
  );
}