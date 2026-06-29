import { Link } from "react-router-dom";

import doctorImage from "../../assets/doctor.png";

import "../../styles/experts.css";

function ExpertsPreview() {
  return (
    <section className="experts-preview">

      <div className="experts-container">

        <div className="experts-left">

          <img
            src={doctorImage}
            alt="Medical Expert"
            className="experts-image"
          />

        </div>

        <div className="experts-right">

          <div className="experts-header">

            <h2>
              Meet Our Medical Experts
            </h2>

          </div>

          <p>
            Our experienced radiologists,
            consultants, technicians and healthcare
            professionals are committed to delivering
            accurate diagnostics and exceptional
            patient care.
          </p>

          <Link
  to="/experts"
  className="experts-btn"
>
  View Our Experts
  <span>↗</span>
</Link>

        </div>

      </div>

    </section>
  );
}

export default ExpertsPreview;