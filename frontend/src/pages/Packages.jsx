import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import {
  FaSearch,
  FaTimes,
  FaCheckCircle,
  FaPhoneAlt,
  FaCalendarCheck
} from "react-icons/fa";

import API from "../config/api";

import "../styles/packagesPage.css";

function Packages() {

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedPackage,
    setSelectedPackage] =
    useState(null);

  const fetchPackages =
    useCallback(async () => {

      try {

        const res =
          await axios.get(
            `${API}/api/packages`
          );

        const activePackages =
          (res.data || []).filter(
            (pkg) =>
              pkg.status === "active"
          );

        setPackages(activePackages);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }, []);

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  const filteredPackages =
    packages.filter((pkg) =>
      pkg.title
        ?.toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

  return (

    <section className="pkg-page">

      {/* HERO */}

      <div className="pkg-hero">

        <h1>
          Health Packages
        </h1>

        <p>
          Explore our carefully
          designed diagnostic and
          preventive health check-up
          packages for every age group.
        </p>

      </div>

      {/* SEARCH */}

      <div className="pkg-search">

        <FaSearch />

        <input
          type="text"
          placeholder="Search packages..."
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

        <div className="pkg-loading">

          <div className="loader"></div>

          <p>
            Loading packages...
          </p>

        </div>

      ) : filteredPackages.length > 0 ? (

        <div className="pkg-grid">

          {filteredPackages.map((pkg) => {

            const savings =
              pkg.price -
              pkg.discountedPrice;

            return (

              <div
  className="pkg-card"
  key={pkg._id}
>

  <div className="pkg-card-top">

    <span className="pkg-category">
      {pkg.category}
    </span>

    <div className="pkg-discount">
      Save ₹{savings}
    </div>

  </div>

  <div className="pkg-content">

    <h3>{pkg.title}</h3>



  </div>

  <div className="pkg-footer">

    <div className="pkg-price-section">

      <span className="pkg-new-price">
        ₹{pkg.discountedPrice}
      </span>

      <span className="pkg-old-price">
        ₹{pkg.price}
      </span>

    </div>

    <div className="pkg-tests-count">

      <FaCheckCircle />

      {pkg.testsIncluded?.length} Tests Included

    </div>

    <button
      className="pkg-view-btn"
      onClick={() =>
        setSelectedPackage(pkg)
      }
    >
      View Details
    </button>

  </div>

</div>

            );
          })}
        </div>

      ) : (

        <div className="pkg-empty">

          <h3>
            No Packages Available
          </h3>

          <p>
            Health packages will
            appear here once they
            are added by the
            administrator.
          </p>

        </div>

      )}

      {/* CONTACT CTA */}

      <div className="pkg-contact">

        <h2>
          Need Help Choosing A Package?
        </h2>

        <p>
          Speak with our diagnostic
          team for guidance and
          recommendations.
        </p>

        <a
          href="tel:+919876543210"
          className="pkg-contact-btn"
        >
          <FaPhoneAlt />
          Call Centre
        </a>

      </div>

      {/* MODAL */}

     {/* MODAL */}

     {selectedPackage && (

  <div
    className="pkg-modal-overlay"
    onClick={() => setSelectedPackage(null)}
  >

    <div
      className="pkg-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="pkg-close-modal"
        onClick={() => setSelectedPackage(null)}
      >
        <FaTimes />
      </button>

      <span className="pkg-modal-category">
        {selectedPackage.category}
      </span>

      <h2 className="pkg-modal-title">
        {selectedPackage.title}
      </h2>

      

      <div className="pkg-modal-description">

        <h4>About This Package</h4>

        <p>
          {selectedPackage.shortDescription}
        </p>

      </div>

      <hr className="pkg-modal-divider" />

      <div className="pkg-modal-tests">

        <h4>Included Tests</h4>

        {selectedPackage.testsIncluded?.map(
          (test, index) => (

            <div
              key={index}
              className="pkg-test-row"
            >
              <FaCheckCircle />
              <span>{test}</span>
            </div>

          )
        )}

      </div>

      <hr className="pkg-modal-divider" />

      <div className="pkg-modal-price-section">

  <div className="pkg-price-main">

    <div className="pkg-modal-new-price">
      ₹{selectedPackage.discountedPrice}
    </div>

    <span className="pkg-price-label">
      Special Package Price
    </span>

  </div>

  <div className="pkg-price-meta">

    <div className="pkg-modal-old-price">
      ₹{selectedPackage.price}
    </div>

    <div className="pkg-modal-save">
      Save ₹
      {selectedPackage.price -
        selectedPackage.discountedPrice}
    </div>

  </div>

</div>

      <hr className="pkg-modal-divider" />

      <div className="pkg-actions">

        <a
          href="/appointment"
          className="pkg-book-btn"
        >
          <FaCalendarCheck />
          Book Appointment
        </a>

        <a
          href="tel:+919876543210"
          className="pkg-call-btn"
        >
          <FaPhoneAlt />
          Call Centre
        </a>

      </div>

    </div>

  </div>

)}
          

    </section>
  );
}

export default Packages;