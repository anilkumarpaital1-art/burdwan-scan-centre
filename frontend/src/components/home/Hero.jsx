import "../../styles/home.css";
import homehero from "../../assets/homehero.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.45)
          ),
          url(${homehero})
        `
      }}
    >
      <div className="hero-content">
        <h1>
          Advanced Diagnostic <br />
          & Imaging Centre
        </h1>

        <p>
          Trusted healthcare and diagnostic services with
          modern technology and experienced specialists.
        </p>

        <button onClick={() => navigate("/appointment")}>
          Book Appointment
        </button>
      </div>
    </section>
  );
}

export default Hero;