import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

import API from "../../config/api";

const ADMIN_API = `${API}/api/admin`;

import "../styles/ResetPassword.css";

const ResetPassword = () => {

  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      return setError(
        "Passwords do not match"
      );
    }

    try {

      setLoading(true);

      const res = await axios.put(
  `${ADMIN_API}/reset-password/${token}`,
  {
    password,
  }
);

      setMessage(
        res.data.message
      );

      setTimeout(() => {
        navigate("/admin-login-bsc-2026");
      }, 2500);

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="reset-page">

      <div className="reset-card">

        <div className="reset-icon">
          <FaLock />
        </div>

        <h1>
          Reset Password
        </h1>

        <p>
          Burdwan Scan Centre
        </p>

        {message && (
          <div className="success-box">
            {message}
          </div>
        )}

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
        >

          <div className="password-wrapper">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="New Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              required
            />

          </div>

          <div className="password-wrapper">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              required
            />

            <span
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword
                ? <FaEyeSlash />
                : <FaEye />}
            </span>

          </div>

          <button
            type="submit"
            disabled={loading}
          >
            {
              loading
                ? "Updating..."
                : "Reset Password"
            }
          </button>

        </form>

      </div>

    </div>
  );
};

export default ResetPassword;