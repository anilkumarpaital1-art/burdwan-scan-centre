import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import {
  FaBriefcase,
  FaSearch,
  FaTimes,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaCheckCircle
} from "react-icons/fa";

import API from "../config/api";

import "../styles/jobVacancies.css";

import SEO from "../components/seo/SEO";

function JobVacancies() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const fetchJobs = useCallback(async () => {
    try {
      const res = await axios.get(`${API}/api/jobs`);

      const activeJobs = (res.data || []).filter(
        (job) => job.status === "active"
      );

      activeJobs.sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      );

      setJobs(activeJobs);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const filteredJobs = jobs.filter((job) =>
    job.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

return (
  <>
    <SEO
      title="Career Opportunities | Burdwan Scan Centre"
      description="Explore the latest career opportunities at Burdwan Scan Centre. Join our team of healthcare professionals dedicated to providing quality diagnostic services."
      keywords="Burdwan Scan Centre Careers, Jobs in Burdwan, Healthcare Jobs, Diagnostic Centre Jobs, Medical Careers"
      url="/job-vacancies"
    />

    <section className="job-page">

      {/* HERO */}

      <div className="job-hero">


        <h1>
          Career Opportunities
        </h1>

        <p>
          Join Burdwan Scan Centre and
          become part of a growing healthcare
          team dedicated to delivering quality
          diagnostic services.
        </p>

      </div>

      {/* SEARCH */}

      <div className="job-search">

        <FaSearch />

        <input
          type="text"
          placeholder="Search vacancies..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
        />

      </div>

      {/* LOADING */}

      {loading ? (

        <div className="job-loading">

          <div className="loader"></div>

          <p>
            Loading vacancies...
          </p>

        </div>

      ) : filteredJobs.length > 0 ? (

        <div className="job-grid">

          {filteredJobs.map((job) => (

            <div
              key={job._id}
              className="job-card"
            >

              <div className="job-card-top">

                <span className="job-status">
                  Active Opening
                </span>

              </div>

              <h3>
                {job.title}
              </h3>

              <div className="job-card-footer">

                <div className="job-last-date">

                  <FaCalendarAlt />

                  Apply Before

                  <strong>
                    {new Date(
                      job.lastDate
                    ).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      }
                    )}
                  </strong>

                </div>

                <button
                  className="view-job-btn"
                  onClick={() =>
                    setSelectedJob(job)
                  }
                >
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="job-empty">

          <FaBriefcase />

          <h3>
            No Vacancies Available
          </h3>

          <p>
            There are currently no active
            openings. Please check back
            later for future opportunities.
          </p>

        </div>

      )}

      {/* CONTACT */}

      <div className="career-contact">

        <div className="contact-content">

          <h2>
            Need More Information?
          </h2>

          <p>
            For recruitment related queries,
            feel free to contact our team.
          </p>

        </div>

        <div className="contact-details">

          <a
            href="tel:+919876543210"
            className="contact-item"
          >
            <FaPhoneAlt />
            +91 98765 43210
          </a>

          <a
            href="mailto:careers@burdwanscancentre.com"
            className="contact-item"
          >
            <FaEnvelope />
            careers@burdwanscancentre.com
          </a>

        </div>

      </div>

      {/* MODAL */}

      {selectedJob && (

        <div
          className="job-modal-overlay"
          onClick={() =>
            setSelectedJob(null)
          }
        >

          <div
            className="job-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close-job-modal"
              onClick={() =>
                setSelectedJob(null)
              }
            >
              <FaTimes />
            </button>

            <span className="modal-tag">
              <FaCheckCircle />
              Active Opening
            </span>

            <h2>
              {selectedJob.title}
            </h2>

            <div className="job-detail-block">

              <h4>
                Qualification
              </h4>

              <p>
                {
                  selectedJob.qualification
                }
              </p>

            </div>

            <div className="job-detail-block">

              <h4>
                Experience Required
              </h4>

              <p>
                {
                  selectedJob.experience
                }
              </p>

            </div>

            <div className="job-detail-block">

              <h4>
                Application Deadline
              </h4>

              <p>
                {new Date(
                  selectedJob.lastDate
                ).toLocaleDateString(
                  "en-IN",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  }
                )}
              </p>

            </div>

            <div className="job-modal-actions">

              <a
                href="tel:+919876543210"
                className="apply-btn"
              >
                <FaPhoneAlt />
                Call HR
              </a>

              <a
                href="mailto:careers@burdwanscancentre.com"
                className="secondary-btn"
              >
                <FaEnvelope />
                Email HR
              </a>

            </div>

          </div>

        </div>

      )}

    </section>

    </>

  );
}

export default JobVacancies;