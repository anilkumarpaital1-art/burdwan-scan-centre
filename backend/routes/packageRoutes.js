const express = require("express");
const router = express.Router();

const Package = require("../models/Package");
const authMiddleware = require("../middleware/authMiddleware");

/* =========================
   GET ALL PACKAGES
========================= */
router.get("/", async (req, res) => {
  try {
    const packages = await Package.find().sort({
      createdAt: -1,
    });

    res.status(200).json(packages);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch packages",
    });
  }
});

/* =========================
   GET SINGLE PACKAGE
========================= */
router.get("/:id", async (req, res) => {
  try {
    const packageItem = await Package.findById(
      req.params.id
    );

    if (!packageItem) {
      return res.status(404).json({
        success: false,
        message: "Package not found",
      });
    }

    res.status(200).json(packageItem);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch package",
    });
  }
});

/* =========================
   CREATE PACKAGE
========================= */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const packageItem = new Package(req.body);

    const savedPackage =
      await packageItem.save();

    res.status(201).json({
      success: true,
      message: "Package created successfully",
      data: savedPackage,
    });
  } catch (error) {
    console.error(error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

/* =========================
   UPDATE PACKAGE
========================= */
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updatedPackage =
      await Package.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedPackage) {
      return res.status(404).json({
        success: false,
        message: "Package not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Package updated successfully",
      data: updatedPackage,
    });
  } catch (error) {
    console.error(error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

/* =========================
   DELETE PACKAGE
========================= */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedPackage =
      await Package.findByIdAndDelete(
        req.params.id
      );

    if (!deletedPackage) {
      return res.status(404).json({
        success: false,
        message: "Package not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Package deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete package",
    });
  }
});

/* =========================
   TOGGLE PACKAGE STATUS
========================= */
router.patch("/:id/status", authMiddleware, async (req, res) => {
  try {
    const packageItem =
      await Package.findById(
        req.params.id
      );

    if (!packageItem) {
      return res.status(404).json({
        success: false,
        message: "Package not found",
      });
    }

    packageItem.status =
      packageItem.status === "active"
        ? "inactive"
        : "active";

    await packageItem.save();

    res.status(200).json({
      success: true,
      message:
        "Package status updated",
      data: packageItem,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to update status",
    });
  }
});

module.exports = router;