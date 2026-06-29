import { useEffect, useState } from "react";
import axios from "axios";

import API from "../../config/api";

const JOB_API = `${API}/api/jobs`;

import "./../styles/ManageJobs.css";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

const jobsPerPage = 8;

  const initialForm = {
    title: "",
    qualification: "",
    experience: "",
    lastDate: "",
    status: "active",
  };

  const [showEditModal, setShowEditModal] =
  useState(false);

const [editForm, setEditForm] =
  useState(initialForm);

  const [formData, setFormData] =
    useState(initialForm);

    const token =
  localStorage.getItem("adminToken");

const authConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        JOB_API
      );

      setJobs(res.data);
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
    fetchJobs();
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
  JOB_API,
  formData,
  authConfig
);

  setMessage(
    "✅ Job created successfully"
  );

  setTimeout(() => {
    setMessage("");
  }, 3000);

  setFormData(initialForm);
  setEditingId(null);
  setShowForm(false);
  setShowEditModal(false);
  setEditForm(initialForm);

  fetchJobs();

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

  const editJob = (job) => {

  setShowForm(false);

  setEditingId(job._id);

  setEditForm({
    title: job.title || "",
    qualification:
      job.qualification || "",
    experience:
      job.experience || "",
    lastDate:
      job.lastDate?.split("T")[0] || "",
    status:
      job.status || "active",
  });

  setShowEditModal(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const updateJob = async () => {

  try {

    await axios.put(
  `${JOB_API}/${editingId}`,
  editForm,
  authConfig
);

    setMessage(
      "✅ Job updated successfully"
    );

    setTimeout(() => {
      setMessage("");
    }, 3000);

    setShowEditModal(false);

    setEditingId(null);

    setEditForm(initialForm);

    fetchJobs();

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

  const deleteJob = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this job?"
      );

    if (!confirmDelete) return;

    try {
      await axios.delete(
  `${JOB_API}/${id}`,
  authConfig
);

      setMessage(
        "✅ Job deleted successfully"
      );

      setTimeout(() => {
        setMessage("");
      }, 3000);

      fetchJobs();
    }  catch (error) {

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

  const filteredJobs = jobs.filter(
  (job) =>
    job.title
      ?.toLowerCase()
      .includes(search.toLowerCase())
);

const indexOfLastJob =
  currentPage * jobsPerPage;

const indexOfFirstJob =
  indexOfLastJob - jobsPerPage;

const paginatedJobs =
  filteredJobs.slice(
    indexOfFirstJob,
    indexOfLastJob
  );

const totalPages = Math.ceil(
  filteredJobs.length / jobsPerPage
);

  return (
    <div className="manage-jobs">

      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

      <div className="page-header">
        <div>
          <h1>Manage Jobs</h1>
          <p>
            Create, update and manage
            job vacancies.
          </p>
        </div>

        <div className="header-actions">

          <button
            className="refresh-btn"
            onClick={() => {

  fetchJobs();

  setEditingId(null);

  setFormData(initialForm);

  setEditForm(initialForm);

  setShowForm(false);

  setShowEditModal(false);

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

    setEditingId(null);

    setFormData(initialForm);

    setEditForm(initialForm);

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
              : "+ Add Job"}
          </button>

        </div>
      </div>

      <div className="job-stats">

        <div className="job-stat-card">
          <h3>{jobs.length}</h3>
          <p>Total Jobs</p>
        </div>

        <div className="job-stat-card">
          <h3>
            {
              jobs.filter(
                (j) =>
                  j.status ===
                  "active"
              ).length
            }
          </h3>
          <p>Active</p>
        </div>

        <div className="job-stat-card">
          <h3>
            {
              jobs.filter(
                (j) =>
                  j.status ===
                  "inactive"
              ).length
            }
          </h3>
          <p>Inactive</p>
        </div>

      </div>

      {showForm && (
        <div className="job-form-card">

          <h2>Add New Job</h2>
          <form
            className="job-form"
            onSubmit={
              handleSubmit
            }
          >

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={
                formData.title
              }
              onChange={
                handleChange
              }
              required
            />

            <textarea
              name="qualification"
              placeholder="Qualification"
              value={
                formData.qualification
              }
              onChange={
                handleChange
              }
              required
            />

            <textarea
              name="experience"
              placeholder="Experience"
              value={
                formData.experience
              }
              onChange={
                handleChange
              }
              required
            />

            <input
              type="date"
              name="lastDate"
              value={
                formData.lastDate
              }
              onChange={
                handleChange
              }
              required
            />

            <select
              name="status"
              value={
                formData.status
              }
              onChange={
                handleChange
              }
            >
              <option value="active">
                Active
              </option>

              <option value="inactive">
                Inactive
              </option>
            </select>

            <div className="form-actions">

              <button
                type="submit"
                className="save-btn"
              >
                Save Job
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => {

  setShowForm(false);

  setShowEditModal(false);

  setEditingId(null);

  setFormData(initialForm);

  setEditForm(initialForm);

}}
              >
                Cancel
              </button>

            </div>

          </form>

        </div>
      )}

      <div className="table-toolbar">
        <input
          type="text"
          placeholder="Search jobs..."
          className="search-input"
          value={search}
          onChange={(e) => {
  setSearch(e.target.value);
  setCurrentPage(1);
}}
        />
      </div>

      <div className="table-card desktop-table">

        {loading ? (
          <div className="loading">
            Loading Jobs...
          </div>
        ) : (
          <table className="job-table">

            <thead>
              <tr>
                <th>Role</th>
                <th>Qualification</th>
                <th>Experience</th>
                <th>Last Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedJobs.map(
  (job) => (
                  <tr
                    key={
                      job._id
                    }
                  >
                    <td>
                      {
                        job.title
                      }
                    </td>

                    <td>
                      {
                        job.qualification
                      }
                    </td>

                    <td>
                      {
                        job.experience
                      }
                    </td>

                    <td>
                      {new Date(
                        job.lastDate
                      ).toLocaleDateString(
                        "en-IN"
                      )}
                    </td>

                    <td>
  <span
    className={
      job.status === "active"
        ? "status-active"
        : "status-inactive"
    }
  >
    {job.status}
  </span>
</td>

                    <td className="action-buttons">

                      <button
                        className="edit-btn"
                        onClick={() =>
                          editJob(
                            job
                          )
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteJob(
                            job._id
                          )
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

      <div className="mobile-job-cards">
  {paginatedJobs.map((job) => (
    <div
      className="mobile-job-card"
      key={job._id}
    >
      <h3>{job.title}</h3>

      <p>
        <strong>Qualification:</strong>{" "}
        {job.qualification}
      </p>

      <p>
        <strong>Experience:</strong>{" "}
        {job.experience}
      </p>

      <p>
        <strong>Last Date:</strong>{" "}
        {new Date(
          job.lastDate
        ).toLocaleDateString("en-IN")}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span
          className={
            job.status === "active"
              ? "status-active"
              : "status-inactive"
          }
        >
          {job.status}
        </span>
      </p>

      <div className="mobile-actions">
        <button
          className="edit-btn"
          onClick={() =>
            editJob(job)
          }
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            deleteJob(job._id)
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

      <h2>Edit Job</h2>

      <input
        type="text"
        value={editForm.title}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            title: e.target.value,
          })
        }
        placeholder="Job Title"
        className="form-input"
      />

      <br /><br />

      <textarea
        rows="4"
        value={editForm.qualification}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            qualification:
              e.target.value,
          })
        }
        placeholder="Qualification"
        className="form-input"
      />

      <br /><br />

      <textarea
        rows="4"
        value={editForm.experience}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            experience:
              e.target.value,
          })
        }
        placeholder="Experience"
        className="form-input"
      />

      <br /><br />

      <input
        type="date"
        value={editForm.lastDate}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            lastDate:
              e.target.value,
          })
        }
        className="form-input"
      />

      <br /><br />

      <select
        value={editForm.status}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            status:
              e.target.value,
          })
        }
        className="form-input"
      >
        <option value="active">
          Active
        </option>

        <option value="inactive">
          Inactive
        </option>
      </select>

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
          onClick={updateJob}
        >
          Update Job
        </button>

      </div>

    </div>

    

  </div>
)}

    </div>
  );
};


export default ManageJobs;