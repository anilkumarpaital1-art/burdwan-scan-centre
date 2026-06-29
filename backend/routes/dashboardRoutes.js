const express = require("express");
const router = express.Router();

const Service = require("../models/Service");
const Package = require("../models/Package");
const Expert = require("../models/Expert");
const Notice = require("../models/Notice");
const Job = require("../models/Job");

const authMiddleware = require("../middleware/authMiddleware");

router.get(
  "/stats",
  authMiddleware,
  async (req, res) => {
  try {
    const [
      totalServices,
      featuredServices,
      activeServices,
      departments,

      totalPackages,
      totalExperts,
      totalNotices,
      totalJobs,

    ] = await Promise.all([
      Service.countDocuments(),

      Service.countDocuments({
        featured: true,
      }),

      Service.countDocuments({
  status: "active",
}),

      Service.distinct("department"),

      Package.countDocuments(),

      Expert.countDocuments(),

      Notice.countDocuments(),

      Job.countDocuments(),


    ]);

    res.status(200).json({
      success: true,

      totalServices,
      featuredServices,
      activeServices,
      totalDepartments: departments.length,

      totalPackages,
      totalExperts,
      totalNotices,
      totalJobs,

    });
  } catch (error) {
    console.error("Dashboard Stats Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;