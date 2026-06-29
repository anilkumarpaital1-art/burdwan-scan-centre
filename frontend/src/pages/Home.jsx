import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/services/ServicesSection";
import PackagesSection from "../components/packages/PackagesSection";
import AboutSection from "../components/about/AboutSection";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";
import ContactSection from "../components/contact/ContactSection";
import EquipmentSlider from "../components/equipment/EquipmentSlider";
import GallerySection from "../components/gallery/GallerySection";
import ExpertsPreview from "../components/experts/ExpertsPreview";
import NoticePreview from "../components/notice/NoticePreview";
import AccreditationSection from "../components/accreditation/AccreditationSection";
import API_URL from "../config/api";


function Home() {

  const location = useLocation();

  useEffect(() => {
  const saveVisitor = async () => {
    try {
      let visitorId =
        localStorage.getItem("visitorId");

      if (!visitorId) {
        visitorId = crypto.randomUUID();

        localStorage.setItem(
          "visitorId",
          visitorId
        );
      }

      await axios.post(
  `${API_URL}/api/visitors`,
  {
    visitorId,
  }
);
    } catch (error) {
      console.error(error);
    }
  };

  saveVisitor();
}, []);

useEffect(() => {

  if (!location.state?.scrollTo) return;

  const section = document.getElementById(
    location.state.scrollTo
  );

  if (section) {

    setTimeout(() => {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      window.history.replaceState(
        {},
        document.title
      );

    }, 100);

  }

}, [location]);

  return (
    <>

      <Hero />
      <AboutSection />
      <AccreditationSection />
      <ExpertsPreview />
      <ServicesSection />
      <EquipmentSlider />
      <GallerySection />
      <PackagesSection />
      <NoticePreview /> 
      <Testimonials />
      <ContactSection />
      <Footer />
      
    </>
  );
}

export default Home;