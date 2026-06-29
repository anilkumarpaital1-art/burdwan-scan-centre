import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const token =
          localStorage.getItem("adminToken");

        if (!token) {
          setAuthenticated(false);
          setLoading(false);
          return;
        }

        await axios.get(
          `${API}/api/admin/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAuthenticated(true);

      } catch {

        localStorage.removeItem("adminToken");

        setAuthenticated(false);

      } finally {

        setLoading(false);

      }
    };

    verifyAdmin();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authenticated
    ? children
    : <Navigate to="/admin-login-bsc-2026" replace />;
};

export default ProtectedRoute;