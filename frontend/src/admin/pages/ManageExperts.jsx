import { useEffect, useState } from "react";
import axios from "axios";

import "./../styles/ManageExperts.css";
import API from "../../config/api";

const EXPERT_API = `${API}/api/experts`;

const ManageExperts = () => {

  const [experts, setExperts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("serial");

  const [currentPage, setCurrentPage] =
    useState(1);

  const expertsPerPage = 9;

  const [showAddModal, setShowAddModal] =
    useState(false);

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [selectedExpert, setSelectedExpert] =
    useState(null);

  const [imagePreview, setImagePreview] =
    useState("");

const initialForm = {
  serialNo: "",
  regNo: "",
  name: "",
  designation: "",
  qualification: "",
  experience: "",
  photo: null
};

const [formData, setFormData] = useState(initialForm);

const token =
  localStorage.getItem("adminToken");

const authConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

  const fetchExperts = async () => {

  try {

    setLoading(true);

    const res = await axios.get(EXPERT_API);

    const sorted = [...res.data].sort(
      (a, b) => a.serialNo - b.serialNo
    );

    setExperts(sorted);

  } catch (error) {

    if (error.response?.status === 401) {

      localStorage.removeItem("adminToken");
      localStorage.removeItem("admin");

      window.location.href =
        "/admin-login-bsc-2026";

      return;
    }

    console.error(error);

  } finally {

    setLoading(false);

  }
};

  useEffect(() => {
    fetchExperts();
  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      photo: file
    });

    setImagePreview(
      URL.createObjectURL(file)
    );
  };

  const resetForm = () => {

  setFormData(initialForm);

  setImagePreview("");

  setSelectedExpert(null);

};

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const submitData =
        new FormData();

      submitData.append(
        "serialNo",
        formData.serialNo
      );

      submitData.append(
        "regNo",
        formData.regNo
      );

      submitData.append(
        "name",
        formData.name
      );

      submitData.append(
        "designation",
        formData.designation
      );

      submitData.append(
        "qualification",
        formData.qualification
      );

      if (formData.experience !== "") {
        submitData.append(
          "experience",
          formData.experience
        );
      }

      if (formData.photo) {

        submitData.append(
          "photo",
          formData.photo
        );
      }

      if (selectedExpert) {

  await axios.put(
    `${EXPERT_API}/${selectedExpert._id}`,
    submitData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

} else {

  await axios.post(
    EXPERT_API,
    submitData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

}

          fetchExperts();

    resetForm();

    setShowAddModal(false);

    setShowEditModal(false);

  } catch (error) {

    if (error.response?.status === 401) {

      localStorage.removeItem("adminToken");
      localStorage.removeItem("admin");

      window.location.href =
        "/admin-login-bsc-2026";

      return;
    }

    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );

    console.error(error);
  }
};
  const handleEdit = (expert) => {

    setShowAddModal(false);

    setSelectedExpert(expert);

    setFormData({
      serialNo: expert.serialNo || "",
      regNo: expert.regNo || "",
      name: expert.name || "",
      designation: expert.designation || "",
      qualification: expert.qualification || "",
      experience: expert.experience || "",
      photo: null
    });

    setImagePreview(
      expert.photo || ""
    );

    setShowEditModal(true);
  };

  const handleDelete = (expert) => {

    setSelectedExpert(expert);

    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {

    try {

      await axios.delete(
  `${EXPERT_API}/${selectedExpert._id}`,
  authConfig
);

      fetchExperts();

      setShowDeleteModal(false);

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

  const filteredExperts =
    experts
      .filter((expert) =>
        (expert.name || "")
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      )
      .sort((a, b) => {

        if (sortBy === "az") {
          return (a.name || "")
  .localeCompare(
    b.name || ""
  );
        }

        if (sortBy === "za") {
          return (b.name || "")
  .localeCompare(
    a.name || ""
  );
        }

        return (
          a.serialNo - b.serialNo
        );
      });

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        filteredExperts.length /
        expertsPerPage
      )
    );

  const indexOfLastExpert =
    currentPage *
    expertsPerPage;

  const indexOfFirstExpert =
    indexOfLastExpert -
    expertsPerPage;

  const currentExperts =
    filteredExperts.slice(
      indexOfFirstExpert,
      indexOfLastExpert
    );

  const doctorCount =
  experts.filter(
    (item) =>
      (item.qualification || "")
        .toLowerCase()
        .includes("md") ||
      (item.qualification || "")
        .toLowerCase()
        .includes("mbbs")
  ).length;

  const staffCount =
    experts.length -
    doctorCount;

  return (
  <div className="manage-experts">



    <div className="page-header">

  <div>
    <h1>Manage Experts</h1>

    <p>
      Create, update and manage
      expert profiles.
    </p>
  </div>

  <div className="header-actions">

    <button
  className="refresh-btn"
  onClick={async () => {

    await fetchExperts();

resetForm();

setSearch("");

setSortBy("serial");

setCurrentPage(1);

setShowAddModal(false);

setShowEditModal(false);

setShowDeleteModal(false);

  }}
>
  Refresh
</button>

    <button
      className="add-btn"
      onClick={() => {

  if (showAddModal) {

    setShowAddModal(false);

    setShowEditModal(false);

    resetForm();

    return;
  }

  resetForm();

  setShowEditModal(false);

  setShowDeleteModal(false);

  setShowAddModal(true);

}}
    >
      {showAddModal ? "Close Form" : "+ Add Expert"}
    </button>

  </div>

</div>

    {/* STATS */}

    <div className="stats-grid">

      <div className="stat-card">
        <h2>{experts.length}</h2>
        <p>Total Experts</p>
      </div>

      <div className="stat-card">
        <h2>{doctorCount}</h2>
        <p>Doctors</p>
      </div>

      <div className="stat-card">
        <h2>{staffCount}</h2>
        <p>Staff Members</p>
      </div>

    </div>

    {/* SEARCH + SORT */}

    <div className="search-sort-row">

      <input
        type="text"
        placeholder="Search expert..."
        className="search-input"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        className="sort-select"
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
      >
        <option value="serial">
          Serial No
        </option>

        <option value="az">
          Name A-Z
        </option>

        <option value="za">
          Name Z-A
        </option>

      </select>

      

    </div>

    {/* GRID */}

    {loading ? (

      <div className="loading-state">
        Loading Experts...
      </div>

    ) : (

      <div className="experts-grid">

        {currentExperts.map((expert) => (

          <div
            className="expert-card"
            key={expert._id}
          >

            <div className="expert-photo">

              {expert.photo ? (

                <img
                  src={expert.photo}
                  alt={expert.name}
                />

              ) : (

                <div className="expert-placeholder">
                  👨‍⚕️
                </div>

              )}

            </div>

            <div className="expert-info">

              <div className="expert-top">

                <span className="serial-badge">
                  #{expert.serialNo}
                </span>

                <span className="designation-badge">
                  {expert.designation ||
                    "Expert"}
                </span>

              </div>

              <h3>
                {expert.name}
              </h3>

              <p className="qualification">
                {expert.qualification}
              </p>

              <p className="reg-number">
                {expert.regNo
                  ? `Reg No : ${expert.regNo}`
                  : "Registration Number Not Added"}
              </p>

             <p className="experience">
              {expert.experience > 0
                ? `${expert.experience} Years Experience`
                : "Experience Not Added"}
            </p>

            </div>

            <div className="expert-actions">

              <button
                className="edit-btn"
                onClick={() =>
                  handleEdit(expert)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  handleDelete(expert)
                }
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    )}

    {/* PAGINATION */}

    <div className="pagination">

      <button
        disabled={
          currentPage === 1
        }
        onClick={() =>
          setCurrentPage(
            currentPage - 1
          )
        }
      >
        Prev
      </button>

      {[
        ...Array(totalPages)
      ].map((_, index) => (

        <button
          key={index}
          className={
            currentPage ===
            index + 1
              ? "page-btn active"
              : "page-btn"
          }
          onClick={() =>
            setCurrentPage(
              index + 1
            )
          }
        >
          {index + 1}
        </button>

      ))}

      <button
        disabled={
          currentPage ===
          totalPages
        }
        onClick={() =>
          setCurrentPage(
            currentPage + 1
          )
        }
      >
        Next
      </button>

    </div>

    {/* ADD + EDIT MODAL */}

    {(showAddModal ||
      showEditModal) && (

      <div className="modal-overlay">

        <div className="modal-content">

          <h2>
            {showEditModal
              ? "Edit Expert"
              : "Add Expert"}
          </h2>

          <form
            onSubmit={
              handleSubmit
            }
          >

            <div className="form-grid">

              <input
                type="number"
                name="serialNo"
                placeholder="Serial No"
                className="form-input"
                value={
                  formData.serialNo
                }
                onChange={
                  handleChange
                }
                
              />

              <input
                type="text"
                name="regNo"
                placeholder="Registration No"
                className="form-input"
                value={
                  formData.regNo
                }
                onChange={
                  handleChange
                }
                
              />

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
               
              />

              <input
                type="text"
                name="designation"
                placeholder="Designation"
                className="form-input"
                value={formData.designation}
                onChange={handleChange}
              />

              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                className="form-input"
                value={formData.qualification}
                onChange={handleChange}
               
              />

           
              <input
                type="number"
                name="experience"
                placeholder="Experience"
                className="form-input"
                value={formData.experience}
                onChange={handleChange}
              />

            </div>

            <div className="mt-25">

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleImageChange
                }
              />

            </div>

            {imagePreview && (

              <div className="preview-wrapper">

                <img
                  src={imagePreview}
                  alt="preview"
                  className="preview-image"
                />

              </div>

            )}

            <div className="modal-actions">

              <button
                type="button"
                className="close-btn"
                onClick={() => {

  setShowAddModal(false);

  setShowEditModal(false);

  resetForm();

}}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="update-btn"
              >
                {showEditModal
                  ? "Update Expert"
                  : "Add Expert"}
              </button>

            </div>

          </form>

        </div>

      </div>

    )}

    {/* DELETE MODAL */}

    {showDeleteModal && (

      <div className="delete-modal-overlay">

        <div className="delete-modal">

          <h3>
            Delete Expert
          </h3>

          <p>
            Are you sure you want
            to delete this expert?
          </p>

          <div className="delete-modal-actions">

            <button
              className="cancel-btn"
              onClick={() =>
                setShowDeleteModal(
                  false
                )
              }
            >
              Cancel
            </button>

            <button
              className="delete-btn"
              onClick={
                confirmDelete
              }
            >
              Delete
            </button>

          </div>

        </div>

      </div>

    )}

  </div>
);
}

export default ManageExperts;