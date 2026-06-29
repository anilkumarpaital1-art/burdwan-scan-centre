import { useEffect, useState } from "react";
import axios from "axios";

import API from "../config/api";

import "../styles/servicesPage.css";

const SERVICE_API = `${API}/api/services`;

function Services() {
  const [premiumCategories, setPremiumCategories] = useState([]);
  const [activePremiumCategory, setActivePremiumCategory] = useState("All");
  const [selectedPremiumService, setSelectedPremiumService] = useState(null);
  const [premiumLoading, setPremiumLoading] = useState(true);

  

  const loadServices = async () => {
    try {
      const res = await axios.get(SERVICE_API);

      const grouped = {};

      res.data.data
        .filter(
          (service) =>
            service.status?.toLowerCase() === "active"
        )
        .forEach((service) => {
          const category =
            service.category || "General";

          if (!grouped[category]) {
            grouped[category] = [];
          }

          grouped[category].push(service);
        });

      const formattedCategories = Object.keys(
        grouped
      ).map((key) => ({
        category: key,
        services: grouped[key],
      }));

      setPremiumCategories(formattedCategories);
    } catch (error) {
      console.log(error);
    } finally {
      setPremiumLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const displayedServices =
    activePremiumCategory === "All"
      ? premiumCategories.flatMap(
          (category) => category.services
        )
      : premiumCategories.find(
          (category) =>
            category.category ===
            activePremiumCategory
        )?.services || [];

  if (premiumLoading) {
    return (
      <div className="diagnostic-loading-screen">
        Loading Services...
      </div>
    );
  }

  return (
    <div className="diagnostic-premium-page">

      {/* TOP HEADER */}

      <section className="diagnostic-top-header">

        <div className="diagnostic-top-header-content">

      
          <h1>
            Diagnostic Services
          </h1>

          <p>
            Explore our complete range of
            advanced diagnostic, pathology,
            radiology and healthcare services
            designed to deliver accurate,
            reliable and timely results.
          </p>

        </div>

      </section>

      {/* CATEGORY FILTERS */}

      <section className="diagnostic-filter-navbar">

        <div className="diagnostic-filter-scroll">

          <button
            onClick={() =>
              setActivePremiumCategory("All")
            }
            className={
              activePremiumCategory === "All"
                ? "diagnostic-filter-chip diagnostic-filter-chip-active"
                : "diagnostic-filter-chip"
            }
          >
            All Services
          </button>

          {premiumCategories.map((category) => (

            <button
              key={category.category}
              onClick={() =>
                setActivePremiumCategory(
                  category.category
                )
              }
              className={
                activePremiumCategory ===
                category.category
                  ? "diagnostic-filter-chip diagnostic-filter-chip-active"
                  : "diagnostic-filter-chip"
              }
            >
              {category.category}
            </button>

          ))}

        </div>

      </section>

      {/* RESULTS */}

      <section className="diagnostic-results-header">

        <h2>
          {activePremiumCategory === "All"
            ? "All Diagnostic Services"
            : activePremiumCategory}
        </h2>

        <span>
          {displayedServices.length} Services
        </span>

      </section>

      {/* SERVICES GRID */}

      <section className="diagnostic-service-grid">

        {displayedServices.map((service) => (

          <div
            key={service._id}
            className="diagnostic-service-card"
            onClick={() =>
              setSelectedPremiumService(service)
            }
          >

            <div className="diagnostic-service-image">

              <img
                src={service.image}
                alt={service.title}
              />

            </div>

            <div className="diagnostic-service-content">

              <div className="diagnostic-card-top">

                <span className="diagnostic-service-mini-tag">
                  {service.category}
                </span>


              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.shortDescription}
              </p>

              <button
  className="diagnostic-view-details-btn"
  onClick={(e) => {
    e.stopPropagation();
    setSelectedPremiumService(service);
  }}
>
  View Details
</button>

            </div>

          </div>

        ))}

      </section>

      {/* EMPTY STATE */}

      {displayedServices.length === 0 && (

        <div className="diagnostic-empty-state">

          <h3>
            No Services Found
          </h3>

          <p>
            No services are available under
            this category.
          </p>

        </div>

      )}

      {/* MODAL */}

      {selectedPremiumService && (

        <div
          className="diagnostic-modal-overlay"
          onClick={() =>
            setSelectedPremiumService(null)
          }
        >

          <div
            className="diagnostic-modal-box"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="diagnostic-modal-close"
              onClick={() =>
                setSelectedPremiumService(null)
              }
            >
              ✕
            </button>

            {/* HEADER */}

            <div className="diagnostic-modal-head">

              <span className="diagnostic-modal-category">
                {
                  selectedPremiumService.category
                }
              </span>

              <h2>
                {
                  selectedPremiumService.title
                }
              </h2>

            </div>

            {/* DESCRIPTION */}

            <div className="diagnostic-modal-description-box">

              <h3>
                Overview
              </h3>

              <p>
                {
                  selectedPremiumService.description
                }
              </p>

            </div>

            {/* BENEFITS + USES */}

            <div className="diagnostic-modal-grid">

              <div className="diagnostic-modal-card">

                <h3>
                  Benefits
                </h3>

                <ul>

                  {selectedPremiumService.benefits?.map(
                    (item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  )}

                </ul>

              </div>

              <div className="diagnostic-modal-card">

                <h3>
                  Uses
                </h3>

                <ul>

                  {selectedPremiumService.uses?.map(
                    (item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  )}

                </ul>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Services;