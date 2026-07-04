import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import {
  MdDashboard,
  MdMedicalServices,
  MdInventory,
  MdPeople,
  MdCampaign,
  MdWork,
} from "react-icons/md";

import "./../styles/AdminSidebar.css";

// Replace later with your real logo
import logo from "../assets/logo.png";

const AdminSidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {

  const closeSidebar = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside
      className={`admin-sidebar ${
        sidebarOpen ? "open" : ""
      }`}
    >

      {/* Logo Section */}

      <div className="sidebar-brand">

  <img
    src={logo}
    alt="Burdwan Scan Centre"
    className="sidebar-logo"
  />

  <div className="brand-content">

    <h2>Burdwan Scan Centre</h2>


  </div>

</div>

      {/* Overview */}

      <div className="sidebar-section-title">
        OVERVIEW
      </div>

      <nav className="admin-sidebar-nav">

        <NavLink
          to="/admin-dashboard"
          end
          className="admin-sidebar-link"
          onClick={closeSidebar}
        >
          <MdDashboard />
          <span>Dashboard</span>
        </NavLink>

      </nav>

      {/* Management */}

      <div className="sidebar-section-title">
        MANAGEMENT
      </div>

      <nav className="admin-sidebar-nav">

        <NavLink
          to="/admin-dashboard/services"
          className="admin-sidebar-link"
          onClick={closeSidebar}
        >
          <MdMedicalServices />
          <span>Services</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/packages"
          className="admin-sidebar-link"
          onClick={closeSidebar}
        >
          <MdInventory />
          <span>Packages</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/experts"
          className="admin-sidebar-link"
          onClick={closeSidebar}
        >
          <MdPeople />
          <span>Experts</span>
        </NavLink>

      </nav>

      {/* Communication */}

      <div className="sidebar-section-title">
        COMMUNICATION
      </div>

      <nav className="admin-sidebar-nav">

        <NavLink
          to="/admin-dashboard/notice"
          className="admin-sidebar-link"
          onClick={closeSidebar}
        >
          <MdCampaign />
          <span>Notice Board</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/jobs"
          className="admin-sidebar-link"
          onClick={closeSidebar}
        >
          <MdWork />
          <span>Job Vacancies</span>
        </NavLink>

      </nav>

      {/* Account */}

<div className="sidebar-section-title">
  ACCOUNT
</div>

<nav className="admin-sidebar-nav">

  <NavLink
    to="/admin-dashboard/profile"
    className="admin-sidebar-link"
    onClick={closeSidebar}
  >
    <FaUser />
    <span>Profile</span>
  </NavLink>

</nav>

      

      {/* Footer */}

      <div className="sidebar-footer">

        <div className="admin-avatar">
          A
        </div>

        <div>
          <h4>Administrator</h4>
          <p>Full Access</p>
        </div>

      </div>

    </aside>
  );
};

export default AdminSidebar;