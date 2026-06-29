import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../../styles/homeServices.css";

import {
  FaMicroscope,
  FaFlask,
  FaHeartbeat,
  FaVial
} from "react-icons/fa";

const serviceIcons = {
  Cytology: <FaMicroscope />,
  Histopathology: <FaFlask />,
  FNAC: <FaVial />,
  "Pathology Laboratory": <FaHeartbeat />
};

function ServicesSection() {

  const [services, setServices] = useState([]);

  useEffect(() => {
  const fetchServices = async () => {
    try {

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/services`
      );

      setServices(
        res.data.data.slice(0, 4)
      );

    } catch (error) {
      console.error(error);
    }
  };

  fetchServices();
}, []);

  return (

    <section className="services-section">

      <div className="section-title">

        <h2>
          Our Diagnostic Services
        </h2>

        <p>
          Comprehensive diagnostic and imaging
          services with modern medical technology.
        </p>

      </div>

      {/* Desktop */}
<div className="services-grid desktop-services">

  {services.map((service) => (

    <Link
      to="/services"
      className="service-home-card"
      key={service._id}
    >

      <div className="service-icon">
        {serviceIcons[service.title] || <FaMicroscope />}
      </div>

      <h3>{service.title}</h3>

      <p>
        {service.shortDescription?.substring(0, 80) ||
          "Advanced diagnostic service with accurate reporting."}
      </p>

      <div className="service-arrow">→</div>

    </Link>

  ))}

</div>

{/* Mobile Swipe */}
<Swiper
  className="mobile-services-swiper"
  spaceBetween={20}
  slidesPerView={1.1}
>

  {services.map((service) => (

    <SwiperSlide key={service._id}>

      <Link
        to="/services"
        className="service-home-card"
      >

        <div className="service-icon">
          {serviceIcons[service.title] || <FaMicroscope />}
        </div>

        <h3>{service.title}</h3>

        <p>
          {service.shortDescription?.substring(0, 80) ||
            "Advanced diagnostic service with accurate reporting."}
        </p>

        <div className="service-arrow">→</div>

      </Link>

    </SwiperSlide>

  ))}

</Swiper>


      <div className="view-all-container">

        <Link
          to="/services"
          className="view-all-btn"
        >
          View All Services
          <span>↗</span>
        </Link>

      </div>

    </section>

  );

}

export default ServicesSection;