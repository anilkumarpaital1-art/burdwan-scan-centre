const express = require("express");
const Visitor = require("../models/Visitor");

const router = express.Router();

// Save unique visitor
router.post("/", async (req, res) => {
  try {
    const { visitorId } = req.body;

    const existingVisitor =
      await Visitor.findOne({ visitorId });

    if (!existingVisitor) {
      await Visitor.create({ visitorId });
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get total visitors
router.get("/", async (req, res) => {
  try {
    const totalVisitors =
      await Visitor.countDocuments();

    res.status(200).json({
      success: true,
      totalVisitors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;