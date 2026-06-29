import "./../../styles/gallery.css";

import galleryData from "../../data/galleryData";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function GallerySection() {
  return (
    <section className="gallery-section">

      <div className="gallery-header">

        <h2>Explore Our Centre</h2>

        <p>
          A glimpse into our modern diagnostic facilities and
          patient care environment.
        </p>

      </div>

      <Swiper
        modules={[Autoplay, Pagination]}

        spaceBetween={30}

        slidesPerView={3}

        loop={true}

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

          1024: {
            slidesPerView: 3,
          },
        }}
      >

        {galleryData.map((item) => (

          <SwiperSlide key={item.id}>

            <div className="gallery-card">

              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">

                <h3>{item.title}</h3>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default GallerySection;