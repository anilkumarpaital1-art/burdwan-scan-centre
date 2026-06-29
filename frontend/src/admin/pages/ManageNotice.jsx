import { useEffect, useState } from "react";
import axios from "axios";
import API from "../../config/api";
const NOTICE_API = `${API}/api/notices`;

import "./../styles/ManageNotice.css";

const ManageNotices = () => {
  const [notices, setNotices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("all");

  const [currentPage, setCurrentPage] =
    useState(1);

  const noticesPerPage = 8;

    const initialForm = {
    title: "",
    description: "",
    date: "",
    pdfLink: "",
  };

  const [editingId, setEditingId] =
    useState(null);

    const [showEditModal, setShowEditModal] =
  useState(false);

const [editForm, setEditForm] =
  useState(initialForm);

  const [message, setMessage] =
    useState("");



  const [formData, setFormData] =
    useState(initialForm);

    const token =
  localStorage.getItem("adminToken");

const authConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

  const fetchNotices = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
  NOTICE_API
);

      setNotices(res.data);
   } catch (error) {

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
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
  NOTICE_API,
  formData,
  authConfig
);

setMessage(
  "✅ Notice created successfully"
);
    

      setTimeout(() => {
        setMessage("");
      }, 3000);

      setFormData(initialForm);
      setEditingId(null);
      setShowForm(false);
