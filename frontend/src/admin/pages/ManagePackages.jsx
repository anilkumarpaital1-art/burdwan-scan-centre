import { useEffect, useState } from "react";
import axios from "axios";
import API from "../../config/api";

const PACKAGE_API = `${API}/api/packages`;

import "./../styles/ManagePackages.css";

const ManagePackages = () => {
  const [packages, setPackages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("all");

const [currentPage, setCurrentPage] = useState(1);

const packagesPerPage = 8;

const initialForm = {
  title: "",
  category: "",
  price: "",
  discountedPrice: "",
  testsIncluded: "",
  shortDescription: "",
  status: "active",
};

const [editingId, setEditingId] =
  useState(null);

const [showEditModal, setShowEditModal] =
  useState(false);

const [editForm, setEditForm] =
  useState(initialForm);

const [message, setMessage] = useState("");



  const [formData, setFormData] =
    useState(initialForm);

    const token =
  localStorage.getItem("adminToken");

const authConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

  const fetchPackages = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
  PACKAGE_API
);

      setPackages(res.data);
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
    fetchPackages();
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
    const payload = {
      title: formData.title,
      category: formData.category,
      price: Number(formData.price),
      discountedPrice: Number(
        formData.discountedPrice
      ),
      testsIncluded: formData.testsIncluded
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      shortDescription:
        formData.shortDescription,
      status: formData.status,
    };

    await axios.post(
  PACKAGE_API,
  payload,
  authConfig
);

setMessage(
  "✅ Package created successfully"
);

    setTimeout(() => {
      setMessage("");
    }, 3000);

    setFormData(initialForm);
    setEditingId(null);
    setShowForm(false);
    setShowEditModal(false);

    fetchPackages();

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

  const deletePackage = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this package?"
      );

    if (!confirmDelete) return;

    try {
      await axios.delete(
  `${PACKAGE_API}/${id}`,
  authConfig
);

if (editingId === id) {
  setEditingId(null);
  setFormData(initialForm);
  setShowForm(false);
}

setMessage(
  "✅ Package deleted successfully"
);

setTimeout(() => {
  setMessage("");
}, 3000);

fetchPackages();
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

  const filteredPackages = packages
  .filter((pkg) =>
    pkg.title
      ?.toLowerCase()
      .includes(search.toLowerCase())
  )

  .sort((a, b) => {

    if (sortBy === "all") {
      return 0;
    }

    if (sortBy === "az") {
      return a.title.localeCompare(
        b.title
      );
    }

    if (sortBy === "za") {
      return b.title.localeCompare(
        a.title
      );
    }

    if (sortBy === "oldest") {
      return (
        new Date(a.createdAt) -
        new Date(b.createdAt)
      );
    }

    return (
      new Date(b.createdAt) -
      new Date(a.createdAt)
    );
  });


  const indexOfLastPackage =
  currentPage * packagesPerPage;

const indexOfFirstPackage =
  indexOfLastPackage -
  packagesPerPage;

const paginatedPackages =
  filteredPackages.slice(
    indexOfFirstPackage,
    indexOfLastPackage
  );

const totalPages = Math.ceil(
  filteredPackages.length /
  packagesPerPage
);


const editPackage = (pkg) => {

  setShowForm(false);

  setEditingId(pkg._id);

  setEditForm({
    title: pkg.title || "",
    category: pkg.category || "",
    price: pkg.price || "",
    discountedPrice:
      pkg.discountedPrice || "",
    testsIncluded:
      pkg.testsIncluded?.join(", ") || "",
    shortDescription:
      pkg.shortDescription || "",
    status:
      pkg.status || "active",
  });

  setShowEditModal(true);
};

const updatePackage = async () => {

  try {

    const payload = {
      title: editForm.title,
      category: editForm.category,
      price: Number(editForm.price),

      discountedPrice: Number(
        editForm.discountedPrice
      ),

      testsIncluded:
        editForm.testsIncluded
          .split(",")
          .map(item => item.trim())
          .filter(Boolean),

      shortDescription:
        editForm.shortDescription,

      status: editForm.status,
    };

    await axios.put(
  `${PACKAGE_API}/${editingId}`,
  payload,
  authConfig
);

    setMessage(
  "✅ Package updated successfully"
);

setTimeout(() => {
  setMessage("");
}, 3000);

    setShowEditModal(false);

    setEditingId(null);

    setEditForm(initialForm);

    fetchPackages();

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

  return (
    <div className="manage-packages">

      {message && (
  <div className="success-message">
    {message}
  </div>
)}

      {/* Header */}

      <div className="page-header">

        <div>
          <h1>Manage Packages</h1>

          <p>
            Create, update and manage
            health packages.
          </p>
        </div>

        <div className="header-actions">

          <button
            type="button"
            className="refresh-btn"
            onClick={() => {
  fetchPackages();
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
  type="button"
  className="add-btn"
  onClick={() => {

    if (showForm) {
      setShowForm(false);
      setShowEditModal(false);
      setEditingId(null);
      setFormData(initialForm);
      return;
    }

    setEditingId(null);
    setFormData(initialForm);
    setShowEditModal(false);
    setShowForm(true);

  }}
>
  {showForm
    ? "Close Form"
    : "+ Add Package"}
</button>

        </div>

      </div>

      {/* Stats */}

      <div className="package-stats">

        <div className="package-stat-card">
          <h3>
            {packages.length}
          </h3>
          <p>Total Packages</p>
        </div>

        <div className="package-stat-card">
          <h3>
            {
              packages.filter(
                (p) =>
                  p.status ===
                  "active"
              ).length
            }
          </h3>
          <p>Active</p>
        </div>

        <div className="package-stat-card">
          <h3>
            {
              packages.filter(
                (p) =>
                  p.status ===
                  "inactive"
              ).length
            }
          </h3>
          <p>Inactive</p>
        </div>

      </div>

      {/* Form */}

      {showForm && (
        <div className="package-form-card">

          <h2>Add New Package</h2>

          <form
            onSubmit={
              handleSubmit
            }
            className="package-form"
          >

            <input
              type="text"
              name="title"
              placeholder="Package Name"
              value={
                formData.title
              }
              onChange={
                handleChange
              }
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={
                formData.category
              }
              onChange={
                handleChange
              }
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={
                formData.price
              }
              onChange={
                handleChange
              }
              required
            />

            <input
              type="number"
              name="discountedPrice"
              placeholder="Discounted Price"
              value={
                formData.discountedPrice
              }
              onChange={
                handleChange
              }
              required
            />

            <textarea
              name="testsIncluded"
              placeholder="CBC, LFT, KFT, Sugar"
              value={
                formData.testsIncluded
              }
              onChange={
                handleChange
              }
            />

            <textarea
              name="shortDescription"
              placeholder="Short Description"
              value={
                formData.shortDescription
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
  Save Package
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

      {/* Search */}

      <div className="search-sort-row">

  <input
    type="text"
    placeholder="Search package..."
    value={search}
    onChange={(e) => {
      setSearch(e.target.value);
      setCurrentPage(1);
    }}
    className="search-input"
  />

  <select
    value={sortBy}
    onChange={(e) => {
      setSortBy(e.target.value);
      setCurrentPage(1);
    }}
    className="sort-select"
  >
    <option value="all">All</option>
    <option value="newest">Newest</option>
    <option value="oldest">Oldest</option>
    <option value="az">A-Z</option>
    <option value="za">Z-A</option>
  </select>

</div>

      {/* Table */}

      <div className="table-card desktop-table">

        {loading ? (
          <div className="loading">
            Loading Packages...
          </div>
        ) : filteredPackages.length ===
          0 ? (
          <div className="empty-state">
            No Packages Found
          </div>
        ) : (
          <table className="package-table">

            

            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Offer</th>
                <th>Tests</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedPackages.map(
                (pkg) => (
                  <tr
                    key={
                      pkg._id
                    }
                  >
                    <td>
                      {
                        pkg.title
                      }
                    </td>

                    <td>
                      {
                        pkg.category
                      }
                    </td>

                    <td>
                      ₹
                      {
                        pkg.price
                      }
                    </td>

                    <td>
                      ₹
                      {
                        pkg.discountedPrice
                      }
                    </td>

                    <td>
                      {pkg
                        .testsIncluded
                        ?.length || 0}
                    </td>

                  <td>
  <span
    className={
      pkg.status === "active"
        ? "status-active"
        : "status-inactive"
    }
  >
    {pkg.status}
  </span>
</td>

<td className="action-buttons">
  <button
    type="button"
    className="edit-btn"
    onClick={() => editPackage(pkg)}
  >
    Edit
  </button>

  <button
    type="button"
    className="delete-btn"
    onClick={() =>
      deletePackage(pkg._id)
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
  {paginatedPackages.map((pkg) => (
    <div className="mobile-package-card" key={pkg._id}>
      <h3>{pkg.title}</h3>

      <p><strong>Category:</strong> {pkg.category}</p>

      <p><strong>Price:</strong> ₹{pkg.price}</p>

      <p><strong>Offer:</strong> ₹{pkg.discountedPrice}</p>

      <p><strong>Tests:</strong> {pkg.testsIncluded?.length || 0}</p>

      <p>
  <strong>Status:</strong>{" "}
  <span
    className={
      pkg.status === "active"
        ? "status-active"
        : "status-inactive"
    }
  >
    {pkg.status}
  </span>
</p>

      <div className="mobile-actions">
        <button
          className="edit-btn"
          onClick={() => editPackage(pkg)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deletePackage(pkg._id)}
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

      <h2>Edit Package</h2>

      <input
        type="text"
        value={editForm.title}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            title: e.target.value,
          })
        }
        placeholder="Package Name"
        className="form-input"
      />

      <br /><br />

      <input
        type="text"
        value={editForm.category}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            category: e.target.value,
          })
        }
        placeholder="Category"
        className="form-input"
      />

      <br /><br />

      <input
        type="number"
        value={editForm.price}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            price: e.target.value,
          })
        }
        placeholder="Price"
        className="form-input"
      />

      <br /><br />

      <input
        type="number"
        value={editForm.discountedPrice}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            discountedPrice:
              e.target.value,
          })
        }
        placeholder="Discount Price"
        className="form-input"
      />

      <br /><br />

      <textarea
        rows="4"
        value={editForm.testsIncluded}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            testsIncluded:
              e.target.value,
          })
        }
        placeholder="Tests Included"
        className="form-input"
      />

      <br /><br />

      <textarea
        rows="5"
        value={editForm.shortDescription}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            shortDescription:
              e.target.value,
          })
        }
        placeholder="Short Description"
        className="form-input"
      />

      <br /><br />

      <select
        value={editForm.status}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            status: e.target.value,
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
          onClick={updatePackage}
        >
          Update Package
        </button>

      </div>

    </div>

  </div>
)}

    </div>
  );
};

export default ManagePackages;