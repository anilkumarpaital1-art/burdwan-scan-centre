import { useNavigate } from "react-router-dom";


import "./../styles/AdminHeader.css";

const AdminHeader = ({ setSidebarOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("admin");

  localStorage.setItem(
    "logout",
    Date.now()
  );

  navigate(
    "/admin-login-bsc-2026",
    { replace: true }
  );
};

  return (
    <header className="admin-header">

  <div className="admin-header-left">

  <button
    className="mobile-menu-btn"
    onClick={() => setSidebarOpen(true)}
  >
    ☰
  </button>


</div>

<div className="admin-header-right">

  <div className="header-date">
  <span>👋 Welcome Back, Admin</span>
</div>

  <button
    className="logout-btn"
    onClick={handleLogout}
  >
    Logout
  </button>

</div>

</header>
  );
};

export default AdminHeader;