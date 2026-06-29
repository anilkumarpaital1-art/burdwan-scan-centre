import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import API from "../../config/api";

const SERVICE_API = `${API}/api/services`;

import "./../styles/ManageServices.css";


const ManageServices = () => {
  const [services, setServices] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [sortBy, setSortBy] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 8;

  const [showAddForm, setShowAddForm] =
  useState(false);

const [successMessage, setSuccessMessage] =
  useState("");


  const [preview, setPreview] = useState("");

  const [editImage, setEditImage] = useState(null);
const [editPreview, setEditPreview] = useState("");

const [showDeleteModal, setShowDeleteModal] = useState(false);
const [selectedService, setSelectedService] = useState(null);

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [editForm, setEditForm] = useState({
  title: "",
  department: "",
  category: "",
  shortDescription: "",
  fullDescription: "",
  benefits: "",
  uses: "",
  status: "active",
});

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    category: "",
    shortDescription: "",
    fullDescription: "",
    status: "active",
    image: null,
  });

  const token =
  localStorage.getItem("adminToken");

const authConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

  const fetchServices = useCallback(async () => {
  try {

    setRefreshing(true);

    const [res] = await Promise.all([
      axios.get(
       SERVICE_API
      ),

      new Promise((resolve) =>
        setTimeout(resolve, 300)
      )
    ]);

    setServices(res.data.data);

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

    setRefreshing(false);

  }
}, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  

  useEffect(() => {
  if (editingService) {
    setEditForm({
      title: editingService.title || "",
      department: editingService.department || "",
      category: editingService.category || "",
      shortDescription:
        editingService.shortDescription || "",
      fullDescription:
        editingService.fullDescription || "",
      benefits:
        editingService.benefits || "",
      uses:
        editingService.uses || "",

        status: editingService.status || "active",
    });
  }
}, [editingService]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAddService = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
      const serviceData = new FormData();

      serviceData.append("title", formData.title);
      serviceData.append(
        "department",
        formData.department
      );
      serviceData.append(
        "category",
        formData.category
      );
      serviceData.append(
        "shortDescription",
        formData.shortDescription
      );
      serviceData.append(
        "fullDescription",
        formData.fullDescription
      );
      serviceData.append(
  "status",
  formData.status
);
      serviceData.append(
        "image",
        formData.image
      );

      await axios.post(
  SERVICE_API,
  serviceData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  }
);

      setSuccessMessage(
  "Service Created Successfully"
);

setTimeout(() => {
  setSuccessMessage("");
}, 3000);

setShowAddForm(false);

      setLoading(false);

      setFormData({
        title: "",
        department: "",
        category: "",
        shortDescription: "",
        fullDescription: "",
        status: "active",
        image: null,
      });

      setPreview("");

      fetchServices();
    } catch (error) {

  if (error.response?.status === 401) {

    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    window.location.href =
      "/admin-login-bsc-2026";

    return;
  }

  console.error(error);

  setLoading(false);

  alert("Failed To Add Service");
}
};


  const handleEditImageChange = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  setEditImage(file);
  setEditPreview(URL.createObjectURL(file));
};

  const updateService = async () => {
  try {

    const serviceData = new FormData();

    serviceData.append(
      "title",
      editForm.title
    );

    serviceData.append(
      "department",
      editForm.department
    );

    serviceData.append(
      "category",
      editForm.category
    );

    serviceData.append(
      "shortDescription",
      editForm.shortDescription
    );

    serviceData.append(
      "fullDescription",
      editForm.fullDescription
    );

    serviceData.append(
      "benefits",
      editForm.benefits
    );

    serviceData.append(
      "uses",
      editForm.uses
    );

    serviceData.append(
  "status",
  editForm.status
);

    if (editImage) {
      serviceData.append(
        "image",
        editImage
      );
    }

    await axios.put(
 `${SERVICE_API}/${editingService._id}`,
  serviceData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  }
);

    setSuccessMessage(
  "Service Updated Successfully"
);

setTimeout(() => {
  setSuccessMessage("");
}, 3000);

    setShowEditModal(false);

    setEditingService(null);

setEditImage(null);

setEditPreview("");

    fetchServices();

  } catch (error) {

  if (error.response?.status === 401) {

    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    window.location.href =
      "/admin-login-bsc-2026";

    return;
  }

  console.error(error);

  alert(
    "Failed To Update Service"
  );

}
};


