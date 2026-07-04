import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useCountUp from "../../hooks/useCountUp";

import aboutHero from "../assets/about/aboutHero.jpg";

import "../../styles/about.css";

  function AboutSection() {

  const [totalVisitors, setTotalVisitors] = useState(0);

  const establishedYear = 1992;
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - establishedYear;

  const experience = useCountUp(yearsExperience, 2000);

  const visitors = useCountUp(
    totalVisitors >= 1000
      ? Math.floor(totalVisitors / 500) * 500
      : totalVisitors,
    2500
  );

  const reports = useCountUp(100, 2000);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/visitors`
        );

        setTotalVisitors(res.data.totalVisitors);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVisitors();
  }, []);

  return (

    <section className="about-section">

      <div className="about-left">

        <img
  src={aboutHero}
  alt="Burdwan Scan Centre"
/>

      </div>

      <div className="about-right">

        <div className="about-header">

  <h2>About Us</h2>

  <Link
  to="/about"
  className="about-more-btn"
>
  ↗
</Link>

</div>

        <p>
          We provide advanced diagnostic and imaging services
          with modern medical technology and experienced
          healthcare professionals.
        </p>

        <p>
          Our mission is to deliver accurate reports,
          trusted healthcare, and patient-friendly service
          for every individual.
        </p>

        <div className="stats-container">

  <div className="stat-box">
    <h1>{experience}+</h1>
    <p>Years Experience</p>
  </div>

  <div className="stat-box">
    <h1>{visitors}+</h1>
    <p>Website Visitors</p>
  </div>

  <div className="stat-box">
    <h1>
      365 <span style={{ fontSize: "0.6em" }}>12/7</span>
    </h1>
    <p>Days Support</p>
  </div>

  <div className="stat-box">
    <h1>{reports}%</h1>
    <p>Accurate Reports</p>
  </div>

</div>

        

      </div>

    </section>

  );
}

export default AboutSection;