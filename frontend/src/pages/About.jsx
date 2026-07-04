import {
  FaAward,
  FaBullseye,
  FaCheckCircle,
  FaEye,
  FaFlask,
  FaHeartbeat,
  FaHospital,
  FaMapMarkerAlt,
  FaMicroscope,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";

import aboutHero from "../assets/about/aboutHero.jpg";
import founder from "../assets/about/subhomoy-nag.jpg";
import director from "../assets/about/anamika-nag.jpg";

import "../styles/aboutPage.css";

import SEO from "../components/seo/SEO";

const establishedYear = 1992;
const currentYear = new Date().getFullYear();
const yearsOfExcellence = currentYear - establishedYear;

const features = [
  {
    icon: <FaAward />,
    title: `${yearsOfExcellence}+ Years of Excellence`,
    text: "Delivering trusted diagnostic healthcare with uncompromising quality since 1992.",
  },
  {
    icon: <FaFlask />,
    title: "NABL Accredited Laboratory",
    text: "Quality assured laboratory services that follow nationally recognized standards.",
  },
  {
    icon: <FaHospital />,
    title: "Advanced Diagnostics",
    text: "Comprehensive imaging and pathology services supported by modern technology.",
  },
];



const stats = [
  {
  value: `${yearsOfExcellence}+`,
  label: "Years of Excellence",
},
  {
    value: "NABL",
    label: "Accredited Laboratory",
  },
  {
    value: "30K+",
    label: "Patients Served",
  },
  {
    value: "365",
    label: "Days of Patient Care",
  },
];

const missionVision = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    text:
      "To provide reliable, accurate and affordable diagnostic services through advanced technology, ethical practices and compassionate patient care.",
  },
  {
    icon: <FaEye />,
    title: "Our Vision",
    text:
      "To become Eastern India's most trusted diagnostic healthcare provider through innovation, quality and continuous improvement.",
  },
];

const values = [
  {
    icon: <FaCheckCircle />,
    title: "Accuracy",
    text: "Every report is produced with precision and strict quality standards.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity",
    text: "Ethical practices, transparency and honesty guide every investigation.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Patient First",
    text: "Every patient deserves compassionate care, respect and comfort.",
  },
  {
    icon: <FaMicroscope />,
    title: "Innovation",
    text: "Advanced technology that supports better clinical decisions.",
  },
  {
    icon: <FaUserMd />,
    title: "Expertise",
    text: "Experienced specialists delivering dependable diagnostic excellence.",
  },
  {
    icon: <FaAward />,
    title: "Excellence",
    text: "Committed to continuous improvement in every service we provide.",
  },
];

const leaders = [
  {
    image: founder,
    name: "Dr. Subhomoy Nag",
    designation: "Founder & Managing Director",
  },
  {
    image: director,
    name: "Mrs. Anamika Nag",
    designation: "Director",
  },
];

const offices = [
  {
    title: "Head Office",
    address: [
      "7, R.B. Ghosh Road",
      "Khoshbagan",
      "Burdwan - 713101",
      "West Bengal",
    ],
  },
  {
    title: "Registered Office",
    address: [
      "DB-33, Flat 312",
      "Salt Lake City",
      "Kolkata - 700064",
      "West Bengal",
    ],
  },
];

