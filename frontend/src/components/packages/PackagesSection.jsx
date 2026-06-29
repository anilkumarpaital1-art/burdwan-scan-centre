import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  FaHeartbeat,
  FaStethoscope,
  FaHospital,
  FaUserMd,
  FaCheckCircle,
  FaTimes
} from "react-icons/fa";

import "../../styles/packages.css";

function PackagesSection() {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] =
    useState(null);

    const [flippedCard, setFlippedCard] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/packages`
        );

        setPackages(
          res.data.slice(0, 4)
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchPackages();
  }, []);

  const getIcon = (index) => {
    const icons = [
      <FaHeartbeat />,
      <FaStethoscope />,
      <FaHospital />,
      <FaUserMd />
    ];

    return icons[index % icons.length];
  };

  return (
    <>
      <section className="packages-section">

        <div className="section-title">
          <h2>Health Packages</h2>

          <p>
            Affordable healthcare packages for complete wellness.
          </p>
        </div>

        <div className="packages-grid desktop-packages">

          {packages.map((item, index) => (

            <div
  className={`package-card ${
    flippedCard === item._id ? "flipped" : ""
  }`}
  key={item._id}
  onClick={() => {

  if (window.innerWidth <= 768) {

    setFlippedCard(
      flippedCard === item._id
        ? null
        : item._id
    );

  }

}}
>

              <div className="package-inner">

                {/* FRONT */}

                <div className="package-front">

                  <div className="package-icon">
                    {getIcon(index)}
                  </div>

                  <h3>{item.title}</h3>

<div className="test-count">
  {item.testsIncluded?.length || 0} Tests Included
</div>

<div className="price-row">

  <span className="old-price">
    ₹{item.price}
  </span>

  <span className="new-price">
    ₹{item.discountedPrice}
  </span>

</div>
                </div>

                {/* BACK */}

                <div className="package-back">

                  <h4>
                    Package Includes
                  </h4>

                  <ul>

                    {item.testsIncluded
                      ?.slice(0, 5)
                      .map((test, i) => (

                        <li key={i}>
                          <FaCheckCircle />
                          <span>{test}</span>
                        </li>

                      ))}

                  </ul>

                  {item.testsIncluded?.length > 5 && (

                    <p className="more-tests">
                      +{item.testsIncluded.length - 5}
                      {" "}More Tests
                    </p>

                  )}

                  <div className="package-actions">

                    <button
  className="details-btn"
  onClick={(e) => {
    e.stopPropagation();
    setSelectedPackage(item);
  }}
>
                      View Details
                    </button>

                    <button
  className="book-btn"
  onClick={(e) => {
    e.stopPropagation();
    navigate("/book-appointment");
  }}
>
                      Book Test
                    </button>

                  </div>

                </div>

                

              </div>

            </div>

          ))}

        </div>

        {/* Mobile Packages Swiper */}
<Swiper
  className="mobile-packages-swiper"
  spaceBetween={20}
  slidesPerView={1.05}
>

  {packages.map((item, index) => (

    <SwiperSlide key={item._id}>

      <div
        className={`package-card ${
          flippedCard === item._id ? "flipped" : ""
        }`}
        onClick={() => {

          setFlippedCard(
            flippedCard === item._id
              ? null
              : item._id
          );

        }}
      >

        <div className="package-inner">

          {/* FRONT */}
          <div className="package-front">

            <div className="package-icon">
              {getIcon(index)}
            </div>

            <h3>{item.title}</h3>

            <div className="test-count">
              {item.testsIncluded?.length || 0}
              {" "}Tests Included
            </div>

            <div className="price-row">
              <span className="old-price">
                ₹{item.price}
              </span>

              <span className="new-price">
                ₹{item.discountedPrice}
              </span>
            </div>

          </div>

          {/* BACK */}
          <div className="package-back">

            <h4>Package Includes</h4>

            <ul>

              {item.testsIncluded
                ?.slice(0, 5)
                .map((test, i) => (

                  <li key={i}>
                    <FaCheckCircle />
                    <span>{test}</span>
                  </li>

              ))}

            </ul>

            <div className="package-actions">

              <button
                className="details-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPackage(item);
                }}
              >
                View Details
              </button>

              <button
                className="book-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/book-appointment");
                }}
              >
                Book Test
              </button>

            </div>

          </div>

        </div>

      </div>

    </SwiperSlide>

  ))}

</Swiper>

        <div className="packages-footer">

          <Link
            to="/packages"
            className="view-all-packages"
          >
            View All Packages →
          </Link>

        </div>

      </section>

      {/* PREMIUM MODAL */}

      {selectedPackage && (

        <div
          className="package-modal"
          onClick={() =>
            setSelectedPackage(null)
          }
        >

          <div
            className="package-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelectedPackage(null)
              }
            >
              <FaTimes />
            </button>

            <div className="modal-header">

  <h2>
    {selectedPackage.title}
  </h2>

  <div className="modal-price">

    <span className="modal-new">
      ₹{selectedPackage.discountedPrice}
    </span>

    <span className="modal-old">
      ₹{selectedPackage.price}
    </span>

  </div>

</div>

            <p className="modal-description">
              {selectedPackage.shortDescription}
            </p>

            <div className="modal-tests">

              {selectedPackage.testsIncluded?.map(
                (test, index) => (

                  <div
                    key={index}
                    className="modal-test"
                  >
                    <FaCheckCircle />
                    {test}
                  </div>

                )
              )}

            </div>

            <div className="modal-footer">

              <div className="modal-count">
  {selectedPackage.testsIncluded?.length} Tests Included
</div>

              <button
                className="modal-book-btn"
                onClick={() =>
                  navigate("/book-appointment")
                }
              >
                Book Now
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default PackagesSection;