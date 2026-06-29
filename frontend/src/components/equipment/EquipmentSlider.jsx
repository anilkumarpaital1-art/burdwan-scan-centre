import "../../styles/equipment.css";

import equipmentData from "../../data/equipmentData";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function EquipmentSlider() {

  return (
    <section className="equipment-section">

      <div className="equipment-header">

        <h2>
          Our Diagnostic Journey
        </h2>

        <p>
          Advanced medical technology introduced
          through the years at Burdwan Scan Centre.
        </p>

      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}

        centeredSlides={true}

        loop={true}

        speed={900}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}

        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
        }}

        modules={[Autoplay, Pagination]}

        className="equipment-swiper"
      >

        {equipmentData.map((machine, index) => (

          <SwiperSlide key={index}>

            <div className="equipment-card">

              <div className="equipment-image">

                <img
                  src={machine.image}
                  alt={machine.name}
                  loading="lazy"
                />

              </div>

              <div className="equipment-content">

                <span className="equipment-year">
                  {machine.year}
                </span>

                <h3>
                  {machine.name}
                </h3>

                <p>
                  {machine.description}
                </p>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}