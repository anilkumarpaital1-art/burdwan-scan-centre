import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";

import "../styles/AdminLayout.css";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
  const handleLogout = (event) => {
    if (event.key === "logout") {
      navigate(
        "/admin-login-bsc-2026",
        { replace: true }
      );
    }
  };

  window.addEventListener(
    "storage",
    handleLogout
  );

  return () => {
    window.removeEventListener(
      "storage",
      handleLogout
    );
  };
}, [navigate]);


  return (
    <div className="admin-layout">

      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="admin-main">
        <AdminHeader
          setSidebarOpen={setSidebarOpen}
        />

        <div className="admin-content">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;