import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

// Replace with your GA4 Measurement ID
const MEASUREMENT_ID = "G-YBT9VG6HDJ";

// Initialize Google Analytics only once
ReactGA.initialize(MEASUREMENT_ID);

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: document.title,
    });
  }, [location]);

  return null;
}

export default Analytics;