setShowEditModal(false);
setEditForm(initialForm);

      fetchNotices();

    } catch (error) {

  if (error.response?.status === 401) {

    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    window.location.href =
      "/admin-login-bsc-2026";

    return;
  }

  setMessage(
    error?.response?.data?.message ||
    "❌ Operation failed"
  );

  console.error(error);

}
  };

  const deleteNotice = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this notice?"
      );

    if (!confirmDelete) return;

    try {
      await axios.delete(
  `${NOTICE_API}/${id}`,
  authConfig
);

      if (editingId === id) {
      setEditingId(null);
      setFormData(initialForm);
      setShowForm(false);
setShowEditModal(false);
setEditForm(initialForm);
    }

      setMessage(
        "✅ Notice deleted successfully"
      );

      setTimeout(() => {
        setMessage("");
      }, 3000);

      fetchNotices();

   } catch (error) {

  if (error.response?.status === 401) {

    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    window.location.href =
      "/admin-login-bsc-2026";

    return;
  }

  console.error(error);

  alert("Delete Failed");

}
  };

  const editNotice = (notice) => {

setShowForm(false);

setEditingId(notice._id);

setEditForm({
  title: notice.title || "",
  description: notice.description || "",
  date: notice.date
    ? notice.date.split("T")[0]
    : "",
  pdfLink: notice.pdfLink || "",
});

setShowEditModal(true);


    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const updateNotice = async () => {

  try {

    await axios.put(
  `${NOTICE_API}/${editingId}`,
  editForm,
  authConfig
);

    setMessage(
      "✅ Notice updated successfully"
    );

    setTimeout(() => {
      setMessage("");
    }, 3000);

    setShowEditModal(false);

    setEditingId(null);

    setEditForm(initialForm);

    fetchNotices();

 } catch (error) {

  if (error.response?.status === 401) {

    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    window.location.href =
      "/admin-login-bsc-2026";

    return;
  }

  console.error(error);

}
};

  const filteredNotices = notices
    .filter((notice) =>
      notice.title
        ?.toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "all")
        return 0;

      if (sortBy === "az")
        return a.title.localeCompare(
          b.title
        );

      if (sortBy === "za")
        return b.title.localeCompare(
          a.title
        );

      if (sortBy === "oldest")
        return (
          new Date(a.date) -
          new Date(b.date)
        );

      return (
        new Date(b.date) -
        new Date(a.date)
      );
    });

  const indexOfLastNotice =
    currentPage * noticesPerPage;

  const indexOfFirstNotice =
    indexOfLastNotice -
    noticesPerPage;

  const paginatedNotices =
    filteredNotices.slice(
      indexOfFirstNotice,
      indexOfLastNotice
    );

  const totalPages = Math.ceil(
    filteredNotices.length /
      noticesPerPage
  );

  return (
    <div className="manage-notices">

      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

      <div className="page-header">

        <div>
          <h1>
            Manage Notices
          </h1>

          <p>
            Create, update and
            manage notices.
          </p>
        </div>

        <div className="header-actions">

          <button
            className="refresh-btn"
            onClick={() => {
  fetchNotices();
  setEditingId(null);
  setFormData(initialForm);
  setShowForm(false);
setShowEditModal(false);
setEditForm(initialForm);
}}
          >
            Refresh
          </button>

          <button
  className="add-btn"
  onClick={() => {

    if (showForm) {
  setShowForm(false);
setShowEditModal(false);
setEditForm(initialForm);
  setEditingId(null);
  setFormData(initialForm);
  return;
}

    setEditingId(null);

setFormData(initialForm);

setEditForm(initialForm);

setShowEditModal(false);

setShowForm(true);

  }}
>
  {showForm
    ? "Close Form"
    : "+ Add Notice"}
</button>

        </div>

      </div>

      <div className="notice-stats">

  <div className="notice-stat-card total-card">
    <h3>{notices.length}</h3>
    <p>Total Notices</p>
  </div>

  <div className="notice-stat-card recent-card">
    <h3>
      {
        notices.filter(
          (n) =>
            new Date(n.date) >=
            new Date()
        ).length
      }
    </h3>
    <p>Upcoming</p>
  </div>

  <div className="notice-stat-card archive-card">
    <h3>
      {
        notices.filter(
          (n) =>
            new Date(n.date) <
            new Date()
        ).length
      }
    </h3>
    <p>Archived</p>
  </div>

</div>

      {showForm && (
        <div className="notice-form-card">

          <h2>Add New Notice</h2>

          <form
            onSubmit={
              handleSubmit
            }
            className="notice-form"
          >

            <input
              type="text"
              name="title"
              placeholder="Notice Title"
              value={
                formData.title
              }
              onChange={
                handleChange
              }
              required
            />

            <input
              type="date"
              name="date"
              value={
                formData.date
              }
              onChange={
                handleChange
              }
              required
            />

            <input
              type="text"
              name="pdfLink"
              placeholder="PDF Link (Optional)"
              value={
                formData.pdfLink
              }
              onChange={
                handleChange
              }
            />

            <textarea
              name="description"
              placeholder="Notice Description"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
              required
            />

            <div className="form-actions">

              <button
                type="submit"
                className="save-btn"
              >
                Save Notice
              </button>

              <button
  type="button"
  className="cancel-btn"
  onClick={() => {

    setShowForm(false);
setShowEditModal(false);
setEditForm(initialForm);

    setEditingId(null);

    setFormData(initialForm);

  }}
>
  Cancel
</button>

            </div>

          </form>

        </div>
      )}

      <div className="search-sort-row">

        <input
          type="text"
          placeholder="Search notice..."
          value={search}
          onChange={(e) => {
            setSearch(
              e.target.value
            );
            setCurrentPage(1);
          }}
          className="search-input"
        />

        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(
              e.target.value
            );
            setCurrentPage(1);
          }}
          className="sort-select"
        >
          <option value="all">
            All
          </option>

          <option value="newest">
            Newest
          </option>

          <option value="oldest">
            Oldest
          </option>

          <option value="az">
            A-Z
          </option>

          <option value="za">
            Z-A
          </option>
        </select>

      </div>

      <div className="table-card desktop-table">

        {loading ? (
          <div className="loading">
            Loading Notices...
          </div>
        ) : filteredNotices.length ===
          0 ? (
          <div className="empty-state">
            No Notices Found
          </div>
        ) : (
          <table className="notice-table">

            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Description</th>
                <th>PDF</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {paginatedNotices.map(
                (notice) => (
                  <tr
                    key={
                      notice._id
                    }
                  >
                    <td>
                      {
                        notice.title
                      }
                    </td>

                    <td>
                      {new Date(
                        notice.date
                      ).toLocaleDateString()}
                    </td>

                    <td>
                      {
                        notice.description
                      }
                    </td>

                    <td>
                      {notice.pdfLink ? (
                        <a
                          href={
                            notice.pdfLink
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          View
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>

                    <td className="action-buttons">

                      <button
                        className="edit-btn"
                        onClick={() =>
                          editNotice(
                            notice
                          )
                        }
                      >
                        Edit
                      </button>

                      <button
  type="button"
  className="delete-btn"
  onClick={() =>
    deleteNotice(notice._id)
  }
>
  Delete
</button>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>
        )}

      </div>

      <div className="mobile-package-cards">
  {paginatedNotices.map((notice) => (
    <div
      className="mobile-package-card"
      key={notice._id}
    >
      <h3>{notice.title}</h3>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(
          notice.date
        ).toLocaleDateString()}
      </p>

      <p>
        <strong>Description:</strong>{" "}
        {notice.description}
      </p>

      <div className="mobile-actions">
        <button
  type="button"
  className="edit-btn"
  onClick={() =>
    editNotice(notice)
  }
>
  Edit
</button>

        <button
  type="button"
  className="delete-btn"
  onClick={() =>
    deleteNotice(notice._id)
  }
>
  Delete
</button>
      </div>
    </div>
  ))}
</div>

      <div className="pagination">

  <button
    disabled={currentPage === 1}
    onClick={() =>
      setCurrentPage(currentPage - 1)
    }
  >
    Prev
  </button>

  {[...Array(totalPages)].map(
    (_, index) => (
      <button
        key={index}
        className={
          currentPage === index + 1
            ? "page-btn active"
            : "page-btn"
        }
        onClick={() =>
          setCurrentPage(index + 1)
        }
      >
        {index + 1}
      </button>
    )
  )}

  <button
    disabled={
      currentPage === totalPages ||
      totalPages === 0
    }
    onClick={() =>
      setCurrentPage(currentPage + 1)
    }
  >
    Next
  </button>

</div>
{showEditModal && (
  <div className="modal-overlay">

    <div className="modal-content">

      <h2>Edit Notice</h2>

      <input
        type="text"
        value={editForm.title}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            title: e.target.value,
          })
        }
        placeholder="Notice Title"
        className="form-input"
      />

      <br /><br />

      <input
        type="date"
        value={editForm.date}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            date: e.target.value,
          })
        }
        className="form-input"
      />

      <br /><br />

      <input
        type="text"
        value={editForm.pdfLink}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            pdfLink: e.target.value,
          })
        }
        placeholder="PDF Link"
        className="form-input"
      />

      <br /><br />

      <textarea
        rows="6"
        value={editForm.description}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            description:
              e.target.value,
          })
        }
        placeholder="Description"
        className="form-input"
      />

      <div className="modal-actions">

        <button
          className="close-btn"
          onClick={() => {

            setShowEditModal(false);

            setEditingId(null);

            setEditForm(initialForm);

          }}
        >
          Close
        </button>

        <button
          className="update-btn"
          onClick={updateNotice}
        >
          Update Notice
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
};

export default ManageNotices;