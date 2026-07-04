import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaBullhorn, FaArrowRight } from "react-icons/fa";

import API from "../../config/api";

import "../../styles/noticePreview.css";

const NOTICE_API = `${API}/api/notices`;

function NoticePreview() {
  const [latestNotice, setLatestNotice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const res = await axios.get(NOTICE_API);

        if (res.data.length > 0) {
          setLatestNotice(res.data[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, []);

  if (loading) {
  return (
    <section className="announcement-section">
      <div className="announcement-card loading-card">
        <div className="announcement-content">
          <div className="announcement-left">
            <div className="live-dot"></div>
            <div>
              <h2>Loading Latest Announcement...</h2>
              <p>
                Please wait while we fetch the latest updates
                from Burdwan Scan Centre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

if (!latestNotice) {
  return (
    <section className="announcement-section">

      <div className="announcement-header">

        <span className="announcement-tag">
          <FaBullhorn />
          Information Centre
        </span>

        <Link
          to="/notice-board"
          className="all-notices-btn"
        >
          Notice Board
        </Link>

      </div>

      <div className="announcement-card empty-notice">

        <div className="announcement-content">

          <div className="announcement-left">

            <div className="empty-icon">
              📢
            </div>

            <div>

              <h2>
                No Active Announcements
              </h2>

              <p>
                There are currently no active notices or
                announcements. Please check the Notice Board
                regularly for healthcare updates, holiday
                schedules, new services and special package
                offers.
              </p>

              <Link
                to="/notice-board"
                className="empty-btn"
              >
                Visit Notice Board
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

  return (
    <section className="announcement-section">

      <div className="announcement-header">

        <span className="announcement-tag">
          <FaBullhorn />
          Latest Announcement
        </span>

        <Link
          to="/notice-board"
          className="all-notices-btn"
        >
          View All Notices
        </Link>

      </div>

      <Link
        to="/notice-board"
        className="announcement-card"
      >

        <div className="announcement-content">

          <div className="announcement-left">

            <div className="live-dot"></div>

            <div>
              <h2>
                {latestNotice.title}
              </h2>

              <p>
                {latestNotice.description?.length > 180
                  ? latestNotice.description.slice(
                      0,
                      180
                    ) + "..."
                  : latestNotice.description}
              </p>
            </div>

          </div>

          <div className="announcement-right">

            <span className="announcement-date">
              {latestNotice.date
                ? new Date(
                    latestNotice.date
                  ).toLocaleDateString()
                : "Latest"}
            </span>

            <div className="announcement-arrow">
              <FaArrowRight />
            </div>

          </div>

        </div>

      </Link>

    </section>
  );
}

export default NoticePreview;