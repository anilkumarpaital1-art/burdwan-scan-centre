import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import API from "../../config/api";

import "./../styles/AdminDashboard.css";

const DashboardHome = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  const [currentTime, setCurrentTime] =
    useState(new Date());

  const [systemStatus, setSystemStatus] =
    useState({
      database: false,
      backend: false,
      sync: false,
    });

  const activities = [
    {
      action: "MRI Service Added",
      time: "09:42 PM",
    },
    {
      action: "Expert Updated",
      time: "09:30 PM",
    },
    {
      action: "Notice Published",
      time: "08:55 PM",
    },
  ];

  const token =
  localStorage.getItem("adminToken");




  const fetchStats = useCallback(async () => {
  try {
    const res = await axios.get(
  `${API}/api/dashboard/stats`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
    setStats(res.data);

  }catch (error) {

  if (error.response?.status === 401) {

    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    window.location.href =
      "/admin-login-bsc-2026";

    return;
  }

  console.error(error);

}
 finally {

    setLoading(false);

  }
}, [token]);

  const checkHealth = async () => {
    try {
      const res = await axios.get(
        `${API}/api/health`
      );

      setSystemStatus({
        database: res.data.database,
        backend: res.data.backend,
        sync: true,
      });
    } catch (error) {
      console.error(error);

      setSystemStatus({
        database: false,
        backend: false,
        sync: false,
      });
    }
  };

  useEffect(() => {
  fetchStats();
  checkHealth();

  const interval = setInterval(() => {
    fetchStats();
    checkHealth();
  }, 10000);

  return () => clearInterval(interval);
}, [fetchStats]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        LOADING SYSTEM DATA...
      </div>
    );
  }

  return (
    <div className="dashboard-wrapper">

      {/* HEADER */}
      <div className="dashboard-header">

        <div>
          <h1>Burdwan Scan Centre</h1>

  
        </div>

        <div className="dashboard-clock">

          <h2>
            {currentTime.toLocaleTimeString()}
          </h2>

          <span>
            {currentTime.toLocaleDateString(
              "en-IN",
              {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
          </span>

        </div>

      </div>

      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card">
          <h2>{stats.totalServices || 0}</h2>
          <p>Services</p>
        </div>

        <div className="stat-card">
          <h2>{stats.totalExperts || 0}</h2>
          <p>Experts</p>
        </div>

        <div className="stat-card">
          <h2>{stats.totalPackages || 0}</h2>
          <p>Packages</p>
        </div>

        <div className="stat-card">
          <h2>{stats.totalNotices || 0}</h2>
          <p>Notices</p>
        </div>

      </div>

      {/* ANALYTICS */}
      <div className="analytics-grid">

        {/* Service Stats */}
        <div className="panel">

          <h3>Service Statistics</h3>

          <div className="row">
            <span>Active Services</span>
            <strong>
              {stats.activeServices || 0}
            </strong>
          </div>

          <div className="row">
            <span>Featured Services</span>
            <strong>
              {stats.featuredServices || 0}
            </strong>
          </div>

          <div className="row">
            <span>Departments</span>
            <strong>
              {stats.totalDepartments || 0}
            </strong>
          </div>

        </div>

        {/* Content Stats */}
        <div className="panel">

          <h3>Content Statistics</h3>

          <div className="row">
            <span>Experts</span>
            <strong>
              {stats.totalExperts || 0}
            </strong>
          </div>

          <div className="row">
            <span>Packages</span>
            <strong>
              {stats.totalPackages || 0}
            </strong>
          </div>

          <div className="row">
            <span>Notices</span>
            <strong>
              {stats.totalNotices || 0}
            </strong>
          </div>

        </div>

        {/* System Health */}
        <div className="panel">

          <h3>System Health</h3>

          <div className="row">
            <span>MongoDB</span>

            <strong
              className={
                systemStatus.database
                  ? "online"
                  : "offline"
              }
            >
              {systemStatus.database
                ? "Online"
                : "Offline"}
            </strong>
          </div>

          <div className="row">
            <span>Backend API</span>

            <strong
              className={
                systemStatus.backend
                  ? "online"
                  : "offline"
              }
            >
              {systemStatus.backend
                ? "Running"
                : "Down"}
            </strong>
          </div>

          <div className="row">
            <span>Live Sync</span>

            <strong
              className={
                systemStatus.sync
                  ? "online"
                  : "offline"
              }
            >
              {systemStatus.sync
                ? "Healthy"
                : "Failed"}
            </strong>
          </div>

        </div>

      </div>

      {/* ACTIVITY */}
      <div className="activity-panel">

        <h3>Recent System Activity</h3>

        {activities.map((item, index) => (
          <div
            className="activity-row"
            key={index}
          >
            <span>{item.action}</span>

            <small>{item.time}</small>
          </div>
        ))}

      </div>

    </div>
  );
};

export default DashboardHome;