const filteredServices = services
  .filter((service) => {
    const search = searchTerm
      .trim()
      .toLowerCase();

    if (!search) return true;

    return (
      service.title
        ?.toLowerCase()
        .includes(search) ||
      service.department
        ?.toLowerCase()
        .includes(search) ||
      service.category
        ?.toLowerCase()
        .includes(search) ||
      service.shortDescription
        ?.toLowerCase()
        .includes(search)
    );
  })

  .sort((a, b) => {

  if (sortBy === "all") {
    return 0;
  }

  if (sortBy === "az") {
    return a.title.localeCompare(b.title);
  }

  if (sortBy === "za") {
    return b.title.localeCompare(a.title);
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

const confirmDelete = async () => {
  try {
    await axios.delete(
  `${SERVICE_API}/${selectedService._id}`,
  authConfig
);

    if (
  editingService?._id ===
  selectedService?._id
) {
  setShowEditModal(false);
  setEditingService(null);
}

    fetchServices();

    setSuccessMessage(
  "Service Deleted Successfully"
);

setTimeout(() => {
  setSuccessMessage("");
}, 3000);

    setShowDeleteModal(false);
    setSelectedService(null);
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

const totalServices = services.length;

const totalDepartments =
  new Set(
    services.map(
      (service) => service.department
    )
  ).size;

const totalCategories =
  new Set(
    services.map(
      (service) => service.category
    )
  ).size;

  const indexOfLastService =
  currentPage * servicesPerPage;

const indexOfFirstService =
  indexOfLastService - servicesPerPage;

const paginatedServices =
  filteredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

const totalPages = Math.ceil(
  filteredServices.length /
  servicesPerPage
);




  return (
    <div className="manage-services">

      {successMessage && (
  <div className="success-message">
    {successMessage}
  </div>
)}

      <div className="page-header">

  <div>
    <h1>Manage Services</h1>

    <p>
      Create, update and manage
      diagnostic services.
    </p>
  </div>

  <div className="header-actions">

    <button
  className="refresh-btn"
  onClick={async () => {

  await fetchServices();

  setShowAddForm(false);

  setFormData({
    title: "",
    department: "",
    category: "",
    shortDescription: "",
    fullDescription: "",
    status: "active",
    image: null,
  });

  setPreview("");

  setShowEditModal(false);
setEditingService(null);

  setSelectedService(null);
setEditImage(null);
setEditPreview("");

}}
>
  Refresh
</button>

    <button
  className="add-btn"
  onClick={() => {

    if (showAddForm) {
      setShowAddForm(false);

      setFormData({
        title: "",
        department: "",
        category: "",
        shortDescription: "",
        fullDescription: "",
        status: "active",
        image: null,
      });

      setPreview("");

      return;
    }

    setFormData({
      title: "",
      department: "",
      category: "",
      shortDescription: "",
      fullDescription: "",
      status: "active",
      image: null,
    });

    setPreview("");

    setShowAddForm(true);

  }}
>
      {showAddForm
        ? "Close Form"
        : "+ Add Service"}
    </button>

  </div>

</div>

      <div className="stats-grid">

  <div className="stat-card">
    <h2>{totalServices}</h2>
    <p>Total Services</p>
  </div>

  <div className="stat-card">
    <h2>{totalDepartments}</h2>
    <p>Departments</p>
  </div>

  <div className="stat-card">
    <h2>{totalCategories}</h2>
    <p>Categories</p>
  </div>

</div>

{showAddForm && (

<div className="add-service-card">
  <h2 className="section-title">
    Add New Service
  </h2>

  <form onSubmit={handleAddService}>

    <div className="form-grid">
      <input
        type="text"
        name="title"
        placeholder="Service Title"
        value={formData.title}
        onChange={handleChange}
        className="form-input"
        required
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        className="form-input"
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="form-input"
        required
      />
    </div>

    <textarea
      name="shortDescription"
      placeholder="Short Description"
      value={formData.shortDescription}
      onChange={handleChange}
      rows="4"
      className="form-input mt-25"
      required
    />

    <textarea
      name="fullDescription"
      placeholder="Full Description"
      value={formData.fullDescription}
      onChange={handleChange}
      rows="8"
      className="form-input mt-20"
      required
    />

    <select
  name="status"
  value={formData.status}
  onChange={handleChange}
  
  className="form-input mt-20 status-select"
>
  <option value="active">
    Active
  </option>

  <option value="inactive">
    Inactive
  </option>
</select>

    <div className="mt-25">
      <h4 className="upload-title">
        Upload Service Image
      </h4>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="form-input"
        required
      />
    </div>

    {preview && (
      <div className="preview-wrapper">
        <img
          src={preview}
          alt="Preview"
          className="preview-image"
        />
      </div>
    )}

    <div className="submit-wrapper">
      <button
        type="submit"
        disabled={loading}
        className="submit-btn"
      >
        {loading
          ? "Adding Service..."
          : "Add Service"}
      </button>
    </div>

  </form>
</div>

)}

<div className="search-sort-row">

  <input
    type="text"
    placeholder="Search services..."
    value={searchTerm}
    onChange={(e) => {
  setSearchTerm(e.target.value);
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

{/* SERVICES LIST */}

{refreshing ? (

  <div className="loading-state">
    Loading Services...
  </div>

) : (

<div className="services-grid">

  {filteredServices.length === 0 ? (

    <div className="no-results">
      No services found
    </div>

  ) : (

    paginatedServices.map((service) => (

      <div
        key={service._id}
        className="service-card"
      >

        {service.image && (
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
        )}

        <div className="service-content">

          <h3>{service.title}</h3>

          <p>
            <strong>Department:</strong>{" "}
            {service.department}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {service.category}
          </p>

          

          <p className="service-description">
            {service.shortDescription}
          </p>
          
          <div className="service-status">
  <strong>Status:</strong>{" "}
  <span
    className={
  service.status === "active"
    ? "status-active"
    : "status-inactive"
}
  >
   {service.status === "active"
  ? "Active"
  : "Inactive"}
  </span>
</div>

        </div>

        <div className="service-actions">

          <button
            onClick={() => {
              setEditingService(service);
              setEditPreview(
                service.image || ""
              );
              setShowEditModal(true);
            }}
            className="edit-btn"
          >
            Edit
          </button>

          <button
            onClick={() => {
              setSelectedService(service);
              setShowDeleteModal(true);
            }}
            className="delete-btn"
          >
            Delete
          </button>

        </div>

      </div>

    ))

  )}

</div>

)}


<div className="pagination">

  <button
    disabled={currentPage === 1}
    onClick={() => {
  setCurrentPage(currentPage - 1);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}}
  >
    Prev
  </button>

  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index}
      className={
        currentPage === index + 1
          ? "page-btn active"
          : "page-btn"
      }
      onClick={() => {
  setCurrentPage(index + 1);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}}
    >
      {index + 1}
    </button>
  ))}
  
<button
  disabled={
    currentPage === totalPages ||
    totalPages === 0
  }
  onClick={() => {
    setCurrentPage(currentPage + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
>
  Next
</button>

</div>



{showEditModal && (
  <div className="modal-overlay">
  
    <div className="modal-content">
      <h2>Edit Service</h2>

      <div className="edit-image-section">

  {editPreview && (
    <img
      src={editPreview}
      alt="Preview"
      className="preview-image"
    />
  )}

  <input
    type="file"
    accept="image/*"
    onChange={handleEditImageChange}
    className="form-input mt-20"
  />

</div>

<br />

      <input
        type="text"
        value={editForm.title}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            title: e.target.value,
          })
        }
        placeholder="Service Title"
        className="form-input"
      />

      <br /><br />

      <input
        type="text"
        value={editForm.department}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            department: e.target.value,
          })
        }
        placeholder="Department"
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

      <textarea
        rows="4"
        value={editForm.shortDescription}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            shortDescription: e.target.value,
          })
        }
        placeholder="Short Description"
        className="form-input"
      />

      <br /><br />

      <textarea
        rows="8"
        value={editForm.fullDescription}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            fullDescription: e.target.value,
          })
        }
        placeholder="Full Description"
        className="form-input"
      />

      <br /><br />

      <textarea
        rows="5"
        value={editForm.benefits}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            benefits: e.target.value,
          })
        }
        placeholder="Benefits"
        className="form-input"
      />

      <br /><br />

      <textarea
        rows="5"
        value={editForm.uses}
        onChange={(e) =>
          setEditForm({
            ...editForm,
            uses: e.target.value,
          })
        }
        placeholder="Uses"
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
        type="button"
        className="close-btn"
        onClick={() => {

  setShowEditModal(false);

  setEditingService(null);

  setEditImage(null);

  setEditPreview("");

}}
        >
          Close
        </button>

        <button
  onClick={updateService}
  className="update-btn"
>
  Update Service
</button>
      </div>
    </div>
  </div>
)}


{showDeleteModal && (
  <div className="delete-modal-overlay">
    <div className="delete-modal">
      <h3>Delete Service</h3>

      <p>
        Are you sure you want to delete
        <strong> {selectedService?.title}</strong>?
      </p>

      <div className="delete-modal-actions">
        <button
          className="cancel-btn"
          onClick={() => {
            setShowDeleteModal(false);
            setSelectedService(null);
            }}
        >
          Cancel
        </button>

        <button
          className="delete-btn"
          onClick={confirmDelete}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};


export default ManageServices;