import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaUserEdit,
  FaLock,
  FaCamera,
  FaShieldAlt,
  FaClock,
  FaTimes,
  FaSave
} from "react-icons/fa";

import {
  MdAdminPanelSettings
} from "react-icons/md";

import Confetti from "react-confetti";
import "../styles/Profile.css";

import API from "../../config/api";

const ADMIN_API = `${API}/api/admin`;

const Profile = () => {

  const [admin, setAdmin] = useState(null);

  const [loading, setLoading] = useState(true);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const [showEditModal, setShowEditModal] =
    useState(false);

    const [showConfetti, setShowConfetti] =
  useState(false);

  const [showPasswordModal, setShowPasswordModal] =
    useState(false);


  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [passwordForm, setPasswordForm] =
    useState({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    

  const fetchProfile = async () => {

  try {

    const token =
      localStorage.getItem("adminToken");

    const res = await axios.get(
      `${ADMIN_API}/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setAdmin(res.data.admin);

    setEditForm({
      name: res.data.admin.name || "",
      email: res.data.admin.email || "",
      phone: res.data.admin.phone || "",
    });

  } catch (error) {

    console.log(error);

  } finally {

    setLoading(false);

  }

};

useEffect(() => {
  fetchProfile();
}, []);

const triggerConfetti = () => {

  setShowConfetti(false);

  setTimeout(() => {
    setShowConfetti(true);
  }, 10);

  setTimeout(() => {
    setShowConfetti(false);
  }, 1000);

};


useEffect(() => {

  if (success) {

    const timer = setTimeout(() => {
      setSuccess("");
    }, 1000);

    return () => clearTimeout(timer);

  }

}, [success]);

useEffect(() => {

  if (error) {

    const timer = setTimeout(() => {
      setError("");
    }, 1000);

    return () => clearTimeout(timer);

  }

}, [error]);

  const handlePhotoUpload = async (file) => {

  try {

    const token =
      localStorage.getItem("adminToken");

    const formData = new FormData();

    formData.append(
      "photo",
      file
    );

    await axios.post(
      `${ADMIN_API}/upload-photo`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    fetchProfile();

    setSuccess(
      "Profile photo uploaded"
    );

    triggerConfetti();

  } catch (error) {

  if (error.response?.status === 401) {

    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    window.location.href =
      "/admin-login-bsc-2026";

    return;
  }

  setError(
    error.response?.data?.message ||
    "Failed to upload image"
  );
}

};

const handleRemovePhoto = async () => {

  try {

    const token =
      localStorage.getItem("adminToken");

    await axios.delete(
      `${ADMIN_API}/remove-photo`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setSuccess(
      "Profile photo removed"
    );

    triggerConfetti();

    fetchProfile();

  } catch (err) {

    setError(
      err.response?.data?.message ||
      "Failed to remove photo"
    );

  }

};

const handleUpdateProfile =
  async () => {

    try {

      const token =
        localStorage.getItem(
          "adminToken"
        );

      await axios.put(
        `${ADMIN_API}/profile`,
        editForm,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setSuccess(
        "Profile information updated"
      );
      triggerConfetti();

      setShowEditModal(false);

      fetchProfile();

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Update failed"
      );

    }

  };
  
  const handleChangePassword =
  async () => {

    if (
      passwordForm.newPassword !==
      passwordForm.confirmPassword
    ) {
      setError(
        "Passwords do not match"
      );
      return;
    }

    try {

      const token =
        localStorage.getItem(
          "adminToken"
        );

      await axios.put(
        `${ADMIN_API}/change-password`,
        {
          currentPassword:
            passwordForm.currentPassword,

          newPassword:
            passwordForm.newPassword,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setSuccess(
        "Password changed successfully"
      );

      triggerConfetti();

      setShowPasswordModal(false);

      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Password update failed"
      );


    }

  };

  const isRecentlyActive = admin?.lastLogin
  ? (
      new Date().getTime() -
      new Date(admin.lastLogin).getTime()
    ) <
    24 * 60 * 60 * 1000
  : false;

const formattedLastLogin = admin?.lastLogin
  ? new Date(admin.lastLogin).toLocaleString(
      "en-IN",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    )
  : "No Login Recorded";

  if (loading) {
  return (
    <div className="profile-loading">
      Loading Profile...
    </div>
  );
}

return (
  <div className="profile-page">

    {showConfetti && (
  <Confetti
  recycle={false}
  numberOfPieces={120}
  gravity={0.3}
/>
)}

    {success && (
      <div className="profile-success">
        {success}
      </div>
    )}

    {error && (
      <div className="profile-error">
        {error}
      </div>
    )}

    {/* HERO SECTION */}

    <div className="profile-hero-card">

      <div className="profile-left">

        <div className="avatar-wrapper">

          {admin?.profileImage ? (
            <img
              src={admin.profileImage}
              alt="Admin"
              className="profile-image"
            />
          ) : (
            <div className="profile-avatar">
              {admin?.name?.charAt(0)}
            </div>
          )}

          <div className="photo-actions">

  <label className="upload-photo-btn">

    <FaCamera />

    <input
      type="file"
      hidden
      accept="image/*"
      onChange={(e) => {

  const file =
    e.target.files?.[0];

  if (!file) return;

  handlePhotoUpload(file);

}}
    />

  </label>

  {admin?.profileImage && (

    <button
      className="remove-photo-btn"
      onClick={handleRemovePhoto}
    >
      Remove
    </button>

  )}

</div>

        </div>

        <div className="profile-main-info">

          <h1>
            {admin?.name}
          </h1>

          <span className="role-badge">
            <MdAdminPanelSettings />
            {admin?.role}
          </span>

          <p>
            {admin?.email}
          </p>

        </div>

      </div>

    </div>

    {/* STATS */}

    <div className="profile-stats-grid">

      <div className="stat-card">

        <FaClock />

        <h3>
          Last Login
        </h3>

        <div className="last-login-content">

  <div className="login-time">
    {formattedLastLogin}
  </div>

  {isRecentlyActive && (
    <div className="active-badge">
      Active Now
    </div>
  )}

</div>

      </div>

      <div className="stat-card">

        <FaShieldAlt />

        <h3>Status</h3>

        <p>Protected</p>

      </div>

      <div className="stat-card">

        <MdAdminPanelSettings />

        <h3>Role</h3>

        <p>{admin?.role}</p>

      </div>

    </div>

    {/* ACCOUNT SECTION */}

    <div className="profile-section">

      <div className="section-header">

        <h2>
          Account Information
        </h2>

        <button
          className="action-btn"
          onClick={() =>
            setShowEditModal(true)
          }
        >
          <FaUserEdit />
          Edit Profile
        </button>

      </div>

      <div className="info-grid">

        <div className="info-box">
          <label>Name</label>
          <span>{admin?.name}</span>
        </div>

        <div className="info-box">
          <label>Email</label>
          <span>{admin?.email}</span>
        </div>

        <div className="info-box">
          <label>Phone</label>
          <span>{admin?.phone}</span>
        </div>

      </div>

    </div>

    {/* SECURITY */}

    <div className="profile-section">

      <div className="section-header">
        <h2>
          Security Center
        </h2>
      </div>

      <button
        className="security-btn"
        onClick={() =>
          setShowPasswordModal(true)
        }
      >
        <FaLock />
        Change Password
      </button>

    </div>

    {/* TIMELINE */}

    <div className="profile-section">

      <div className="section-header">
        <h2>
          Recent Activity
        </h2>
      </div>

      <div className="timeline">

        <div className="timeline-item">
          <span className="dot"></span>

          <div>
            <h4>
              Login Successful
            </h4>

            <p>
              Last access recorded
            </p>
          </div>

        </div>

        <div className="timeline-item">
          <span className="dot"></span>

          <div>
            <h4>
              Profile Active
            </h4>

            <p>
              Admin account verified
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* EDIT PROFILE MODAL */}

    {showEditModal && (

      <div className="modal-overlay">

        <div className="modal-card">

          <div className="modal-header">

            <h2>
              Edit Profile
            </h2>

            <button
              onClick={() =>
                setShowEditModal(false)
              }
            >
              <FaTimes />
            </button>

          </div>

          <div className="modal-body">

            <input
              type="text"
              value={editForm.name}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  name:
                    e.target.value,
                })
              }
              placeholder="Name"
            />

            <input
              type="email"
              value={editForm.email}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  email:
                    e.target.value,
                })
              }
              placeholder="Email"
            />

            <input
              type="text"
              value={editForm.phone}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  phone:
                    e.target.value,
                })
              }
              placeholder="Phone"
            />

          </div>

          <div className="modal-footer">

            <button
              className="save-btn"
              onClick={
                handleUpdateProfile
              }
            >
              <FaSave />
              Save Changes
            </button>

          </div>

        </div>

      </div>

    )}

    {/* PASSWORD MODAL */}

    {showPasswordModal && (

      <div className="modal-overlay">

        <div className="modal-card">

          <div className="modal-header">

            <h2>
              Change Password
            </h2>

            <button
              onClick={() =>
                setShowPasswordModal(false)
              }
            >
              <FaTimes />
            </button>

          </div>

          <div className="modal-body">

            <input
              type="password"
              placeholder="Current Password"
              value={
                passwordForm.currentPassword
              }
              onChange={(e) =>
                setPasswordForm({
                  ...passwordForm,
                  currentPassword:
                    e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="New Password"
              value={
                passwordForm.newPassword
              }
              onChange={(e) =>
                setPasswordForm({
                  ...passwordForm,
                  newPassword:
                    e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={
                passwordForm.confirmPassword
              }
              onChange={(e) =>
                setPasswordForm({
                  ...passwordForm,
                  confirmPassword:
                    e.target.value,
                })
              }
            />

          </div>

          <div className="modal-footer">

            <button
              className="save-btn"
              onClick={
                handleChangePassword
              }
            >
              <FaLock />
              Update Password
            </button>

          </div>

        </div>

      </div>

    )}

  </div>
);
};

export default Profile;