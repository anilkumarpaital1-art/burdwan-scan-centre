import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUserShield } from "react-icons/fa";
import "../../admin/styles/adminLogin.css";
import API from "../../config/api";

const AdminLogin = () => {

  const navigate = useNavigate();

  useEffect(() => {
  const token =
    localStorage.getItem("adminToken");

  if (token) {
    navigate(
      "/admin-dashboard",
      { replace: true }
    );
  }
}, [navigate]);

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [showForgotModal, setShowForgotModal] =
  useState(false);

const [forgotEmail, setForgotEmail] =
  useState("");

const [forgotMessage, setForgotMessage] =
  useState("");

const [forgotLoading, setForgotLoading] =
  useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const response = await axios.post(
        `${API}/api/admin/login`,
        {
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }
      );

      

      localStorage.setItem(
        "adminToken",
        response.data.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(response.data.admin)
      );

      navigate("/admin-dashboard");

    } catch (error) {



      setError(
        error.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }
  };

const handleForgotPassword = async () => {

  if (!forgotEmail) {
    return setForgotMessage(
      "Please enter your email"
    );
  }

  try {

    setForgotLoading(true);

    const res = await axios.post(
      `${API}/api/admin/forgot-password`,
      {
        email: forgotEmail,
      }
    );

    setForgotMessage(
      res.data.message
    );

  } catch (error) {

    setForgotMessage(
      error.response?.data?.message ||
      "Failed to send reset link"
    );

  } finally {

    setForgotLoading(false);

  }
};

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-logo">
          <FaUserShield />
        </div>

        <h1>Burdwan Scan Centre</h1>

        <h3>Secure Admin Portal</h3>

        <span className="security-note">
          Authorized Personnel Only
        </span>

        {error && (
          <p
            style={{
              color: "red",
              marginTop: "10px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          autoComplete="on"
        >

          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
          />

          <div className="password-wrapper">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

          <button
  type="button"
  className="forgot-btn"
  onClick={() =>
    setShowForgotModal(true)
  }
>
  Forgot Password?
</button>

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading
              ? "Logging In..."
              : "Login Securely"}
          </button>

        </form>

      </div>

      {
  showForgotModal && (

    <div className="forgot-overlay">

      <div className="forgot-modal">

        <h2>
          Reset Password
        </h2>

        <p>
          Enter your registered email
        </p>

        <input
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          value={forgotEmail}
          onChange={(e) =>
            setForgotEmail(
              e.target.value
            )
          }
        />

        {
  forgotMessage && (
    <div
      className={`forgot-message ${
        forgotMessage.includes("successfully")
          ? "forgot-success"
          : "forgot-error"
      }`}
    >
      {forgotMessage}
    </div>
  )
}

        <div className="forgot-actions">

  <button
    type="button"
    className="send-link-btn"
    onClick={handleForgotPassword}
  >
    {
      forgotLoading
        ? "Sending..."
        : "Send Reset Link"
    }
  </button>

  <button
    type="button"
    className="cancel-btn"
    onClick={() =>
      setShowForgotModal(false)
    }
  >
    Cancel
  </button>

</div>

      </div>

    </div>
  )
}

    </div>
  );
};

export default AdminLogin;