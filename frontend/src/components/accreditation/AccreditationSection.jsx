import nablLogo from "../../assets/nabl.jpg";
import smfLogo from "../../assets/smf.jpg";



import "../../styles/accreditation.css";

function AccreditationSection() {

  const establishedYear = 1992;
const currentYear = new Date().getFullYear();
const yearsExperience = currentYear - establishedYear;

  return (
    <section className="accreditation-section">

      <div className="accreditation-header">
        <h2>Our Accreditations & Recognition</h2>
        <p>
          Trusted diagnostic services backed by accreditation,
          training excellence, and decades of experience.
        </p>
      </div>

      <div className="accreditation-grid">

        <div className="accreditation-card">
  <img
    src={nablLogo}
    alt="NABL"
    className="accreditation-logo"
  />

  <h3>NABL Accredited Laboratory</h3>
</div>

<div className="accreditation-card">
  <img
    src={smfLogo}
    alt="SMF"
    className="accreditation-logo"
  />

  <h3>DMLT / DRD Training Institution</h3>
</div>

<div className="accreditation-card">
  <div className="years-badge">
  <div className="years-number">
    {yearsExperience}
  </div>

  <div className="years-divider"></div>

  <div className="years-text">
    <span>Years of</span>
    <span>Diagnostic</span>
    <span>Excellence</span>
  </div>
</div>

<h3>{yearsExperience}+ Years Excellence</h3>
</div>

      </div>

    </section>
  );
}

export default AccreditationSection;