function AboutPage() {
 return (
  <>
    <SEO
      title="About Burdwan Scan Centre"
      description="Learn about Burdwan Scan Centre, our history since 1992, NABL accredited laboratory, experienced specialists, advanced diagnostic technology, and commitment to quality healthcare."
      keywords="About Burdwan Scan Centre, Diagnostic Centre Burdwan, NABL Laboratory Burdwan, MRI, CT Scan, Pathology, Healthcare"
      url="/about"
    />

    <div className="aboutpg">

      {/* ================= HERO ================= */}

      <section
        className="aboutpg-hero"
        style={{
          backgroundImage: `url(${aboutHero})`,
        }}
      >
        <div className="aboutpg-overlay">

          <span>
            ESTABLISHED IN 1992
          </span>

          <h1>
            About Burdwan
            <br />
            Scan Centre
          </h1>

          <h3
            style={{
              color: "#fff",
              fontWeight: "600",
              margin: "18px 0",
              letterSpacing: ".5px",
            }}
          >
            Burdwan's Trusted NABL Accredited Diagnostics Centre.
          </h3>

          <p>
            For more than three decades, Burdwan Scan Centre Pvt. Ltd.
            has been delivering trusted diagnostic and imaging services,
            combining advanced technology, experienced specialists and
            compassionate patient care to help every patient make informed
            healthcare decisions with confidence.
          </p>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

<section className="about-section">

  <div className="about-container">

    <div className="section-heading">

      <span>WHO WE ARE</span>

      <h2>
        Trusted Diagnostic Excellence
        <br />
        Since 1992
      </h2>

    </div>

    <div className="about-content">

      <div className="about-tagline">
        Precision. Care. Trust.
      </div>

      <p>
        Burdwan Scan Centre Pvt. Ltd. is one of Eastern India's trusted
        diagnostic centres, providing high-quality imaging and pathology
        services with a commitment to clinical excellence since 1992.
      </p>

      <p>
        Equipped with advanced diagnostic technology, an NABL accredited
        pathology laboratory and an experienced team of healthcare
        professionals, we ensure accurate investigations while maintaining
        the highest standards of quality, safety and ethics.
      </p>

    </div>

    <div className="feature-grid">

      {features.map((item, index) => (

        <div
          key={index}
          className="feature-card"
        >

          <div className="feature-icon">

            {item.icon}

          </div>

          <h3>

            {item.title}

          </h3>

          <p>

            {item.text}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* ================= STATS ================= */}

      <section className="stats-section">

        {stats.map((item, index) => (

          <div
            key={index}
            className="stat-card"
          >

            <h2>{item.value}</h2>

            <p>{item.label}</p>

          </div>

        ))}

      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="purpose-section">

        <div className="section-heading">

          <span>OUR PURPOSE</span>

          <h2>
            Mission & Vision
          </h2>

        </div>

       <p
  style={{
    textAlign: "center",
    color: "var(--primary)",
    fontWeight: "700",
    fontSize: "1.15rem",
    margin: "22px auto 55px",
    letterSpacing: ".3px",
  }}
>
          Accurate Results. Better Care.
        </p>

        <div className="purpose-grid">

          {missionVision.map((item, index) => (

            <div
              key={index}
              className="purpose-card"
            >

              <div className="purpose-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= VALUES ================= */}

      <section className="values-section">

        <div className="section-heading">

          <span>OUR VALUES</span>

          <h2>
            Principles That Guide Us
          </h2>

        </div>

        <div className="values-grid">

          {values.map((item, index) => (

            <div
              key={index}
              className="value-card"
            >

              <div className="value-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>
            {/* ================= WHY CHOOSE US ================= */}

      <section className="why-section">

        <div className="section-heading">

          <span>WHY CHOOSE US</span>

          <h2>
            Why Patients Trust Burdwan Scan Centre
          </h2>

        </div>

        <p
  style={{
    textAlign: "center",
    color: "var(--primary)",
    fontWeight: "700",
    fontSize: "1.15rem",
    margin: "22px auto 55px",
    letterSpacing: ".3px",
  }}
>
  Modern & Advanced Technology. Reliable Results.
</p>

        <div className="why-grid">

          <div className="why-card">

            <FaHospital />

            <h4>Advanced Imaging</h4>

            <p>
              State-of-the-art imaging systems delivering high-quality diagnostic
              results with precision.
            </p>

          </div>

          <div className="why-card">

            <FaFlask />

            <h4>NABL Accredited Laboratory</h4>

            <p>
              Every laboratory investigation follows stringent quality standards
              for dependable reporting.
            </p>

          </div>

          <div className="why-card">

            <FaUserMd />

            <h4>Experienced Specialists</h4>

            <p>
              Skilled doctors and laboratory professionals committed to clinical
              excellence.
            </p>

          </div>

          <div className="why-card">

            <FaShieldAlt />

            <h4>Quality Assurance</h4>

            <p>
              Every investigation is backed by standardized quality protocols and
              continuous monitoring.
            </p>

          </div>

          <div className="why-card">

            <FaHeartbeat />

            <h4>Patient-Centric Care</h4>

            <p>
              Compassionate service focused on comfort, confidence and better
              healthcare experiences.
            </p>

          </div>

          <div className="why-card">

            <FaAward />

            <h4>Trusted Since 1992</h4>

            <p>
              More than three decades of reliable diagnostics trusted by
              generations of families.
            </p>

          </div>

        </div>

      </section>



      {/* ================= LEADERSHIP ================= */}

      <section className="leaders-section">

        <div className="section-heading">

          <span>FOUNDER & LEADERSHIP</span>

          <h2>
            The Visionaries Behind Burdwan Scan Centre
          </h2>

        </div>

        <p
  style={{
    textAlign: "center",
    maxWidth: "760px",
    margin: "22px auto 55px",
    color: "#64748b",
    lineHeight: "1.9",
    fontSize: "1.08rem",
  }}
>
          Founded in 1992, Burdwan Scan Centre is built on a legacy of trust, integrity, and excellence. Inspired by the vision of our founding members, we remain committed to accurate diagnostics, advanced technology, and compassionate patient care.
        </p>

        <div className="leaders-grid">

          {leaders.map((leader, index) => (

            <div
              key={index}
              className="leader-card"
            >

              <img
                src={leader.image}
                alt={leader.name}
              />

              <div className="leader-content">

                <h3>{leader.name}</h3>

                <p>{leader.designation}</p>

              </div>

            </div>

          ))}

        </div>

      </section>



      {/* ================= OFFICES ================= */}

      <section className="office-section">

        <div className="section-heading">

          <span>OUR OFFICES</span>

          <h2>
            Corporate Presence
          </h2>

        </div>

       <p
  style={{
    textAlign: "center",
    color: "#64748b",
    maxWidth: "760px",
    margin: "22px auto 55px",
    lineHeight: "1.9",
    fontSize: "1.08rem",
  }}
>
          Serving patients across Burdwan and beyond through accessible
          diagnostic facilities and dedicated healthcare support.
        </p>

        <div className="office-grid">

          {offices.map((office, index) => (

            <div
              key={index}
              className="office-card"
            >

              <FaMapMarkerAlt />

              <h3>{office.title}</h3>

              {office.address.map((line, i) => (

                <p key={i}>{line}</p>

              ))}

            </div>

          ))}

        </div>

      </section>



      {/* ================= QUALITY ================= */}

      <section className="quality-section">

        <div className="quality-box">

          <span>
            QUALITY COMMITMENT
          </span>

          <h2>
            Certified Accuracy. Trusted Care.
          </h2>

          <h4
            style={{
              color: "#ffffff",
              margin: "20px 0",
              fontWeight: "700",
            }}
          >
            NABL Accredited Excellence in Diagnostics.
          </h4>

          <p>

            Every investigation performed at Burdwan Scan Centre follows
            standardized quality protocols, supported by experienced healthcare
            professionals and advanced diagnostic technology. Our commitment to
            accuracy ensures dependable reports that help clinicians make
            confident medical decisions while giving patients the assurance they
            deserve.

          </p>

        </div>

      </section>



      {/* ================= CTA ================= */}

      <section className="cta-section">

        <h2>

          Delivering Trust
          <br />
          Through Diagnostics.

        </h2>

        <p>

          From advanced imaging to comprehensive laboratory investigations,
          Burdwan Scan Centre remains dedicated to providing accurate
          diagnostics, compassionate care and dependable healthcare services
          for every family.

        </p>

        <h4
          style={{
            color: "#fff",
            marginTop: "25px",
            fontWeight: "600",
            letterSpacing: ".5px",
          }}
        >
          Your Health, Our Priority.
        </h4>

      </section>

 

      </div>
  </>
  );

}

export default AboutPage;