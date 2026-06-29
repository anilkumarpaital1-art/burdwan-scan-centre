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

const features = [
  {
    icon: <FaAward />,
    title: "30+ Years of Excellence",
    text: "Delivering trusted diagnostic healthcare since 1992.",
  },
  {
    icon: <FaFlask />,
    title: "NABL Accredited",
    text: "Quality pathology services following standardized laboratory practices.",
  },
  {
    icon: <FaHospital />,
    title: "Advanced Diagnostics",
    text: "Modern imaging and pathology services under one roof.",
  },
];

const stats = [
  {
    value: "34+",
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
      "To become the most trusted diagnostic healthcare provider through innovation, quality and continuous improvement.",
  },
];

const values = [
  {
    icon: <FaCheckCircle />,
    title: "Accuracy",
    text: "Reliable diagnostic reporting backed by stringent quality standards.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity",
    text: "Transparent, ethical and responsible medical practices.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Patient First",
    text: "Every patient is treated with compassion and dignity.",
  },
  {
    icon: <FaMicroscope />,
    title: "Innovation",
    text: "Advanced diagnostic technology for better healthcare.",
  },
  {
    icon: <FaUserMd />,
    title: "Expertise",
    text: "Experienced specialists delivering dependable diagnostics.",
  },
  {
    icon: <FaAward />,
    title: "Excellence",
    text: "Committed to quality in every investigation we perform.",
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

          <p>
            Burdwan Scan Centre Pvt. Ltd. has been providing trusted
            diagnostic and imaging services for more than three decades,
            combining advanced technology, experienced specialists and
            compassionate patient care.
          </p>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="about-section">

  <div className="section-heading">
    <span>WHO WE ARE</span>

    <h2>
      Trusted Diagnostic Excellence Since 1992
    </h2>
  </div>

  <div className="about-text">

    <p>
      Burdwan Scan Centre Pvt. Ltd. is one of Eastern India's trusted
      diagnostic centres, delivering reliable imaging and pathology
      services since 1992.
    </p>

    <p>
      Equipped with advanced diagnostic technology, an NABL accredited
      pathology laboratory and an experienced team of specialists,
      we continue to provide accurate investigations while maintaining
      the highest standards of quality and ethics.
    </p>

  </div>

  <div className="feature-grid">

    {features.map((item,index)=>(
      <div className="feature-card" key={index}>

        <div className="feature-icon">
          {item.icon}
        </div>

        <h4>{item.title}</h4>

        <p>{item.text}</p>

      </div>
    ))}

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

        <div className="why-grid">

          <div className="why-card">

            <FaHospital />

            <h4>
              Advanced Imaging
            </h4>

          </div>

          <div className="why-card">

            <FaFlask />

            <h4>
              NABL Accredited Laboratory
            </h4>

          </div>

          <div className="why-card">

            <FaUserMd />

            <h4>
              Experienced Specialists
            </h4>

          </div>

          <div className="why-card">

            <FaShieldAlt />

            <h4>
              Quality Assurance
            </h4>

          </div>

          <div className="why-card">

            <FaHeartbeat />

            <h4>
              Patient First Care
            </h4>

          </div>

          <div className="why-card">

            <FaAward />

            <h4>
              Trusted Since 1992
            </h4>

          </div>

        </div>

      </section>



      {/* ================= LEADERSHIP ================= */}

      <section className="leaders-section">

        <div className="section-heading">

          <span>LEADERSHIP</span>

          <h2>
            Meet Our Leadership
          </h2>

        </div>

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

                <h3>
                  {leader.name}
                </h3>

                <p>
                  {leader.designation}
                </p>

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

        <div className="office-grid">

          {offices.map((office, index) => (

            <div
              key={index}
              className="office-card"
            >

              <FaMapMarkerAlt />

              <h3>

                {office.title}

              </h3>

              {office.address.map((line, i) => (

                <p key={i}>

                  {line}

                </p>

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
            Accuracy You Can Trust
          </h2>

          <p>

            Every investigation performed at Burdwan Scan Centre
            follows standardized quality protocols supported by
            experienced professionals and advanced diagnostic
            technology, ensuring dependable reports for clinicians
            and patients.

          </p>

        </div>

      </section>



      {/* ================= CTA ================= */}

      <section className="cta-section">

        <h2>

          Trusted Diagnostics.
          <br />
          Compassionate Healthcare.

        </h2>

        <p>

          For over three decades, Burdwan Scan Centre has remained
          committed to providing accurate diagnostics through
          technology, expertise and patient-first care.

        </p>

      </section>

    </div>

  );

}

export default AboutPage;