import { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/expertsPage.css";
import API from "../config/api";

import SEO from "../components/seo/SEO";

const EXPERT_API = `${API}/api/experts`;

function Experts() {

  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExperts = async () => {
    try {

      const res = await axios.get(EXPERT_API);

      setExperts(
        [...res.data].sort(
          (a, b) => a.serialNo - b.serialNo
        )
      );

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperts();
  }, []);

  return (
  <>
    <SEO
      title="Our Medical Experts | Burdwan Scan Centre"
      description="Meet the experienced radiologists, pathologists and healthcare professionals at Burdwan Scan Centre dedicated to accurate diagnosis and compassionate patient care."
      keywords="Doctors Burdwan, Radiologist Burdwan, Pathologist Burdwan, Medical Experts, Burdwan Scan Centre"
      url="/experts"
    />

    <section className="experts-public-page">

      <div className="experts-public-header">

        <h1>Meet Our Medical Experts</h1>

        <p>
          Our experienced doctors and healthcare
          professionals are committed to providing
          accurate diagnosis and exceptional patient care.
        </p>

      </div>

      {loading ? (

        <div className="experts-public-loading">
          Loading Experts...
        </div>

      ) : (

        <div className="experts-public-grid">

          {experts.map((expert) => (

            <div
              className="experts-public-card"
              key={expert._id}
            >

              <div className="experts-public-image">

                {expert.photo ? (
                  <img
  src={expert.photo}
  alt={expert.name}
/>
                ) : (
                  <div className="experts-public-placeholder">
                    👨‍⚕️
                  </div>
                )}

              </div>

              <div className="experts-public-content">

                <div className="experts-public-header-row">

                  <div>

                    <h3>{expert.name}</h3>

                    {expert.designation && (
                      <span className="experts-public-designation">
                        {expert.designation}
                      </span>
                    )}

                  </div>

                  {expert.experience > 0 && (
                    <div className="experts-public-experience-badge">
                      {expert.experience}+ Years
                    </div>
                  )}

                </div>

                {expert.qualification && (
                  <p className="experts-public-qualification">
                    🎓 {expert.qualification}
                  </p>
                )}

                {expert.regNo && (
                  <p className="experts-public-reg-no">
                    Registration No: {expert.regNo}
                  </p>
                )}

              </div>

            </div>

          ))}

        </div>

      )}

        </section>
  </>
  );
}

export default Experts;