import "../../styles/testimonials.css";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Excellent diagnostic services with modern equipment and fast reports."
  },
  {
    name: "Priya Das",
    review:
      "Very professional staff and clean environment. Highly recommended."
  },
  {
    name: "Amit Roy",
    review:
      "Affordable health packages and accurate medical testing."
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">

      <div className="section-title">
      

        <h2>
          Trusted By Our Patients
        </h2>
      </div>

      <div className="testimonials-grid">

        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <div className="testimonial-top">

              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <span className="verified">
                <FaCheckCircle />
                Verified
              </span>

            </div>

            <p className="review">
              {item.review}
            </p>

            <h4>
              {item.name}
            </h4>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;