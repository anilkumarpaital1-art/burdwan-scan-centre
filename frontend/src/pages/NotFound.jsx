import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

import "../styles/notFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-card">

        <div className="error-icon">
          <FaExclamationTriangle />
        </div>

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you're looking for doesn't exist,
          may have been moved, or the URL is incorrect.
        </p>

        <div className="error-buttons">

          <Link to="/" className="home-btn">
            <FaHome />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="back-btn"
          >
            <FaArrowLeft />
            Go Back
          </button>

        </div>

      </div>
    </section>
  );
}