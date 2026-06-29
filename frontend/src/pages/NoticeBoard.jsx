import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import {
  FaBullhorn,
  FaSearch,
  FaFilePdf,
  FaCalendarAlt,
  FaTimes,
  FaArrowRight
} from "react-icons/fa";

import API from "../config/api";

import "../styles/notice.css";

function NoticeBoard() {

  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedNotice, setSelectedNotice] =
    useState(null);

  const fetchNotices = useCallback(async () => {
    try {

      const res = await axios.get(
        `${API}/api/notices`
      );

      const sorted = [...res.data].sort(
        (a, b) =>
          new Date(b.date) -
          new Date(a.date)
      );

      setNotices(sorted);

    } catch (err) {

      console.error(
        "Failed to fetch notices",
        err
      );

    } finally {

      setLoading(false);

    }
  }, []);

  useEffect(() => {
    fetchNotices();
  }, [fetchNotices]);

  const filteredNotices =
    notices.filter((notice) => {

      const search =
        searchTerm.toLowerCase();

      return (
        notice.title
          ?.toLowerCase()
          .includes(search) ||

        notice.description
          ?.toLowerCase()
          .includes(search)
      );
    });

  return (

    <section className="notice-board-page">

      {/* HERO */}

      <div className="notice-hero">


        <h1>
          Notice Board
        </h1>

        <p>
          Stay updated with the latest
          announcements, holiday schedules,
          service updates, healthcare
          initiatives and important notices
          from Burdwan Scan Centre.
        </p>

      </div>

      {/* SEARCH */}

      <div className="notice-toolbar">

        <div className="notice-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Search notices..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* CONTENT */}

      {loading ? (

        <div className="notice-loading">

          <div className="loader"></div>

          <p>
            Loading notices...
          </p>

        </div>

      ) : (

        <>

          {filteredNotices.length > 0 ? (

            <div className="notice-container">

              <div className="notice-header-row">

                <h2>
                  Latest Notices
                </h2>

                <span>
                  {
                    filteredNotices.length
                  } Notice
                  {filteredNotices.length > 1
                    ? "s"
                    : ""}
                </span>

              </div>

              <div className="notice-list">

                {filteredNotices.map(
                  (
                    notice,
                    index
                  ) => (

                    <div
                      key={notice._id}
                      className="notice-row"
                      onClick={() =>
                        setSelectedNotice(
                          notice
                        )
                      }
                    >

                      <div className="notice-row-left">

                        <div className="notice-top">

                          {index === 0 && (

                            <span className="latest-badge">
                              Latest
                            </span>

                          )}

                          <span className="notice-date">

                            <FaCalendarAlt />

                            {new Date(
                              notice.date
                            ).toLocaleDateString(
                              "en-IN",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric"
                              }
                            )}

                          </span>

                        </div>

                        <h3>
                          {notice.title}
                        </h3>

                        <p>
                          {
                            notice.description
                              ?.length > 120
                              ? notice.description.slice(
                                  0,
                                  120
                                ) + "..."
                              : notice.description
                          }
                        </p>

                      </div>

                      <div className="notice-row-right">

                        <FaArrowRight />

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          ) : (

            <div className="notice-empty">

              <FaBullhorn />

              <h3>
                No Notices Available
              </h3>

              <p>
                There are currently no
                announcements or updates.
                New notices published by
                Burdwan Scan Centre will
                appear here automatically.
              </p>

            </div>

          )}

        </>

      )}

      {/* MODAL */}

      {selectedNotice && (

        <div
          className="notice-modal-overlay"
          onClick={() =>
            setSelectedNotice(null)
          }
        >

          <div
            className="notice-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close-modal"
              onClick={() =>
                setSelectedNotice(null)
              }
            >

              <FaTimes />

            </button>

            <div className="modal-header">

  <h2>
    {selectedNotice.title}
  </h2>

  <div className="modal-date">
    <FaCalendarAlt />
    {new Date(selectedNotice.date).toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    )}
  </div>

</div>

            <div className="modal-body">

              <p>
                {
                  selectedNotice.description
                }
              </p>

            </div>

            {selectedNotice.pdfLink && (

              <div className="modal-footer">

                <a
                  href={
                    selectedNotice.pdfLink
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="download-btn"
                >

                  <FaFilePdf />

                  Download Notice PDF

                </a>

              </div>

            )}

          </div>

        </div>

      )}

    </section>

  );
}

export default NoticeBoard;